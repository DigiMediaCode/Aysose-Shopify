/*
 * PC checker: estimates whether a PC could run a game that has no published PC requirements yet.
 *
 * Every number here is an estimate. Scores are approximate relative gaming performance
 * (graphics cards: RTX 3060 = 100, processors: Ryzen 5 3600 = 100). Edit the lists and the
 * TIERS table below when official requirements are published.
 */

// [name, score, video memory in GB]
export const GPUS = {
  'Nvidia GeForce RTX 50': [
    ['RTX 5090', 400, 32],
    ['RTX 5080', 300, 16],
    ['RTX 5070 Ti', 265, 16],
    ['RTX 5070', 215, 12],
    ['RTX 5060 Ti 16GB', 165, 16],
    ['RTX 5060', 140, 8],
  ],
  'Nvidia GeForce RTX 40': [
    ['RTX 4090', 335, 24],
    ['RTX 4080 Super', 270, 16],
    ['RTX 4080', 265, 16],
    ['RTX 4070 Ti Super', 235, 16],
    ['RTX 4070 Ti', 215, 12],
    ['RTX 4070 Super', 200, 12],
    ['RTX 4070', 175, 12],
    ['RTX 4060 Ti', 140, 8],
    ['RTX 4060', 118, 8],
  ],
  'Nvidia GeForce RTX 30': [
    ['RTX 3090', 215, 24],
    ['RTX 3080 Ti', 210, 12],
    ['RTX 3080', 190, 10],
    ['RTX 3070 Ti', 157, 8],
    ['RTX 3070', 148, 8],
    ['RTX 3060 Ti', 130, 8],
    ['RTX 3060', 100, 12],
    ['RTX 3050', 72, 8],
  ],
  'Nvidia GeForce RTX 20': [
    ['RTX 2080 Ti', 135, 11],
    ['RTX 2080 Super', 117, 8],
    ['RTX 2080', 112, 8],
    ['RTX 2070 Super', 105, 8],
    ['RTX 2070', 95, 8],
    ['RTX 2060 Super', 92, 8],
    ['RTX 2060', 80, 6],
  ],
  'Nvidia GeForce GTX': [
    ['GTX 1080 Ti', 105, 11],
    ['GTX 1080', 82, 8],
    ['GTX 1070 Ti', 76, 8],
    ['GTX 1070', 67, 8],
    ['GTX 1660 Ti', 68, 6],
    ['GTX 1660 Super', 66, 6],
    ['GTX 1660', 58, 6],
    ['GTX 1650 Super', 52, 4],
    ['GTX 1060 6GB', 50, 6],
    ['GTX 1650', 40, 4],
    ['GTX 1050 Ti', 33, 4],
  ],
  'AMD Radeon RX 9000': [
    ['RX 9070 XT', 260, 16],
    ['RX 9070', 235, 16],
    ['RX 9060 XT 16GB', 160, 16],
  ],
  'AMD Radeon RX 7000': [
    ['RX 7900 XTX', 280, 24],
    ['RX 7900 XT', 245, 20],
    ['RX 7900 GRE', 210, 16],
    ['RX 7800 XT', 195, 16],
    ['RX 7700 XT', 165, 12],
    ['RX 7600 XT', 122, 16],
    ['RX 7600', 115, 8],
  ],
  'AMD Radeon RX 6000': [
    ['RX 6900 XT', 215, 16],
    ['RX 6800 XT', 200, 16],
    ['RX 6800', 175, 16],
    ['RX 6750 XT', 145, 12],
    ['RX 6700 XT', 140, 12],
    ['RX 6650 XT', 115, 8],
    ['RX 6600 XT', 112, 8],
    ['RX 6600', 95, 8],
  ],
  'AMD Radeon, older': [
    ['RX 5700 XT', 100, 8],
    ['RX 5700', 88, 8],
    ['RX 5600 XT', 78, 6],
    ['RX 5500 XT', 55, 8],
    ['RX 580 8GB', 48, 8],
    ['RX 570', 40, 4],
  ],
  'Intel Arc': [
    ['Arc B580', 120, 12],
    ['Arc B570', 105, 10],
    ['Arc A770 16GB', 100, 16],
    ['Arc A750', 95, 8],
  ],
  'No graphics card': [['Built-in graphics only', 20, 2]],
};

