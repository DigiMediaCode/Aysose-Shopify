/*
 * Builds the data for the one-page-per-graphics-card pages from the same parts lists and
 * estimates the checker uses (assets/pc-checker.js). Run again whenever the estimates change,
 * then update each page's `custom.card` metafield with the new value:
 *
 *   node tools/generate-card-pages.mjs > card-pages.json
 *
 * Each entry has `title` (the page title; Shopify derives the page address from it) and `card`,
 * the JSON stored in the page metafield `custom.card`:
 *   n  card name, exactly as the checker lists it
 *   v  video memory in GB
 *   l  one letter per quality level: p = should run, n = borderline, f = unlikely
 *   r  one letter per quality level saying why: - nothing, s = speed, v = video memory, b = both
 *   b  highest level that passes (-1 if none)      x  first level that does not pass (-1 if none)
 *   t  highest level that passes as a laptop card  d / u  next card down / up in the list
 * The page text itself is written by sections/pc-checker.liquid from this data. The level names
 * and example parts are repeated there, so keep them in step with TIERS.
 */
import { GPUS, TIERS, checkTier } from '../assets/pc-checker.js';

const LAPTOP_FACTOR = 0.8;
const LETTER = { pass: 'p', near: 'n', fail: 'f' };

const cards = Object.values(GPUS)
  .flat()
  .filter((card) => card[0] !== 'Built-in graphics only')
  .map(([name, score, vram]) => ({ name, score, vram }));

// Judge the card on its own: assume the processor, memory and drive are not the limit.
const judge = (score, vram) =>
  TIERS.map((tier) => checkTier({ gpu: score, vram, cpu: 999, ram: 64, ssd: true }, tier));
const bestIndex = (results) => results.map((result) => result.status).lastIndexOf('pass');

const sorted = [...cards].sort((a, b) => a.score - b.score);

const pages = cards.map((card) => {
  const results = judge(card.score, card.vram);
  const index = sorted.findIndex((other) => other.name === card.name);
  const slower = [...sorted.slice(0, index)].reverse().find((other) => other.score < card.score);
  const faster = sorted.slice(index + 1).find((other) => other.score > card.score);
  return {
    title: `Can the ${card.name} run GTA 6?`,
    card: {
      n: card.name,
      v: card.vram,
      l: results.map((result) => LETTER[result.status]).join(''),
      r: results
        .map(({ parts }) => {
          const speed = parts.gpu !== 'pass';
          const memory = parts.vram !== 'pass';
          return speed && memory ? 'b' : speed ? 's' : memory ? 'v' : '-';
        })
        .join(''),
      b: bestIndex(results),
      x: results.findIndex((result) => result.status !== 'pass'),
      t: bestIndex(judge(Math.round(card.score * LAPTOP_FACTOR), card.vram)),
      d: slower ? slower.name : '',
      u: faster ? faster.name : '',
    },
  };
});

process.stdout.write(JSON.stringify(pages, null, 2));
