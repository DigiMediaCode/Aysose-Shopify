import io, json

SP = '/tmp/claude-0/-home-user-Aysose-Shopify/0e92907f-4cc0-5a2e-9e96-e10c28d512b4/scratchpad/'
research = json.load(io.open(SP + 'cards-research.json', encoding='utf8'))

# Our own speed scores (assets/pc-checker.js), only used to say above / level / below the RTX 3060.
SCORE = {'RX 5700 XT': 100, 'RTX 3050': 72, 'RTX 3080 Ti': 210, 'RTX 2080 Ti': 135, 'RTX 5070': 215,
         'RTX 3060 Ti': 130, 'RTX 4080 Super': 270, 'RTX 3070': 148, 'RX 6650 XT': 115, 'RTX 2070': 95,
         'RX 6900 XT': 215, 'RX 9060 XT 16GB': 160, 'RTX 2070 Super': 105, 'GTX 1660 Super': 66,
         'RTX 3070 Ti': 157, 'RX 6700 XT': 140, 'RTX 5070 Ti': 265, 'RX 9070 XT': 260, 'Arc B580': 120,
         'RTX 4070 Super': 200}

# Which review to quote for each card (one test bench per card, never mixed).
PREFER = {'RTX 3060 Ti': 'amd-radeon-rx-7600', 'RTX 3070': 'amd-radeon-rx-7600', 'RTX 3070 Ti': 'amd-radeon-rx-7600',
          'RX 6900 XT': 'nvidia-geforce-rtx-3080-ti-founders-edition'}
REVIEW_DATE = {'amd-radeon-rx-7600': 'May 2023', 'nvidia-geforce-rtx-5070-founders-edition': 'March 2025',
               'evga-geforce-rtx-3050-xc-black': 'January 2022', 'sapphire-radeon-rx-9060-xt-pulse-oc': 'June 2025',
               'nvidia-geforce-rtx-3080-ti-founders-edition': '2021', 'asus-radeon-rx-6600-xt-strix-oc': '2021',
               'sapphire-radeon-rx-9070-xt-pulse': '2025'}
CONFIRMED_SETTINGS = {'nvidia-geforce-rtx-5070-founders-edition': 'highest settings, ray tracing off, no upscaling',
                      'amd-radeon-rx-7600': 'highest settings'}
SPEC_SOURCE = {'RTX': ('Nvidia', 'https://www.nvidia.com/en-us/geforce/graphics-cards/compare/'),
               'GTX': ('Nvidia', 'https://www.nvidia.com/en-us/geforce/graphics-cards/compare/')}

