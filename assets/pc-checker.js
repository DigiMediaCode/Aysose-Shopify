/*
 * PC checker: estimates whether a PC could run a game that has no published PC requirements yet.
 *
 * Every number here is an estimate. Scores are approximate relative gaming performance
 * (graphics cards: RTX 3060 = 100, processors: Ryzen 5 3600 = 100). Edit the lists and the
 * TIERS table below when official requirements are published.
 */

// [name, score, video memory in GB]
const GPUS = {
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
const CPUS = {
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

const TIERS = [
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

function init(root) {
  const configNode = root.querySelector('[data-pc-checker-config]');
  const config = configNode ? JSON.parse(configNode.textContent || '{}') : {};
  const form = root.querySelector('[data-pc-checker-form]');
  const output = root.querySelector('[data-pc-checker-output]');
  const table = root.querySelector('[data-pc-checker-estimates]');
  if (!form || !output) return;

  const gpuSelect = form.querySelector('[name="gpu"]');
  const cpuSelect = form.querySelector('[name="cpu"]');
  fillSelect(gpuSelect, GPUS, 'RTX 3060');
  fillSelect(cpuSelect, CPUS, 'Ryzen 5 5600');

  if (table) {
    for (const tier of TIERS) {
      const row = document.createElement('tr');
      row.append(el('th', '', tier.label));
      row.append(el('td', '', `${tier.gpuExample}, ${tier.vram} GB`));
      row.append(el('td', '', tier.cpuExample));
      row.append(el('td', '', `${tier.ram} GB`));
      table.append(row);
    }
  }

  let touched = false;

  function render() {
    const gpu = find(GPUS, gpuSelect.value);
    const cpu = find(CPUS, cpuSelect.value);
    if (!gpu || !cpu) return;
    const laptop = form.querySelector('[name="laptop"]').checked;
    const pc = {
      gpu: Math.round(gpu[1] * (laptop ? LAPTOP_FACTOR : 1)),
      vram: gpu[2],
      cpu: cpu[1],
      ram: Number(form.querySelector('[name="ram"]').value),
      ssd: form.querySelector('[name="storage"]').value === 'ssd',
    };
    const results = TIERS.map((tier) => ({ tier, ...checkTier(pc, tier) }));
    const best = [...results].reverse().find((result) => result.status === 'pass');
    const lowest = results[0];

    output.replaceChildren();

    if (!touched) output.append(el('p', 'pc-checker__example', 'Example result. Choose your own parts above.'));

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
    output.append(head);

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
    output.append(list);

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
    output.append(scales);

    const next = results.find((result) => result.status !== 'pass');
    if (next) {
      const advice = el('div', 'pc-checker__advice');
      advice.append(el('h3', 'pc-checker__advice-title', `To reach ${next.tier.label}`));
      const steps = el('ul', 'pc-checker__advice-list');
      const links = config.links || {};
      const addStep = (text, url, linkLabel) => {
        const step = el('li', '', text);
        if (url) {
          step.append(' ');
          const link = el('a', 'pc-checker__link', linkLabel);
          link.href = url;
          link.target = '_blank';
          link.rel = 'sponsored noopener';
          step.append(link);
        }
        steps.append(step);
      };
      if (next.parts.gpu !== 'pass' || next.parts.vram !== 'pass') {
        addStep(
          `A graphics card around ${next.tier.gpuExample}, with ${next.tier.vram} GB of video memory.`,
          links.gpu,
          'See graphics cards'
        );
      }
      if (next.parts.cpu !== 'pass') {
        addStep(`A processor around ${next.tier.cpuExample}.`, links.cpu, 'See processors');
      }
      if (next.parts.ram !== 'pass') addStep(`${next.tier.ram} GB of memory.`, links.ram, 'See memory');
      if (next.parts.storage !== 'pass') {
        addStep('An SSD to install the game on.', links.ssd, 'See SSDs');
      }
      advice.append(steps);
      if (links.pc) {
        const whole = el('p', 'pc-checker__advice-note', 'Replacing the whole machine? ');
        const link = el('a', 'pc-checker__link', 'See gaming PCs');
        link.href = links.pc;
        link.target = '_blank';
        link.rel = 'sponsored noopener';
        whole.append(link);
        advice.append(whole);
      }
      if (config.affiliateNote && Object.values(links).some(Boolean)) {
        advice.append(el('p', 'pc-checker__advice-note', config.affiliateNote));
      }
      output.append(advice);
    }
  }

  form.addEventListener('change', () => {
    touched = true;
    render();
  });
  form.addEventListener('submit', (event) => event.preventDefault());
  render();
}

if (typeof document !== 'undefined') {
  const start = () => document.querySelectorAll('[data-pc-checker]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
}
