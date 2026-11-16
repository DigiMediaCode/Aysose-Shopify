/*
 * Builds the text for the one-page-per-graphics-card pages from the same parts lists and
 * estimates the checker uses (assets/pc-checker.js). Run again whenever the estimates change:
 *
 *   node tools/generate-card-pages.mjs > card-pages.json
 *
 * Each entry has: title, handle, gpu (exact name used by the checker), description and bodyHtml.
 */
import { GPUS, TIERS, checkTier } from '../assets/pc-checker.js';

const STATUS = { pass: 'Should run', near: 'Borderline', fail: 'Unlikely' };
const LAPTOP_FACTOR = 0.8;

const cards = Object.values(GPUS)
  .flat()
  .filter((card) => card[0] !== 'Built-in graphics only')
  .map(([name, score, vram]) => ({ name, score, vram }));

const slug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
const handleFor = (name) => `can-${slug(name)}-run-gta-6`;

// Judge the card on its own: assume the processor, memory and drive are not the limit.
const judge = (score, vram) =>
  TIERS.map((tier) => ({ tier, ...checkTier({ gpu: score, vram, cpu: 999, ram: 64, ssd: true }, tier) }));

const reason = (parts, tier, vram) => {
  const notes = [];
  if (parts.gpu !== 'pass') notes.push('not fast enough on our estimate');
  if (parts.vram !== 'pass') notes.push(`${vram} GB of video memory against an estimated ${tier.vram} GB`);
  return notes.length ? ` (${notes.join('; ')})` : '';
};

const sorted = [...cards].sort((a, b) => a.score - b.score);

const pages = cards.map((card) => {
  const results = judge(card.score, card.vram);
  const best = [...results].reverse().find((result) => result.status === 'pass');
  const next = results.find((result) => result.status !== 'pass');
  const lowest = results[0];

  let verdict;
  if (best) verdict = `the ${card.name} should run GTA 6 on PC at ${best.tier.label}`;
  else if (lowest.status === 'near') verdict = `the ${card.name} is borderline for GTA 6 on PC, even at 1080p with low settings`;
  else verdict = `the ${card.name} is unlikely to run GTA 6 on PC`;

  const laptopResults = judge(Math.round(card.score * LAPTOP_FACTOR), card.vram);
  const laptopBest = [...laptopResults].reverse().find((result) => result.status === 'pass');

  const index = sorted.findIndex((other) => other.name === card.name);
  const slower = [...sorted.slice(0, index)].reverse().find((other) => other.score < card.score);
  const faster = sorted.slice(index + 1).find((other) => other.score > card.score);
  const link = (other) => `<a href="/pages/${handleFor(other.name)}">${other.name}</a>`;
  const neighbours = [];
  if (slower) neighbours.push(`${link(slower)} is the next card down in our list`);
  if (faster) neighbours.push(`${link(faster)} is the next card up`);

  const body = [
    `<p><strong>Our estimate: ${verdict}${best ? ', as long as the processor, memory and drive keep up' : ''}.</strong></p>`,
    '<p>Rockstar has not announced a PC version of Grand Theft Auto VI or its requirements, so this is our own estimate and not an official figure.</p>',
    `<h2>${card.name} at each quality level</h2>`,
    `<ul>${results
      .map((result) => `<li>${result.tier.label}: ${STATUS[result.status]}${reason(result.parts, result.tier, card.vram)}</li>`)
      .join('')}</ul>`,
    `<h2>What would it take to go higher?</h2>`,
    next
      ? `<p>The ${card.name} has ${card.vram} GB of video memory. Our estimate for ${next.tier.label} is a card around ${next.tier.gpuExample} with ${next.tier.vram} GB.</p>`
      : `<p>The ${card.name} has ${card.vram} GB of video memory and clears every level in our estimate, including 4K at high settings.</p>`,
    neighbours.length ? `<p>For comparison, ${neighbours.join(', and ')}.</p>` : '',
    '<h2>Laptop version</h2>',
    `<p>Laptop versions of a graphics card are roughly a fifth slower than the desktop card with the same name. If yours is in a laptop, our estimate ${
      laptopBest ? `is ${laptopBest.tier.label}` : 'falls below the lowest level'
    }.</p>`,
    '<p>The graphics card is only one part. Add your processor, memory and drive in the checker below for the full result.</p>',
  ]
    .filter(Boolean)
    .join('\n');

  return {
    title: `Can the ${card.name} run GTA 6?`,
    handle: handleFor(card.name),
    gpu: card.name,
    description: `Our estimate: ${verdict}. See every quality level for this card and check your full PC. Unofficial estimate.`,
    bodyHtml: body,
  };
});

process.stdout.write(JSON.stringify(pages, null, 2));