TAKE = {
 'RX 5700 XT': "The RX 5700 XT is one of the older cards that still clears our lowest level, 1080p with low settings. In the 2023 test above it averaged 58 frames a second in Cyberpunk 2077 at 1080p on the highest settings, so it has some room once settings come down. Its real weakness for a 2026 game is that it has no ray tracing hardware at all, so any lighting GTA 6 builds on ray tracing would have to be switched off or run in a slower fallback.",
 'RTX 3050': "The RTX 3050 is the slowest RTX card in our list and sits just above our lowest level. Its 8 GB of video memory is more than it can really use: in the 2023 test above it averaged 46 frames a second in Cyberpunk 2077 at 1080p and 28 at 1440p, so speed runs out before memory does. Expect 1080p, low settings and DLSS doing a lot of the work.",
 'RTX 3080 Ti': "The RTX 3080 Ti is still a fast card: in its launch review it averaged about 81 frames a second in Cyberpunk 2077 at 1440p. What holds it back in our estimate is its 12 GB of video memory, which is why we stop at 1440p rather than 4K. It also draws about 350 watts, so check your power supply before blaming the card for crashes.",
 'RTX 2080 Ti': "The RTX 2080 Ti has aged better than most cards from 2018, largely because of its 11 GB of video memory. In the 2023 test above it was level with the newer RTX 4060 Ti and within a couple of frames of the RTX 3070 in Cyberpunk 2077 at 1080p. We put it at 1080p with high settings, with 1440p possible if GTA 6 supports DLSS.",
 'RTX 5070': "The RTX 5070 clears our 1440p estimate on speed and on its 12 GB of video memory: it averaged about 104 frames a second in Cyberpunk 2077 at 1440p in its launch review. For 4K we think 12 GB is the limit rather than raw speed. It supports every DLSS feature, including Multi Frame Generation.",
 'RTX 3060 Ti': "The RTX 3060 Ti is the card we use as the reference point for 1080p with high settings. In the 2023 test above it averaged 82 frames a second in Cyberpunk 2077 at 1080p and 53 at 1440p. Its 8 GB of video memory is the reason we do not put it higher.",
 'RTX 4080 Super': "The RTX 4080 Super is one of the few cards that clears every level in our estimate, including 4K with high settings. It has 16 GB of video memory and averaged about 123 frames a second in Cyberpunk 2077 at 1440p in the 2025 test above. If your result is lower than you expected with this card, the processor or memory is the part to look at.",
 'RTX 3070': "The RTX 3070 is fast enough for 1440p in many current games, with about 62 frames a second in Cyberpunk 2077 at 1440p in the 2023 test above. Its 8 GB of video memory is the problem, and it is the reason our estimate stops at 1080p with high settings. If GTA 6 lets you lower texture quality on its own, 1440p may still be reachable.",
 'RX 6650 XT': "The RX 6650 XT is a 1080p card. In the 2023 test above it averaged 72 frames a second in Cyberpunk 2077 at 1080p but only 41 at 1440p. We put it at 1080p with low settings and close to the next level up, so it is one of the cards most likely to move when official requirements arrive.",
 'RTX 2070': "The RTX 2070 was a high-end card in 2018 and is now close to our lowest level. In the 2023 test above it averaged 64 frames a second in Cyberpunk 2077 at 1080p. It does support DLSS, which is the most useful thing it has going for it in a game like this.",
 'RX 6900 XT': "The RX 6900 XT pairs a lot of speed with 16 GB of video memory, which is why it clears our 1440p estimate comfortably. In the 2021 test above it averaged about 86 frames a second in Cyberpunk 2077 at 1440p.",
 'RX 9060 XT 16GB': "The RX 9060 XT 16GB is unusual: a mid-priced card with 16 GB of video memory that draws only about 160 watts. Memory will not be what limits it; speed will. It averaged about 112 frames a second in Cyberpunk 2077 at 1080p and 73 at 1440p in the 2025 test above, and we put it at 1080p with high settings.",
 'RTX 2070 Super': "The RTX 2070 Super is a little faster than the plain RTX 2070 and lands in the same place in our estimate: 1080p with low settings. In the 2021 test above it averaged about 67 frames a second in Cyberpunk 2077 at 1080p. DLSS support gives it more headroom than its raw speed suggests.",
 'GTX 1660 Super': "The GTX 1660 Super is the card our lowest level is built around, so treat this page as the edge of playable rather than a comfortable yes. It has 6 GB of video memory, no ray tracing hardware and no DLSS. In the 2022 test above it averaged about 40 frames a second in Cyberpunk 2077 at 1080p on that review's settings, and 24 at 1440p.",
 'RTX 3070 Ti': "The RTX 3070 Ti is a few frames faster than the RTX 3070 and has the same 8 GB of video memory, so it lands on the same level in our estimate: 1080p with high settings. It also draws about 290 watts, a lot for what it delivers. In the 2023 test above it averaged 65 frames a second in Cyberpunk 2077 at 1440p.",
 'RX 6700 XT': "The RX 6700 XT has 12 GB of video memory, more than the Nvidia cards it competed with, and that is likely to matter in a big open-world game. In the 2023 test above it averaged 83 frames a second in Cyberpunk 2077 at 1080p and 52 at 1440p. We put it at 1080p with high settings.",
 'RTX 5070 Ti': "By launch price, the RTX 5070 Ti is the least expensive card in our list that clears our 4K estimate, helped by its 16 GB of video memory. It averaged about 125 frames a second in Cyberpunk 2077 at 1440p in the 2025 test above, level with the RTX 4080 Super. It supports every DLSS feature, including Multi Frame Generation.",
 'RX 9070 XT': "The RX 9070 XT clears our 1440p estimate easily and falls just short of our 4K line on speed, not memory: it has 16 GB. A partner version of the card averaged about 129 frames a second in Cyberpunk 2077 at 1440p in the 2025 test above. With upscaling, 4K looks realistic.",
 'Arc B580': "The Arc B580 offers 12 GB of video memory at a launch price of US$249, more than most cards at that price. It averaged about 92 frames a second in Cyberpunk 2077 at 1080p in the 2025 test above. Intel's graphics drivers are newer than Nvidia's and AMD's, so how well it runs a brand-new game on day one is harder to predict.",
 'RTX 4070 Super': "The RTX 4070 Super is the card our 1440p level is built around. It averaged about 89 frames a second in Cyberpunk 2077 at 1440p in the 2025 test above, and it has DLSS Frame Generation. Its 12 GB of video memory is what keeps it out of our 4K level.",
}