// [name, score]
export const CPUS = {
  'AMD Ryzen 9000': [
    ['Ryzen 7 9800X3D', 230],
    ['Ryzen 9 9950X3D', 225],
    ['Ryzen 7 9700X', 178],
    ['Ryzen 5 9600X', 172],
  ],
  'AMD Ryzen 7000': [
    ['Ryzen 7 7800X3D', 210],
    ['Ryzen 9 7950X', 175],
    ['Ryzen 7 7700X', 170],
    ['Ryzen 5 7600', 162],
    ['Ryzen 5 7500F', 160],
  ],
  'AMD Ryzen 5000': [
    ['Ryzen 7 5800X3D', 170],
    ['Ryzen 9 5900X', 140],
    ['Ryzen 7 5800X', 138],
    ['Ryzen 7 5700X', 132],
    ['Ryzen 5 5600X', 130],
    ['Ryzen 5 5600', 128],
    ['Ryzen 5 5500', 108],
  ],
  'AMD Ryzen, older': [
    ['Ryzen 9 3900X', 108],
    ['Ryzen 7 3700X', 105],
    ['Ryzen 5 3600', 100],
    ['Ryzen 7 2700X', 80],
    ['Ryzen 5 2600', 72],
    ['Ryzen 5 1600', 62],
  ],
  'Intel Core Ultra': [
    ['Core Ultra 9 285K', 180],
    ['Core Ultra 7 265K', 172],
    ['Core Ultra 5 245K', 160],
  ],
  'Intel Core 13th and 14th gen': [
    ['Core i9-14900K', 188],
    ['Core i9-13900K', 185],
    ['Core i7-14700K', 180],
    ['Core i7-13700K', 175],
    ['Core i5-14600K', 168],
    ['Core i5-13600K', 165],
    ['Core i5-14400', 135],
    ['Core i5-13400', 132],
  ],
  'Intel Core 12th gen': [
    ['Core i7-12700K', 150],
    ['Core i5-12600K', 140],
    ['Core i5-12400', 125],
    ['Core i3-12100', 105],
  ],
  'Intel Core 10th and 11th gen': [
    ['Core i7-11700K', 118],
    ['Core i7-10700K', 110],
    ['Core i5-11400', 105],
    ['Core i5-10400', 92],
    ['Core i3-10100', 72],
  ],
  'Intel Core, older': [
    ['Core i9-9900K', 105],
    ['Core i7-9700K', 98],
    ['Core i7-8700K', 90],
    ['Core i5-9600K', 85],
    ['Core i5-9400F', 78],
    ['Core i5-8400', 75],
    ['Core i7-6700K', 70],
    ['Core i5-6500', 55],
  ],
};

export const TIERS = [
  {
    id: 'min',
    label: '1080p, low settings',
    target: 'about 30 frames a second',
    gpu: 66,
    vram: 6,
    cpu: 90,
    ram: 16,
    gpuExample: 'GTX 1660 Super or RX 5600 XT',
    cpuExample: 'Core i5-10400 or Ryzen 5 3600',
  },
  {
    id: 'rec',
    label: '1080p, high settings',
    target: 'about 60 frames a second',
    gpu: 130,
    vram: 8,
    cpu: 125,
    ram: 16,
    gpuExample: 'RTX 3060 Ti or RX 6700 XT',
    cpuExample: 'Core i5-12400 or Ryzen 5 5600',
  },
  {
    id: 'qhd',
    label: '1440p, high settings',
    target: 'about 60 frames a second',
    gpu: 195,
    vram: 12,
    cpu: 130,
    ram: 16,
    gpuExample: 'RTX 4070 Super or RX 7800 XT',
    cpuExample: 'Core i5-12600K or Ryzen 5 5600X',
  },
  {
    id: 'uhd',
    label: '4K, high settings',
    target: 'about 60 frames a second',
    gpu: 265,
    vram: 16,
    cpu: 140,
    ram: 32,
    gpuExample: 'RTX 4080 or RX 9070 XT',
    cpuExample: 'Core i5-13600K or Ryzen 7 7700X',
  },
];

const NEAR = 0.88; // within 12% of the estimate counts as borderline
const LAPTOP_FACTOR = 0.8; // laptop versions of a card are roughly a fifth slower
const STATUS_TEXT = { pass: 'Should run', near: 'Borderline', fail: 'Unlikely' };

/**
 * @param {{gpu: number, vram: number, cpu: number, ram: number, ssd: boolean}} pc
 * @param {typeof TIERS[number]} tier
 */