def upscaling(name, card):
    if name.startswith('GTX'):
        return ["The GTX 1660 Super has no DLSS of any kind; Nvidia limits DLSS to RTX cards.",
                "It can still use upscalers that are not tied to one maker's cards, such as AMD's FSR, in games that include them. Whether GTA 6 on PC will include any upscaler has not been announced."]
    if name.startswith('RTX'):
        frame = any(u == 'DLSS Frame Generation' for u in card['upscaling'])
        multi = name.startswith('RTX 50')
        first = "The %s supports DLSS Super Resolution, which draws the game at a lower resolution and sharpens it to your screen's resolution for more frames a second." % name
        if multi:
            second = "It also supports DLSS Frame Generation and Multi Frame Generation, which add extra generated frames between the drawn ones. Multi Frame Generation is limited to RTX 50 cards."
        elif frame:
            second = "It also supports DLSS Frame Generation, which adds a generated frame between each pair of drawn ones. It does not have Multi Frame Generation, which is limited to RTX 50 cards."
        else:
            second = "It does not support DLSS Frame Generation, which needs an RTX 40 card or newer."
        return [first, second, "Whether GTA 6 on PC will include DLSS has not been announced."]
    if name.startswith('Arc'):
        return ["The Arc B580 supports Intel's XeSS upscaling, which draws the game at a lower resolution and sharpens it to your screen's resolution for more frames a second.",
                "It can also use AMD's FSR in games that include it. Whether GTA 6 on PC will include either has not been announced."]
    if name.startswith('RX 9'):
        return ["The %s supports all of AMD's FSR features, including the newest machine-learning upscaling and frame generation, which AMD limits to RX 9000 cards for frame generation." % name,
                "Whether GTA 6 on PC will include FSR has not been announced."]
    if name.startswith('RX 6'):
        return ["The %s supports AMD's FSR upscaling and FSR 3 frame generation. AMD also lists its newer machine-learning upscaler for RX 6000 desktop cards, but not the machine-learning frame generation, which needs an RX 9000 card." % name,
                "Whether GTA 6 on PC will include FSR has not been announced."]
    return ["The %s supports AMD's FSR 1, 2 and 3, including FSR 3 frame generation. It does not get AMD's newer machine-learning upscaler, which AMD lists for RX 6000 cards and newer." % name,
            "Whether GTA 6 on PC will include FSR has not been announced."]


def rockstar(name):
    score = SCORE[name]
    if score >= 110:
        versus = "is faster than"
    elif score >= 90:
        versus = "is about level with"
    else:
        versus = "is slower than"
    first = ("Rockstar's most recent PC release is the 2025 enhanced version of GTA V. Its store page recommends an RTX 3060 or RX 6600 XT with 8 GB of video memory. "
             "On our own scoring the %s %s the RTX 3060." % (name, versus))
    second = ("Red Dead Redemption 2, released on PC in 2019, recommends a GTX 1060 6GB. GTA 6 is a newer and much larger game than either, "
              "so expect its requirements to be higher than both.")
    return [first, second]


def laptop(name, card):
    if card['laptop_version']:
        sizes = sorted(set(card['laptop_vram_gb']))
        text = ' or '.join(str(s) for s in sizes)
        if sizes == [card['vram_gb']]:
            memory = "It has the same %s GB of video memory as the desktop card" % text
        else:
            memory = "It comes with %s GB of video memory, where the desktop card has %s GB" % (text, card['vram_gb'])
        return ["Yes, a laptop chip is sold under the %s name. %s, but it is a different, slower chip that runs at lower power, so do not read the desktop numbers on this page as laptop numbers." % (name, memory)]
    return ["No laptop chip is sold under this exact name, so a laptop listed with a similar-sounding graphics chip is a different part. Check the exact model name in the checker below."]


out = {'cards': {}}
for name, card in research['cards'].items():
    rows = card['benchmarks']
    reviews = []
    for row in rows:
        slug = row['article_url'].rstrip('/').split('/')[-1]
        if slug not in reviews:
            reviews.append(slug)
    chosen = PREFER.get(name, reviews[0])
    assert chosen in reviews, (name, reviews)
    bench = []
    for row in rows:
        slug = row['article_url'].rstrip('/').split('/')[-1]
        if slug != chosen:
            continue
        bench.append({'game': row['game'], 'resolution': row['resolution'].replace('x', ' x '),
                      'settings': CONFIRMED_SETTINGS.get(slug, ''), 'fps': round(float(row['fps'])),
                      'source': 'TechPowerUp', 'url': row['article_url'], 'date': REVIEW_DATE[slug]})
    spec_url = card['sources'].get('power_w') or card['sources'].get('vram_gb')
    if name.startswith(('RTX', 'GTX')):
        spec_name = 'Nvidia'
    elif name.startswith('Arc'):
        spec_name = 'Intel'
    else:
        spec_name = 'AMD' if 'amd.com' in spec_url else 'Wikipedia'
    out['cards'][name] = {
        'release': card['release'], 'launch_price_usd': card['launch_price_usd'], 'vram_gb': card['vram_gb'],
        'memory_type': card['memory_type'], 'power_w': card['power_w'], 'psu_w': card['psu_w'],
        'ray_tracing': card['ray_tracing'], 'spec_source': {'name': spec_name, 'url': spec_url},
        'benchmarks': bench,
        'sections': [
            {'heading': 'Our take on the %s' % name, 'paragraphs': [TAKE[name]]},
            {'heading': 'Upscaling and frame generation', 'paragraphs': upscaling(name, card)},
            {'heading': "Against Rockstar's other PC games", 'paragraphs': rockstar(name)},
            {'heading': 'Is there a laptop %s?' % name, 'paragraphs': laptop(name, card)},
        ],
    }
    print(name, '|', spec_name, spec_url[:60], '|', chosen, len(bench))

io.open('/home/user/Aysose-Shopify/tools/card-notes.json', 'w', encoding='utf8').write(json.dumps(out, indent=2, ensure_ascii=False) + '\n')