export function checkTier(pc, tier) {
  const parts = {
    gpu: pc.gpu >= tier.gpu ? 'pass' : pc.gpu >= tier.gpu * NEAR ? 'near' : 'fail',
    vram: pc.vram >= tier.vram ? 'pass' : pc.vram >= tier.vram - 2 ? 'near' : 'fail',
    cpu: pc.cpu >= tier.cpu ? 'pass' : pc.cpu >= tier.cpu * NEAR ? 'near' : 'fail',
    ram: pc.ram >= tier.ram ? 'pass' : pc.ram >= tier.ram * 0.75 ? 'near' : 'fail',
    storage: pc.ssd ? 'pass' : 'near',
  };
  const values = Object.values(parts);
  const status = values.includes('fail') ? 'fail' : values.includes('near') ? 'near' : 'pass';
  return { status, parts };
}

function reasonText(parts, tier) {
  const reasons = [];
  if (parts.gpu !== 'pass') reasons.push('graphics card speed');
  if (parts.vram !== 'pass') reasons.push(`video memory (${tier.vram} GB estimated)`);
  if (parts.cpu !== 'pass') reasons.push('processor');
  if (parts.ram !== 'pass') reasons.push(`memory (${tier.ram} GB estimated)`);
  if (parts.storage !== 'pass') reasons.push('hard drive (expect an SSD to be needed)');
  return reasons;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function fillSelect(select, groups, selected) {
  for (const [group, items] of Object.entries(groups)) {
    const optgroup = document.createElement('optgroup');
    optgroup.label = group;
    for (const item of items) {
      const option = document.createElement('option');
      option.value = item[0];
      option.textContent = item.length > 2 ? `${item[0]} (${item[2]} GB)` : item[0];
      if (item[0] === selected) option.selected = true;
      optgroup.append(option);
    }
    select.append(optgroup);
  }
}

function find(groups, name) {
  for (const items of Object.values(groups)) {
    const hit = items.find((item) => item[0] === name);
    if (hit) return hit;
  }
  return null;
}

function scaleBar(title, value, max, marks, valueLabel) {
  const wrap = el('div', 'pc-checker__scale');
  wrap.append(el('div', 'pc-checker__scale-title', title));
  const track = el('div', 'pc-checker__track');
  const fill = el('div', 'pc-checker__fill');
  fill.style.width = `${Math.min(100, (value / max) * 100)}%`;
  track.append(fill);
  for (const mark of marks) {
    const tick = el('span', 'pc-checker__tick');
    tick.style.left = `${Math.min(100, (mark.value / max) * 100)}%`;
    tick.title = mark.label;
    track.append(tick);
  }
  wrap.append(track);
  wrap.append(el('div', 'pc-checker__scale-note', valueLabel));
  return wrap;
}

// Upgrade suggestions only name parts from ranges that are still sold new.
const CURRENT_GPU_GROUPS = ['Nvidia GeForce RTX 50', 'AMD Radeon RX 9000', 'Intel Arc'];
const CURRENT_GPU_SKIP = ['Arc A770 16GB', 'Arc A750'];
const CURRENT_CPU_GROUPS = [
  'AMD Ryzen 9000',
  'AMD Ryzen 7000',
  'AMD Ryzen 5000',
  'Intel Core Ultra',
  'Intel Core 13th and 14th gen',
];

// The least powerful parts still sold new that clear one quality level on their own
// (usually the cheapest way to reach it). Used by the result and by tools/generate-card-pages.mjs.
export function bestPicks(kind, tier, count = 3) {
  if (kind === 'gpu') {
    return CURRENT_GPU_GROUPS.flatMap((group) => GPUS[group])
      .filter(([name]) => !CURRENT_GPU_SKIP.includes(name))
      .map(([name, score, vram]) => ({ name, score, vram }))
      .sort((a, b) => a.score - b.score)
      .filter((card) => card.score >= tier.gpu && card.vram >= tier.vram)
      .slice(0, count);
  }
  return CURRENT_CPU_GROUPS.flatMap((group) => CPUS[group])
    .map(([name, score]) => ({ name, score }))
    .sort((a, b) => a.score - b.score)
    .filter((processor) => processor.score >= tier.cpu)
    .slice(0, count);
}

// Our own drawings for the part cards (not product photos). Keep the first two in step with
// snippets/pc-part-card.liquid.
const PART_ART = {
  gpu: '<rect x="4" y="8" width="5" height="50" rx="1.5" fill="currentColor" opacity="0.55"/><rect x="11" y="12" width="104" height="38" rx="6" fill="currentColor" opacity="0.16"/><rect x="11" y="12" width="104" height="38" rx="6" stroke="currentColor" stroke-width="2"/><circle cx="38" cy="31" r="13" stroke="currentColor" stroke-width="2"/><circle cx="38" cy="31" r="3.5" fill="currentColor"/><path d="M38 18v9M38 35v9M25 31h9M42 31h9" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.7"/><circle cx="86" cy="31" r="13" stroke="currentColor" stroke-width="2"/><circle cx="86" cy="31" r="3.5" fill="currentColor"/><path d="M86 18v9M86 35v9M73 31h9M90 31h9" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.7"/><rect x="22" y="50" width="44" height="6" rx="1.5" fill="currentColor" opacity="0.55"/>',
  cpu: '<rect x="38" y="10" width="44" height="44" rx="6" fill="currentColor" opacity="0.16"/><rect x="38" y="10" width="44" height="44" rx="6" stroke="currentColor" stroke-width="2"/><rect x="49" y="21" width="22" height="22" rx="3" stroke="currentColor" stroke-width="2"/><path d="M46 4v6M56 4v6M64 4v6M74 4v6M46 54v6M56 54v6M64 54v6M74 54v6M32 18h6M32 28h6M32 36h6M32 46h6M82 18h6M82 28h6M82 36h6M82 46h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.7"/>',
  ram: '<rect x="10" y="18" width="100" height="26" rx="4" fill="currentColor" opacity="0.16"/><rect x="10" y="18" width="100" height="26" rx="4" stroke="currentColor" stroke-width="2"/><rect x="20" y="24" width="14" height="12" rx="2" stroke="currentColor" stroke-width="2"/><rect x="42" y="24" width="14" height="12" rx="2" stroke="currentColor" stroke-width="2"/><rect x="64" y="24" width="14" height="12" rx="2" stroke="currentColor" stroke-width="2"/><rect x="86" y="24" width="14" height="12" rx="2" stroke="currentColor" stroke-width="2"/><path d="M18 44v6M26 44v6M34 44v6M42 44v6M50 44v6M70 44v6M78 44v6M86 44v6M94 44v6M102 44v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.7"/>',
  ssd: '<rect x="8" y="22" width="104" height="22" rx="4" fill="currentColor" opacity="0.16"/><rect x="8" y="22" width="104" height="22" rx="4" stroke="currentColor" stroke-width="2"/><rect x="18" y="28" width="26" height="10" rx="2" stroke="currentColor" stroke-width="2"/><rect x="52" y="28" width="18" height="10" rx="2" stroke="currentColor" stroke-width="2"/><rect x="78" y="28" width="12" height="10" rx="2" stroke="currentColor" stroke-width="2"/><circle cx="102" cy="33" r="3" fill="currentColor" opacity="0.7"/>',
  pc: '<rect x="42" y="4" width="36" height="56" rx="5" fill="currentColor" opacity="0.16"/><rect x="42" y="4" width="36" height="56" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="24" r="9" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="24" r="2.5" fill="currentColor"/><path d="M50 42h20M50 49h20" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.7"/><circle cx="60" cy="10" r="1.5" fill="currentColor"/>',
};

function partTone(name) {
  if (/^(RTX|GTX)/.test(name)) return 'green';
  if (/^RX /.test(name)) return 'red';
  if (/^(Arc|Core)/.test(name)) return 'blue';
  if (/^Ryzen/.test(name)) return 'orange';
  return 'neutral';
}

// One recommended part as a visual card with a button to Amazon. `page` adds a link to our own page.
function partCard({ art, name, spec, url, page }) {
  const card = el('li', `pc-checker__part pc-checker__part--${partTone(name)}`);
  const picture = el('span', 'pc-checker__part-art');
  picture.setAttribute('aria-hidden', 'true');
  picture.innerHTML = `<svg viewBox="0 0 120 64" fill="none" focusable="false">${PART_ART[art]}</svg>`;
  const body = el('span', 'pc-checker__part-body');
  body.append(el('strong', 'pc-checker__part-name', name));
  if (spec) body.append(el('span', 'pc-checker__part-spec', spec));
  if (page) {
    const more = el('a', 'pc-checker__part-more', 'Our estimate for this part');
    more.href = page;
    body.append(more);
  }
  const button = el('a', 'pc-checker__part-button', 'Check price on Amazon');
  button.href = url;
  button.target = '_blank';
  button.rel = 'sponsored nofollow noopener';
  button.setAttribute('aria-label', `Check price on Amazon for ${name}`);
  card.append(picture, body, button);
  return card;
}

const partPage = (name) =>
  `/pages/can-the-${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}-run-gta-6`;

// Works out which Amazon store and tracking ID this visitor should get. Visitors whose device
// is on an Australian time zone go to Amazon.com.au when an Australian ID is set.
function amazonFor(config) {
  const usTag = (config.amazonTag || '').trim();
  const auTag = (config.amazonTagAu || '').trim();
  let australian = false;
  try {
    australian = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').startsWith('Australia/');
  } catch (error) {
    australian = false;
  }
  const useAu = australian && auTag !== '';
  const tag = useAu ? auTag : usTag;
  const host = useAu ? 'www.amazon.com.au' : 'www.amazon.com';
  return {
    tag,
    australian: useAu,
    search: (words) => `https://${host}/s?k=${encodeURIComponent(words)}&tag=${encodeURIComponent(tag)}`,
  };
}

// A light check for throwaway and made-up email addresses. It cannot prove an address is real;
// it stops the obvious ones before they reach the subscriber list.
const THROWAWAY_DOMAINS = [
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'sharklasers.com', '10minutemail.com',
  '10minutemail.net', 'tempmail.com', 'temp-mail.org', 'tempmail.net', 'tempmailo.com', 'throwawaymail.com',
  'yopmail.com', 'yopmail.fr', 'trashmail.com', 'getnada.com', 'nada.email', 'dispostable.com',
  'maildrop.cc', 'fakeinbox.com', 'mintemail.com', 'mohmal.com', 'emailondeck.com', 'moakt.com',
  'tempr.email', 'discard.email', 'spamgourmet.com', 'mytemp.email', 'burnermail.io', 'tmpmail.org',
  'tmpmail.net', 'minuteinbox.com', 'mailnesia.com', 'inboxkitten.com', 'tempinbox.com', 'luxusmail.org',
  'example.com', 'example.org', 'example.net', 'test.com', 'fake.com', 'asdf.com', 'aaa.com', 'abc.com',
  'none.com', 'no.com', 'email.email', 'mail.mail', 'a.com', 'b.com', 'x.xx',
];
const DOMAIN_TYPOS = {
  'gmial.com': 'gmail.com', 'gmai.com': 'gmail.com', 'gmal.com': 'gmail.com', 'gamil.com': 'gmail.com',
  'gnail.com': 'gmail.com', 'gmail.co': 'gmail.com', 'gmail.con': 'gmail.com', 'gmail.cm': 'gmail.com',
  'gmaill.com': 'gmail.com', 'gmail.comm': 'gmail.com', 'hotmial.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com', 'hotmail.con': 'hotmail.com', 'hotmail.co': 'hotmail.com',
  'hotmal.com': 'hotmail.com', 'yaho.com': 'yahoo.com', 'yahooo.com': 'yahoo.com', 'yahoo.con': 'yahoo.com',
  'yhoo.com': 'yahoo.com', 'outlok.com': 'outlook.com', 'outloo.com': 'outlook.com',
  'outlook.con': 'outlook.com', 'icloud.con': 'icloud.com', 'iclod.com': 'icloud.com',
};
const JUNK_NAMES = /^(test\d*|testing|tester|asdf+|asd|qwerty?|qwe|abc|abcd|fake|fakeemail|none|no|nope|noemail|nomail|email|mail|example|user|admin|null|na|x+|a+|z+|\d{1,4}|sdf+|dfg+|fgh+|hjk+|jkl+|zxc+)$/;

// Returns '' when the address looks usable, or a short message to show the visitor.
export function emailProblem(value) {
  const email = String(value || '').trim().toLowerCase();
  const match = email.match(/^([^@\s]+)@([a-z0-9.-]+\.[a-z]{2,})$/);
  if (!match) return 'Please enter a full email address, like name@gmail.com.';
  const [, name, domain] = match;
  if (DOMAIN_TYPOS[domain]) return `Did you mean ${name}@${DOMAIN_TYPOS[domain]}? Please check the spelling.`;
  const real = 'Please use a real email address you check. It is where your PC release alert goes.';
  if (THROWAWAY_DOMAINS.includes(domain)) return real;
  if (JUNK_NAMES.test(name)) return real;
  if (/^(.)\1+$/.test(name)) return real;
  if (name === domain.split('.')[0] && name.length < 5) return real;
  return '';
}

const STORE_KEY = 'pcChecker:parts';
const UNLOCK_KEY = 'pcChecker:unlocked';

function readStore(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function writeStore(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    // Storage can be blocked (private windows); the checker still works without it.
  }
}

function countItems(groups) {
  return Object.values(groups).reduce((total, items) => total + items.length, 0);
}

function lockedPlaceholder() {
  const wrap = el('div', 'pc-checker__placeholder');
  wrap.setAttribute('aria-hidden', 'true');
  const head = el('div', 'pc-checker__headline');
  head.append(el('span', 'pc-checker__eyebrow', 'Our estimate'));
  head.append(el('p', 'pc-checker__headline-text', 'Your result appears here.'));
  wrap.append(head);
  const list = el('ul', 'pc-checker__tiers');
  for (const tier of TIERS) {
    const item = el('li', 'pc-checker__tier');
    const text = el('div', 'pc-checker__tier-text');
    text.append(el('span', 'pc-checker__tier-label', tier.label));
    text.append(el('span', 'pc-checker__tier-note', tier.target));
    item.append(text);
    item.append(el('span', 'pc-checker__pill', 'Hidden'));
    list.append(item);
  }
  wrap.append(list);
  return wrap;
}

function init(root) {
  const configNode = root.querySelector('[data-pc-checker-config]');
  const config = configNode ? JSON.parse(configNode.textContent || '{}') : {};
  const form = root.querySelector('[data-pc-checker-form]');
  const output = root.querySelector('[data-pc-checker-output]');
  const table = root.querySelector('[data-pc-checker-estimates]');
  const stats = root.querySelector('[data-pc-checker-stats]');
  const gate = root.querySelector('[data-pc-checker-gate]');
  if (!form || !output) return;

  // Links written into the page text point at Amazon.com; send Australian visitors to Amazon.com.au.
  const amazon = amazonFor(config);
  if (amazon.australian) {
    for (const link of root.querySelectorAll('a[data-pc-amazon]')) link.href = amazon.search(link.dataset.pcAmazon);
  }

  const gpuSelect = form.querySelector('[name="gpu"]');
  const cpuSelect = form.querySelector('[name="cpu"]');
  const ramSelect = form.querySelector('[name="ram"]');
  const storageSelect = form.querySelector('[name="storage"]');
  const laptopBox = form.querySelector('[name="laptop"]');
  fillSelect(gpuSelect, GPUS, 'RTX 3060');
  fillSelect(cpuSelect, CPUS, 'Ryzen 5 5600');

  // Bring back the parts the visitor chose before the email form reloaded the page.
  const preselect = root.dataset.preselectGpu || '';
  let touched = false;
  try {
    const saved = JSON.parse(readStore(STORE_KEY) || 'null');
    if (saved && find(GPUS, saved.gpu) && find(CPUS, saved.cpu)) {
      gpuSelect.value = saved.gpu;
      cpuSelect.value = saved.cpu;
      if (saved.ram) ramSelect.value = String(saved.ram);
      if (saved.storage) storageSelect.value = saved.storage;
      laptopBox.checked = Boolean(saved.laptop);
      touched = true;
    }
  } catch (error) {
    // Ignore unreadable saved parts and start from the example.
  }

  // A page about one graphics card starts with that card selected.
  if (preselect && find(GPUS, preselect)) {
    gpuSelect.value = preselect;
    touched = true;
  }

  // A page about one processor starts with that processor selected.
  const preselectCpu = root.dataset.preselectCpu || '';
  if (preselectCpu && find(CPUS, preselectCpu)) {
    cpuSelect.value = preselectCpu;
    touched = true;
  }

  if (stats) {
    const facts = [
      [countItems(GPUS), 'graphics cards'],
      [countItems(CPUS), 'processors'],
      [TIERS.length, 'quality levels'],
    ];
    for (const [number, label] of facts) {
      const item = document.createElement('li');
      item.append(el('strong', '', String(number)), label);
      stats.append(item);
    }
  }

  if (table) {
    for (const tier of TIERS) {
      const row = document.createElement('tr');
      const head = el('th', '', tier.label);
      head.scope = 'row';
      row.append(head);
      row.append(el('td', '', `${tier.gpuExample}, ${tier.vram} GB`));
      row.append(el('td', '', tier.cpuExample));
      row.append(el('td', '', `${tier.ram} GB`));
      table.append(row);
    }
  }

  // The result unlocks once the email form has been sent successfully, and stays unlocked on this device.
  const justPosted = Boolean(root.querySelector('[data-pc-checker-posted]'));
  if (justPosted) writeStore(UNLOCK_KEY, '1');
  let unlocked = !gate || justPosted || readStore(UNLOCK_KEY) === '1';
  let reveal = justPosted;

  function saveParts() {
    writeStore(
      STORE_KEY,
      JSON.stringify({
        gpu: gpuSelect.value,
        cpu: cpuSelect.value,
        ram: Number(ramSelect.value),
        storage: storageSelect.value,
        laptop: laptopBox.checked,
      })
    );
  }

  function render() {
    output.replaceChildren();

    if (!unlocked) {
      output.classList.add('is-locked');
      output.append(lockedPlaceholder());
      gate.hidden = false;
      return;
    }
    output.classList.remove('is-locked');
    if (gate) gate.hidden = true;

    const gpu = find(GPUS, gpuSelect.value);
    const cpu = find(CPUS, cpuSelect.value);
    if (!gpu || !cpu) return;
    const laptop = laptopBox.checked;
    const pc = {
      gpu: Math.round(gpu[1] * (laptop ? LAPTOP_FACTOR : 1)),
      vram: gpu[2],
      cpu: cpu[1],
      ram: Number(ramSelect.value),
      ssd: storageSelect.value === 'ssd',
    };
    const results = TIERS.map((tier) => ({ tier, ...checkTier(pc, tier) }));
    const best = [...results].reverse().find((result) => result.status === 'pass');
    const lowest = results[0];

    const body = el('div', reveal ? 'pc-checker__output-body pc-checker__reveal' : 'pc-checker__output-body');
    reveal = false;

    if (justPosted) body.append(el('p', 'pc-checker__example', 'You are on the list. Here is your result.'));
    else if (!touched) body.append(el('p', 'pc-checker__example', 'Example result. Choose your own parts.'));

    let headline;
    let headlineStatus;
    if (best) {
      headline = `This PC should run it at ${best.tier.label}.`;
      headlineStatus = 'pass';
    } else if (lowest.status === 'near') {
      headline = 'This PC is borderline, even at the lowest settings.';
      headlineStatus = 'near';
    } else {
      headline = 'This PC is unlikely to run it.';
      headlineStatus = 'fail';
    }
    const head = el('div', `pc-checker__headline pc-checker__headline--${headlineStatus}`);
    head.append(el('span', 'pc-checker__eyebrow', 'Our estimate'));
    head.append(el('p', 'pc-checker__headline-text', headline));
    body.append(head);

    const list = el('ul', 'pc-checker__tiers');
    for (const result of results) {
      const item = el('li', 'pc-checker__tier');
      const text = el('div', 'pc-checker__tier-text');
      text.append(el('span', 'pc-checker__tier-label', result.tier.label));
      const reasons = reasonText(result.parts, result.tier);
      text.append(
        el(
          'span',
          'pc-checker__tier-note',
          reasons.length ? `Held back by: ${reasons.join(', ')}.` : result.tier.target
        )
      );
      item.append(text);
      item.append(el('span', `pc-checker__pill pc-checker__pill--${result.status}`, STATUS_TEXT[result.status]));
      list.append(item);
    }
    body.append(list);

    const scales = el('div', 'pc-checker__scales');
    scales.append(
      scaleBar(
        'Graphics card',
        pc.gpu,
        420,
        TIERS.map((tier) => ({ value: tier.gpu, label: tier.label })),
        `${gpu[0]}${laptop ? ' (laptop)' : ''}. Marks show the estimate for each level.`
      )
    );
    scales.append(
      scaleBar(
        'Processor',
        pc.cpu,
        240,
        TIERS.map((tier) => ({ value: tier.cpu, label: tier.label })),
        `${cpu[0]}. Marks show the estimate for each level.`
      )
    );
    body.append(scales);

    const next = results.find((result) => result.status !== 'pass');
    if (next) {
      const advice = el('div', 'pc-checker__advice');
      advice.append(el('h3', 'pc-checker__advice-title', `To reach ${next.tier.label}`));
      const steps = el('ul', 'pc-checker__advice-list');
      const links = config.links || {};
      const amazonTag = amazon.tag;
      let usedAmazon = false;
      let usedOther = false;
      const amazonSearch = amazon.search;
      // A step is one sentence, then either the visual part cards (Amazon) or the owner's own link.
      const addStep = (text, manualUrl, manualLabel, cards) => {
        const step = el('li', 'pc-checker__advice-step');
        step.append(el('span', '', text));
        if (manualUrl) {
          usedOther = true;
          step.append(' ');
          const link = el('a', 'pc-checker__link', manualLabel);
          link.href = manualUrl;
          link.target = '_blank';
          link.rel = 'sponsored nofollow noopener';
          step.append(link);
        } else if (amazonTag && cards.length) {
          usedAmazon = true;
          const list = el('ul', 'pc-checker__parts');
          for (const card of cards) list.append(partCard(card));
          step.append(list);
        }
        steps.append(step);
      };
      if (next.parts.gpu !== 'pass' || next.parts.vram !== 'pass') {
        addStep(
          `A graphics card around ${next.tier.gpuExample}, with ${next.tier.vram} GB of video memory. The smallest cards still sold new that clear it:`,
          links.gpu,
          'See graphics cards',
          bestPicks('gpu', next.tier).map((card) => ({
            art: 'gpu',
            name: card.name,
            spec: `${card.vram} GB of video memory`,
            url: amazonSearch(`${card.name} graphics card`),
            page: partPage(card.name),
          }))
        );
      }
      if (next.parts.cpu !== 'pass') {
        addStep(
          `A processor around ${next.tier.cpuExample}. The smallest processors still sold new that clear it (check they fit your motherboard):`,
          links.cpu,
          'See processors',
          bestPicks('cpu', next.tier).map((processor) => ({
            art: 'cpu',
            name: processor.name,
            url: amazonSearch(`${processor.name} processor`),
            page: partPage(processor.name),
          }))
        );
      }
      if (next.parts.ram !== 'pass') {
        addStep(`${next.tier.ram} GB of memory.`, links.ram, 'See memory', [
          {
            art: 'ram',
            name: `${next.tier.ram} GB memory kit`,
            spec: 'Match the type your motherboard takes (DDR4 or DDR5)',
            url: amazonSearch(`${next.tier.ram}GB RAM desktop memory`),
          },
        ]);
      }
      if (next.parts.storage !== 'pass') {
        addStep('An SSD to install the game on.', links.ssd, 'See SSDs', [
          { art: 'ssd', name: '1TB NVMe SSD', spec: 'Check your motherboard has an M.2 slot', url: amazonSearch('1TB NVMe SSD') },
        ]);
      }
      advice.append(steps);
      if (links.pc || amazonTag) {
        const whole = el('p', 'pc-checker__advice-note', 'Replacing the whole machine? ');
        const link = el('a', 'pc-checker__link', links.pc ? 'See gaming PCs' : 'See gaming PCs on Amazon');
        link.href = links.pc || amazonSearch('gaming PC desktop');
        link.target = '_blank';
        link.rel = 'sponsored nofollow noopener';
        if (links.pc) usedOther = true;
        else usedAmazon = true;
        whole.append(link);
        advice.append(whole);
      }
      if (usedAmazon && config.amazonNote) advice.append(el('p', 'pc-checker__advice-note', config.amazonNote));
      if (usedOther && config.affiliateNote) advice.append(el('p', 'pc-checker__advice-note', config.affiliateNote));
      body.append(advice);
    }

    output.append(body);
  }

  form.addEventListener('change', () => {
    touched = true;
    saveParts();
    render();
  });
  form.addEventListener('submit', (event) => event.preventDefault());
  const gateForm = gate ? gate.querySelector('form') : null;
  if (gateForm) gateForm.addEventListener('submit', saveParts);

  // Stop obviously made-up addresses before the form is sent, and say why.
  for (const emailForm of root.querySelectorAll('form.pc-checker__email-form')) {
    const input = emailForm.querySelector('input[type="email"]');
    if (!input) continue;
    const note = el('p', 'pc-checker__form-message pc-checker__form-message--error');
    note.setAttribute('role', 'alert');
    note.hidden = true;
    emailForm.append(note);
    emailForm.addEventListener(
      'submit',
      (event) => {
        const problem = emailProblem(input.value);
        note.textContent = problem;
        note.hidden = !problem;
        if (problem) {
          event.preventDefault();
          event.stopImmediatePropagation();
          input.focus();
        }
      },
      true
    );
    input.addEventListener('input', () => {
      note.hidden = true;
    });
  }
  render();
}

if (typeof document !== 'undefined') {
  const start = () => document.querySelectorAll('[data-pc-checker]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
}
