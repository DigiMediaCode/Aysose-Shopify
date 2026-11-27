# AYSOSE — Project Handover (CLAUDE.md)

Paste this file into the new project's repo as `CLAUDE.md` (or into the project instructions) before the first session.
It is the source of truth for what AYSOSE is, how to work, and what has been learned the hard way on a previous
Shopify build. Update it as decisions are made.

---

## 0. Owner's standing instructions (apply to every task)

1. **Quality over speed.** Work like the best person in that field (brand designer, conversion copywriter, Shopify
   engineer, performance marketer). Research and a brief first, then concepts, critique, then ship.
2. **Be direct.** Recommend one option and say why. If an idea is weak, say so and offer a better one.
3. **Never waste money.** Everything that spends (ads, apps, samples) is built paused and approved by the owner first.
   Every ad test has a written stop-loss before it starts.
4. **Stay white-hat.** No fake reviews, fake scarcity, fake "was" prices, fake countdowns, unwinnable prizes,
   bought followers, spam DMs or misleading delivery promises. Australian Consumer Law (ACL) applies.
5. **Owner works from his phone, solo, with little time and a tight budget.** Keep instructions short, give exact
   steps for anything only he can do, and never ask him to paste tokens or secrets.
6. **Keep projects separate.** This project has nothing to do with any other store the owner runs. Don't reuse
   their products, branding, accounts or IDs.

---

## 1. What AYSOSE is

- **Brand:** AYSOSE (styled **AYSØSE** on the current site). Modern activewear / gym wear for men and women.
- **Domain:** aysose.com (DNS on Cloudflare).
- **Model:** pure dropshipping. No stock held.
- **Platform:** moving to a **new Shopify store**, connected to Claude (Shopify connector + a GitHub repo for the theme).
- **Market:** confirm with the owner in session 1 (Australia first? global?). This decides suppliers, shipping
  promises, currency and ad targeting.

### Current state (checked 15 Nov 2026)
- aysose.com is **still live on WordPress + WooCommerce** (PHP, Cloudflare in front), title
  "AYSØSE – Modern Activewear for Men & Women".
- Cloudflare showed **~32.8k** for the domain. **Do not treat this as shoppers yet.** Cloudflare's dashboard number is
  usually *requests*, and an old WordPress site attracts heavy bot traffic (crawlers, `wp-login.php` / `xmlrpc.php`
  attacks, spam bots). First job: find out what it really is (section 4, step 1).

---

## 2. Honest niche check (read before building)

Gym wear dropshipping is one of the most crowded niches online. Gymshark, Alphalete, Lululemon, Kmart/Cotton On Body
and thousands of AliExpress clone stores compete for the same ads. What usually kills these stores:
- **Slow, untracked shipping** (2–4 weeks from China) → chargebacks, angry reviews, ad accounts flagged.
- **Sizing and fabric** that don't match the photos → returns cost more than the margin.
- **Same supplier photos as 500 other stores** → no reason to buy from you, ads get expensive.

**To have a real chance, AYSOSE needs at least two of these:**
1. **Local or fast stock:** suppliers with Australian or US warehouses (e.g. CJ Dropshipping AU/US warehouse,
   Syncee, Spocket local suppliers) so delivery is under ~10 business days and tracked.
2. **Own branding on the product:** print-on-demand activewear (Printify / Printful leggings, sports bras, tees,
   shorts with the AYSOSE mark and original designs). Higher cost, but it's a *brand*, not a clone.
3. **A sharp niche inside the niche** instead of "gym wear for everyone", e.g. modest activewear, tall/plus sizes,
   Muslim-friendly gym wear, matching sets for couples or lifting clubs, run clubs. Pick one where the owner can
   make content.
4. **Content the owner can produce weekly** (Reels/TikToks of real people wearing it, sizing videos, fabric tests).

Session 1 should end with a written decision on: niche angle, market, supplier type, and price band.

---

## 3. Business rules

- **Every claim must match how the store runs:** delivery times, shipping cost, returns, origin
  ("Designed in Australia" is fine; "Made in Australia" only if it truly is), fabric content, sizing.
- **Delivery promise = supplier processing time + shipping time, the slow end.** Never promise faster.
- **Returns:** apparel needs a clear size-exchange policy. Change-of-mind rules are the owner's choice, but faulty /
  not-as-described items always get a remedy under ACL. Never write copy that says otherwise.
- **Reviews:** only real ones. No imported AliExpress reviews, no sample reviews shown to customers.
- **Discounts:** a "was" price must be a real former price. Sale end dates must be real.
- **Images:** supplier photos only if licensed for resale; replace hero images with original photos/video as soon as
  samples arrive. Never AI-generate a product photo that changes the product (fabric, cut, print).
- **Order one sample of every hero product before running ads.** Check fit, fabric, stitching, delivery time.

---

## 4. Plan (phases)

### Phase 0 — Audit what exists (before anything is built)
1. **Traffic truth:** owner checks Cloudflare → Analytics → *Web Analytics* (real browsers) vs *Traffic* (all
   requests), plus Security → Events for bots. Also Google Search Console / Bing for aysose.com (clicks, queries,
   indexed pages). Only real human visitors from search or links matter.
2. **Inventory the old site:** list every URL (sitemap, `site:aysose.com`), which pages get real visits, any
   backlinks, the email/customer list (export it from WooCommerce, with consent status).
3. **Decide:** if real search traffic exists, preserve those URLs with 301 redirects in Shopify (Online Store →
   Navigation → URL redirects). If it's bots, start clean and just redirect the main paths.

### Phase 1 — Store foundation
- New Shopify store, plan, currency, markets, taxes (GST if AU), legal pages (refund, shipping, privacy, terms),
  contact details (owner to supply a business email, not a personal one).
- Theme: **Horizon** (Shopify's free official theme), connected to GitHub with two branches:
  `dev` → unpublished theme (all work), `main` → live theme (merge only when the owner says "merge it to main").
- Domain: move aysose.com to Shopify only when the store is ready. Keep Cloudflare DNS (set records per
  Shopify's instructions, proxy **off** for the Shopify records) and add redirects from old WooCommerce URLs.

### Phase 2 — Brand and products
- Brand brief → logo/wordmark and brand graphics built in **Canva** (editable masters for the owner), colour
  palette, type, photo style. Clean athletic look; one signature visual idea, not a template.
- Supplier selection (section 2), 10–20 launch products max, real size charts per product, fabric %, care.
- Product pages: honest delivery estimate, size guide, fit notes, fabric, returns summary, real photos.

### Phase 3 — Launch and marketing
- Meta pixel + Conversions API, Google & YouTube channel, Merchant Center feed (brand = AYSOSE on every product,
  correct Google category, gender/age group/size system for apparel).
- Email capture with a real, winnable offer; welcome flow.
- Content plan the owner can actually film. Ads only after samples check out: small test budget, written
  stop-loss, every ad built paused for approval.

---

## 5. Repo and workflow rules (lessons from a previous Shopify build)

1. **Mobile-first.** Check every section at ~380px wide. Most customers and the owner are on phones.
2. **Never edit the live theme directly.** Work on `dev`; merge to `main` only on the owner's word.
3. Don't modify `layout/theme.liquid`, checkout or payment files without asking.
4. Keep JSON templates and `config/settings_data.json` valid. Validate settings against `settings_schema.json`
   (select options, range min/max) before pushing.
5. **Run Shopify Theme Check before every commit** and fix errors. App blocks (`shopify://apps/...`) showing as
   `JSONMissingBlock` are expected false positives.
6. **After every push, confirm the files actually synced to Shopify.** The GitHub sync can stall, and Shopify
   silently rejects invalid files (a template that references a rejected section is rejected too). Known traps:
   `url` setting defaults may only be `/collections` or `/collections/all`; never put `}` inside `{{ }}` in Liquid.
7. Prefer theme settings and blocks the owner can edit in the theme editor over hard-coded text.
8. Small commits, plain-English messages, explain changes simply.
9. **Store data is not theme code:** menus, collections, discounts, markets and shipping rates live in Shopify Admin
   (edit them through the Admin API, not files).
10. **Shipping rates that customers see come from Settings → Markets** (the market's shipping), not necessarily the
    delivery profiles. After any shipping change, test real carts.
11. **Markets must include every stock location** (e.g. the dropship app's location), or products show "Sold out".
12. **Dropship apps re-publishing a product can create a new product ID**, dropping it from manual collections and
    resetting photos/vendor. Re-check collections, vendor, category and feed fields after any re-sync.
13. **Publish every product to every sales channel** (Online Store, Facebook & Instagram, Google & YouTube) and
    check it, or ads and Shopping can't see it.
14. Keep a running log of decisions, IDs (ad account, pixel, catalog, theme IDs) and gotchas in this file.

---

## 6. Session 1 checklist (ask the owner, then decide)

- [ ] Market(s) and currency
- [ ] Niche angle inside gym wear (section 2)
- [ ] Supplier type: local-warehouse dropship, print-on-demand, or a mix
- [ ] Price band and target margin per order (after product, shipping, payment fees, ad cost)
- [ ] What the 32.8k Cloudflare number really is (Phase 0)
- [ ] Old site: keep URLs or start clean; export WooCommerce customers with consent
- [ ] Business contact email and address to show on the store
- [ ] Budget for samples and the first ad test, with a stop-loss

---

## 7. Running log

### 15 Nov 2026 — Phase 0 audit of the old site (public data only)
- **Old site size:** 17 products, 15 product categories, 19 tags, 20 pages, 1 blog post. Small enough to redirect
  every URL by hand.
- **Old URL patterns:** products at `/product/<slug>/`, categories at `/collections/<slug>`, policies at
  `/privacy-policy/`, `/refund_returns/`, `/shipping-policy/`, `/terms-of-service/`, `/contact-information/`.
  Shopify uses `/products/<slug>` and `/collections/<slug>`, so collections can keep the same handles and
  products need one 301 each.
- **Prices:** AUD, every product 40–57% "off" a compare-at price (e.g. $104.99 → $44.99). These "was" prices
  must not be carried over unless the product really sold at that price (section 3).
- **Reviews:** 0 on every product. Nothing to migrate.
- **Product photos:** AliExpress-style supplier images. Not to be reused without a licence (section 3).
- **Claims on the old site that conflict or need a decision:** "Free shipping on all orders" vs "Free shipping
  over $50"; "30-day returns, no questions asked"; "$10 credit on first order"; Afterpay; "Open daily 9–6".
- **Placeholder text live on the old site:** the Community menu still has Lorem Ipsum.
- **Business details shown:** trading as AYSØSE, ABN 88 998 902 729, Campbelltown NSW.
- **shop.aysose.com:** an older Shopify store sits on this subdomain and returns HTTP 402 (store frozen /
  unpaid). The old site's footer still links to its policy pages, so those links are broken. Product SKUs on
  WooCommerce are Shopify product IDs, so the catalogue was originally copied from that store.
- **Still unknown (owner only):** real human traffic (Cloudflare Web Analytics, Search Console), WooCommerce
  orders and customer list.

### 15 Nov 2026 — New Shopify store connected
- **Store:** "My Store 4" (needs renaming to AYSOSE), `9jfwxy-kf.myshopify.com`, created 14 Nov 2026.
- **Plan:** Trial. Must be upgraded to a paid plan before it can sell.
- **Settings found:** currency AUD, timezone Sydney, contact email staff@aysose.com, one market (Australia),
  one location ("Shop location", id 82412208212).
- **Theme:** Horizon is the live theme (id 147591233620). Not yet connected to GitHub.
- **Content:** 0 products, 1 default collection, 1 page (Contact), default menus, default privacy policy that
  still says "My Store 4". No refund, shipping or terms policy yet. No apps besides the Claude connector.
- **Old store on shop.aysose.com** is a separate, frozen store. Not used for this project.

### 15 Nov 2026 — Session 1 decisions (owner)
- **Market:** Australia only at launch. Currency AUD.
- **Niche:** modest activewear. Supplier availability to be verified before the catalogue is locked.
- **Budget:** $700–$1,500 for samples plus the first ad tests. Nothing spent without owner approval; each ad
  test gets a written stop-loss.
- **Theme repo:** unmodified Horizon 4.5.0 (from github.com/Shopify/horizon, 10 Nov 2026 release) added to this
  repo. Branches `dev` (work) and `main` (live) created from it.

### 15 Nov 2026 — Store connections confirmed
- Store renamed to **Aysose**. Still on the Trial plan.
- GitHub themes connected and synced: `Aysose-Shopify/dev` (id 147642581076, unpublished) and
  `Aysose-Shopify/main` (id 147642613844, unpublished). The original Horizon (id 147591233620) is still the
  live theme; `main` has not been published yet.

### 15 Nov 2026 — Supplier research for modest activewear (web research, nothing ordered)
**Competitor prices (read from their public catalogues on 15 Nov 2026)**
- Modelle (Australian store, AUD): tops $30–50, pants $60, jackets $70–120, lounge sets $110–120.
- Lyra Modest (AU storefront, AUD): active tops $80–190, active hijab $32.
- Dignitii (prices in USD): sports hijab $31–36, sports dress $70, performance top / jacket $86.
- Haya Active (UK, GBP): tops £45–50, joggers £37, sports hijab £27.
- Also in the space: Puma, Adidas and Gymshark modest ranges; Metamorfic (South Australian founder).

**Supplier routes found**
- *Australian-warehouse dropship (CJ and similar):* no listing of modest cuts (long-line tops, loose pants,
  sports hijabs) with Australian stock was found. CJ's catalogue needs a login, so this is unconfirmed, but
  third-party reviews call CJ's Australian fashion range narrow. China-shipped CJ orders are quoted at 7–17 days.
- *Print-on-demand (Printful / Printify):* no sports hijab or long tunic in the range. Printful quotes 2–7
  business days to make plus shipping, 8–14 days average to Australia. Base costs not confirmed.
- *Small wholesale packs from Turkey:* e.g. turanline.com lists a two-piece set (long zip-neck tunic + pants)
  at US$24 per piece, sold in packs of 6 (1 M, 2 L, 2 XL, 1 XXL), US$500 minimum order. Shipping to Australia,
  fabric content and photo rights not stated. Hicabistan (Istanbul) claims a 10-piece minimum with private label.
- *Small private-label runs:* an Alibaba listing shows a modest long-sleeve set at US$17.99 for 50–499 units
  with logo; Sialkot (Pakistan) factories advertise 10–20 pieces per design. No quotes obtained.

**Conclusion:** pure dropshipping of modest activewear with tracked delivery under ~10 business days was not
found. The realistic options are (a) dropship from overseas with an honest 2–3 week delivery promise, or
(b) hold a very small stock of 2–3 hero pieces in Sydney and ship in 1–2 days. Recommendation given to the
owner: (b), bought only after samples pass. Awaiting the owner's decision, since it changes the "no stock" model.

**Draft price band (not final):** tops $49–69, pants $55–69, sets $99–119, sports hijab $22–29 (AUD).

### 15 Nov 2026 — Owner dropped activewear; new niche research
**Owner's brief:** forget activewear. Find a niche with less competition, that solves a problem, and works as
pure dropshipping. Sections 1–2 above describe the old activewear plan and are superseded once a niche is chosen.

**Supply finding:** Dropshipzone (dropshipzone.com.au) is the main Australian-warehouse dropship supplier: free
to join, needs an ABN, most items dispatched in 1–2 business days, has a Shopify app. Its public search shows
which items are locally stocked versus "IMPORT" (shipped from overseas). Wholesale prices are only visible after
login, so margins are not confirmed yet. Search counts below are from a sample of 80 results per keyword.

| Niche | Locally stocked share of sample | Notes |
|---|---|---|
| Cat containment (catios, enclosures, cat runs) | cat enclosure 62%, catio 13 of 15 | Demand pushed by council cat-containment rules |
| Senior / injured dog mobility (ramps, stairs, strollers, playpens) | ramps 85%, car ramps 97%, stairs 70%, strollers 62% | Same products listed on Woolworths, Kmart, Bunnings marketplaces |
| Ageing-in-place aids (shower chairs, bed rails, lift recliners) | 72–90% | Many are medical devices under TGA rules. Avoid. |
| Backyard chickens / small animals (coops, hutches) | coops 60%, hutches 95% | Established specialists already exist |
| Mould and damp for renters (dehumidifiers) | 35% | Electrical compliance risk, big-box competition |
| Braces, posture, hearing, knee supports | 0% | Import only. Not viable for fast delivery. |

**Competition notes**
- Cat containment specialists: Somerzby (catios about $300–410) and Catnets (portable enclosures about $440–800).
  Budget wooden catios on Amazon from about $200. Reported rules: ACT requires cats born after 1 July 2022 to be
  contained; several Victorian councils (e.g. Knox) have 24-hour containment; a WA bill letting councils make cat
  laws was awaiting final approval in October 2026. Council rules to be checked against official pages before
  any of this is used in store copy.
- Senior dog mobility: no specialist store found, but the identical i.Pet / PaWz products are sold through
  major retailer marketplaces, so price comparison is easy for shoppers.

**Recommendation given to the owner:** cat containment, with senior dog mobility as the second choice.
Awaiting the owner's decision and a check of Dropshipzone wholesale prices.

### 15 Nov 2026 — Trend-led niche decision (owner removed the earlier conditions)
**Owner's brief:** drop the "low competition / problem-solving / pure dropship" conditions; read current market
trends and pick the store most likely to produce real sales.

**Trend data found**
- Australia Post 2026 report: online spend $82.6b in 2025, up 14%. Fastest categories: books/stationery +24.1%,
  hobbies and recreational goods +17.1% (+22% in the latest quarter). Fastest-growing shoppers are the oldest groups.
- GLP-1 medicines (Ozempic, Wegovy, Mounjaro): about 500,000 Australians using them, a 10-fold rise from 2020 to
  2025 (UNSW-led report, not yet peer reviewed). About 7.8 million adults eligible. Nearly half pay privately,
  $200–700 a month. PBAC recommended PBS listing for Wegovy in January 2026; price negotiations under way.
- TikTok Shop is not live in Australia (reports point to early 2027), so US "viral product" lists don't transfer.
- Book nook kits: Amazon US unit sales fell about 24% month on month in July 2026; top 10 listings hold ~59%.

**Recommendation given to the owner:** a specialist store for people who use weekly injection pens, led by one
hero product (a travel cooling case for pens), then storage, tracking and strength-at-home products.
- Competition found in Australia: one cooling pouch at Chemist Warehouse (Glucology); 4AllFamily ships from the US.
  No Australian specialist store found.
- Supply: small accessories are not stocked locally on Dropshipzone (cooler cases 5% local, portion plates and
  bands 0%). Strength gear is (dumbbells 90%, walking pads 87%). So the hero product needs a small stock held
  in Sydney, bought only after samples pass. Supplier prices not yet quoted.
- **Legal limit (must be respected in all copy and ads):** the TGA prohibits advertising prescription medicines
  including GLP-1s to the public, with large penalties. The store must not promote the medicines, name them in
  the brand, or make weight-loss or treatment claims. Whether "fits X pen" compatibility wording is acceptable
  is unverified and must be checked against TGA guidance before launch. Cooling-time claims must come from the
  owner's own tests.

### 15 Nov 2026 — Three checks on the injection-pen companion store
**1. Regulator wording rules — NOT cleared.** tga.gov.au could not be opened from this environment, so the
primary guidance was not read; findings are from search summaries. Advertising is anything that on its face
promotes the use or supply of a therapeutic good, directly or indirectly. No guidance was found on accessories
that mention a medicine. Second open question: competitors describe their cooling wallets as "TGA approved"
(Fridge-to-Go) and "FDA Listed" (Glucology), which suggests a medication cooling case may itself be a medical
device needing an ARTG entry if imported under our own brand. Unverified. Needs a direct answer from the TGA.
What competitors do in practice: IBD Medical says "insulin pens or GLP-1 injections" with no brand names and
no weight-loss wording; Diabetes HQ lists Ozempic among medicines a cooler suits. Practice, not legal clearance.

**2. Supplier prices — listings only, no quotes.** Alibaba EVA pen cooler cases US$0.85–1.23 each at 500 units;
some listings from 1–100 units; versions with ice packs not priced. Australian retail: cooling wallets mostly
$30–60 (median about $50).

**3. Demand — confirmed in kind, not in volume.** Google Australia suggests "mounjaro travel case australia",
"mounjaro travel case chemist warehouse", "ozempic travel case australia", "wegovy travel case australia",
"mounjaro fridge storage case". No monthly volumes (needs Google Keyword Planner in the owner's Ads account).

**Correction to the earlier entry:** the Australian market is not empty. Sellers found: IBD Medical / Glucology
(Australian-owned since 2016, stocked by Chemist Warehouse, 21 of 23 cooling products already mention GLP-1
pens), FRIO Australia, Fridge-to-Go, Diabetes HQ, Diabetes WA shop. All are positioned as diabetes brands.

**Revised recommendation:** do not import an own-brand case. If this niche goes ahead, resell existing
Australian products (their importer carries the device compliance) and compete on audience and content. No
money to be spent until the TGA answers. Cat containment margin test continues in parallel as the fallback.

### 15 Nov 2026 — Owner rejected medical / regulated niches; "out of the box" idea
**Owner's brief:** nothing with medical or legal headaches; something easy to sell; think out of the box.
Injection-pen store dropped. No TGA enquiry needed.

**Checked and dropped:** personalised AI-assisted songs as gifts (fits the owner's music skills) — already sold
in Australia from about $15–49 with "ready in 10 minutes" delivery, and AI-music ownership terms are unsettled.

**Idea put to the owner — "road-tested by a driver":** a store of everyday car and commute gear that the owner
actually uses in his rideshare car about 60 hours a week. The car is the showroom (100+ passengers a week see
the products in use), the test bench (real wear, real heat) and the content (build-in-public videos of a driver
building a store to quit driving). Products are picked from Dropshipzone's weekly "Winners" list (top sellers
on Australian marketplaces matched to its catalogue) so nothing is chosen on theory.
- Dropshipzone local stock, sample of 80 per keyword: car organisers 87%, boot organisers 85%, car fridges 90%,
  floor mats 57%, cleaning kits 27%. Import-only (slower delivery): phone holders, seat gap fillers, travel mugs,
  steering wheel covers, car vacuums.
- Rule for this range: no mains-powered electrical items (Australian electrical compliance), no safety claims.
- To verify before any in-car QR sign: Uber's rules on promoting a business to riders.
- Margins unknown until the Dropshipzone account is approved.

### 15 Nov 2026 — Uber rules check for the in-car QR sign
- **Read:** Uber Community Guidelines, Australia and New Zealand, last modified 4 Oct 2026.
- **No rule found** on promoting your own business, selling products or QR signs inside the car.
- **Grey area:** under "Other unacceptable activities" the guidelines say unauthorised or third-party items
  "such as lights, placards, signs" may confuse riders. Only excerpts were read; it appears to be about
  Uber-branded / identification items, but a sign in the car could be read as covered.
- **Clear rules that shape the design:** never solicit or accept payment outside the Uber platform; contact
  ends when the trip ends; do not make riders uncomfortable; breaking any guideline, or low ratings, can cost
  account access.
- **Not read:** the driver services agreement (only in the Driver app). NSW Point to Point fact sheets could not
  be opened; search results show only exterior rules (retroreflective sign required, nothing resembling a taxi).
- **Decision rule:** no sign goes in the car until Uber Support confirms in writing. The store does not depend
  on the sign; videos are the main channel.

### 15 Nov 2026 — RESET by the owner: no longer limited to an online store
**Owner's brief:** reset everything above. Act as a top digital entrepreneur. The business can be a website,
store, platform or app, as long as it is digital, easy to market, in demand and takes little time to run.
All niche ideas above (activewear, cat containment, injection-pen store, driver-tested car gear) are parked.
The Shopify store "Aysose" and the Horizon theme branches are left untouched and unused for now.

**Trend data found**
- BrightLocal (US, Feb 2026, 1,002 adults): share of consumers using AI for local business recommendations
  rose from 6% in 2025 to 45% in 2026; ChatGPT used by 31%. No Australian survey exists; Roy Morgan reports 58%
  of Australians 14+ used AI tools in a four-week period.
- AI-visibility tracking tools: Otterly from US$29/month, Peec about US$95, BrightLocal US$39 per location.
  Australian agencies sell audits at $1,000/month (3-month minimum) and $2,497 one-off; several give free audits.
- Dossis Digital (June 2026, 84 trade queries): ChatGPT named the same businesses only 8% of the time across
  three identical runs; Claude 89%. Any tracker must run each question several times and report frequency.
- Solo-founder products reported as earning in 2026 include AI search visibility tools and form back-ends.

**Recommendation given to the owner:** an "AI recommendation checker" for local businesses — a free instant
check of whether ChatGPT, Gemini and Claude name a business for "best X in suburb", a low monthly plan for
re-checks and competitor comparison, and a done-for-you fix sold through DigiMedia Code. Weekly public
"who AI recommends in [suburb]" pages are the marketing. Proposed validation before building: 20 manual
checks for businesses the owner already knows, then ask for the monthly fee; build only if at least 3 pay.

### 15 Nov 2026 — Owner asked about hippie/boho accessory stores and adult dropshipping
- **Hippie / boho accessories:** no official count; estimate a few hundred Australian online stores. Owner judged
  it not a good idea.
- **Adult products store (requirements researched, not decided):** no special licence found for selling adult
  toys online, but state-level rules were not verified. Shopify allows the storefront; Shopify Payments is
  widely reported as unavailable for sex toys, so a separate payment provider is likely needed (not confirmed
  against the current Australian terms). Meta bars ads for products focused on sexual pleasure; Google strongly
  restricts sex-toy ads and Shopping listings. Age-restricted material codes (from 9 March 2026) target
  pornography; whether a toy retailer's product images are caught was not confirmed. Child-like sex dolls are a
  serious Commonwealth offence to import or possess. Suppliers: Calvista (Victoria) is a large adult wholesaler,
  dropship terms unconfirmed; Dropshipzone has an Adult Products category with thin local stock in a sample.

### 15 Nov 2026 — RESET again: backup income via an AI middleman platform
**Owner's brief:** adult store was never wanted. He already runs a print-on-demand store (separate project,
waiting on sales) and needs a backup that earns. Wants a platform where people transact and he takes a service
fee as the middleman, AI-related. Money is urgent.

**Recommendation given to the owner:** an AI catering-quote middleman for South-West Sydney. A customer types
the event (headcount, budget, cuisine, date); AI builds an instant quote from local food shops' menus; the shop
fulfils; the platform keeps a commission (target about 12%). Supply side starts with the food shops the owner
already works with. Start manually (a simple page plus messaging) before building a platform.
- Competition found: EatFirst / Order-In (corporate catering, CBD focus, 800–1,100 caterers, "small commission",
  rate not published); Oneflare and Airtasker (quote requests; Oneflare lists 33 caterers in Campbelltown). No
  local instant-quote catering platform found for Campbelltown / Macarthur.
- Reference order size: a Oneflare job post showed a Campbelltown Christmas dinner at $40 a head for 20 people.
- Honest limits told to the owner: marketplaces are slow to start; each order needs coordination; food safety
  and delivery stay with the shop and must be written into the terms.
- Validation proposed: get 3 shops to agree to a commission and send package menus, then land 3 paid orders
  in December before writing any platform code.

### 15 Nov 2026 — FULL RESET: digital marketplace, owner profile reduced to "web programmer"
**Owner's brief:** forget every earlier idea and everything about his other work and clients. No food ideas.
Only two facts to use: he is a web programmer and wants a digital marketplace business. It must be digital,
easy to market, in demand and take little time to run.

**Research**
- Vibe-coding tools: Lovable about 8 million users and 100,000+ new projects a day, about 4 in 5 users
  non-technical; Bolt 5–7 million users; Replit 35–50 million. Figures are from secondary reports and conflict.
  One report cites Barclays data showing traffic falling (Lovable -40%, Bolt -27%); unverified.
- Help for stuck builders today: agencies ($1,500 audits, $6,000–50,000 rescues), hourly experts
  ($60–200+ an hour on MentorCruise), Lovable's own partner directory, VibeCodeFixers (free directory, about 300
  developers, only 30–40 projects matched as of a 2025 report, payment arranged privately), vibecodejobs.io
  (job board, $1 to post). No marketplace found with fixed-price small jobs, checkout and held payment.
- Rejected: marketplace for AI agent skills / workflow templates — over a million free listings, sellers mostly
  earn $0–50 a month, 10% commissions on $10–25 items.

**Recommendation given to the owner:** a fixed-price "finish my AI-built app" marketplace. Non-technical
builders pick a priced job (deploy, bug fix, security check, payments setup), pay up front, a vetted developer
does it, the platform keeps about 20%. AI reads the app and error, picks the right package and writes the
developer brief. Owner does the first jobs himself, then adds developers.
- Validation proposed: one page with six priced packages; 5 paid jobs within 3 weeks before building the platform.

### 15 Nov 2026 — Owner rejected the app-rescue marketplace; asked what to build around GTA 6
- **Google Trends:** automated access was rate-limited after one query. "Trending now" is news and sport; the
  useful view is Explore → Related queries → Rising with buying-word seeds. Owner is browsing it himself.
- **GTA 6 facts found:** launches 19 Nov 2026 on PS5 and Xbox Series X|S only, US$79.99, single-player only.
  No online multiplayer at launch (expected 2027, unconfirmed by Rockstar). No PC version announced. Analyst
  first-year forecasts 30–60 million copies, about US$3 billion.
- **Rules:** Rockstar's mod guidelines make modding non-commercial unless sold through its own approved
  storefront, and ban loot boxes, NFTs and custom currencies. Take-Two has a history of shutting down fan projects.
- **Already built by others:** interactive maps (State of Leonida with about 1,600 markers, GTA BOOM, gtadb),
  long-running fan sites, and Discord / Reddit groups for finding crews (HeistTeams about 102,000 members).
- **Assessment given to the owner:** big audience, but a poor fit for a fee-taking marketplace right now: no
  online play, no PC mods, and paid mods routed through Rockstar's store. Options offered: a small fan tool for
  launch-week traffic (ads), a server / crew listing site timed for the 2027 online launch, or services for
  GTA content creators.

### 15 Nov 2026 — Digital product ideas around GTA 6 (marketplace requirement dropped)
- **Search signals (Google Australia suggestions):** "gta 6 pc release date", "gta 6 pc requirements",
  "gta 6 pc specs", "gta 6 how to play on pc", "can i run gta 6 on my pc / laptop / rtx 3050",
  "gta 6 companion app", "gta 6 map poster", "gta 6 cheats ps5".
- **PC version:** not announced. Estimates range from Q1 2027 (GamesBeat report, unconfirmed) to Q1 2028
  (GameSpot's guess). Past Rockstar PC ports arrived 7–19 months after console.
- **Recommendation given to the owner:** a "can my PC run it" checker plus release alert list for PC players
  waiting for GTA 6, earning from hardware affiliate links now and game-sale affiliate links at PC launch.
  Requirements are unknown, so any figures must be labelled as estimates. Avoid "GTA" in the domain and any
  Rockstar logos or game images.
- Other ideas listed: completion tracker with share cards, cheat-code quick reference, AI "ask anything" helper.

### 15 Nov 2026 — PC checker built in the Aysose theme (owner said go)
**Decision:** build the "can my PC run it" checker inside the Aysose Shopify store, collect emails there, and
later sell original print-on-demand designs to that list. No merchandise may use the game's name, logo,
characters, map or artwork (trademark / copyright of Take-Two); designs must be original PC-gamer humour.

**Files added on `dev` (not on `main`):**
- `sections/pc-checker.liquid` — the page section. All text, the email signup and five optional upgrade links
  are editable in the theme editor. A link only shows when its box is filled.
- `assets/pc-checker.js` — parts lists (about 75 graphics cards, 50 processors) with approximate scores, and
  the four estimated requirement levels (`TIERS`). Update `TIERS` when official requirements are published.
- `templates/page.pc-checker.json` — page template "pc-checker" that shows the section.

**Estimates used (ours, not official):** 1080p low = GTX 1660 Super class, 6 GB video memory, Core i5-10400
class, 16 GB RAM; 1080p high = RTX 3060 Ti class, 8 GB; 1440p high = RTX 4070 Super class, 12 GB; 4K high =
RTX 4080 class, 16 GB, 32 GB RAM. A hard drive is always marked borderline. Laptop cards are scored 20% lower.

**Checks run:** Shopify Theme Check — 7 warnings, all in stock Horizon files, none in the new files. Verdict
logic tested on five sample PCs. Rendered at 380px and 1200px with no sideways scroll and no script errors.

**Email signup** uses Shopify's customer form and tags subscribers `newsletter` and `pc-version-alert`.

**Domain names found available on 15 Nov (not bought):** willmyrigrun.com, rigchecksix.com, pcreadycheck.com,
US$17 first year each. Preferred: willmyrigrun.com.

**Gotcha:** the Shopify connector had switched back to another store (SeenSheen). Nothing was changed there.
It was disconnected again on the owner's instruction; always confirm the connected store before store changes.

### 15 Nov 2026 — PC checker page live on the `dev` theme only
- Connector confirmed on the Aysose store (`9jfwxy-kf.myshopify.com`, Trial plan).
- The three new files synced to theme `Aysose-Shopify/dev` (id 147642581076). They are not on `main` or on the
  live Horizon theme.
- Page created: "Can my PC run Grand Theft Auto VI?", handle `can-my-pc-run-it`, id 116122124372, template
  `pc-checker`, published. On the live theme the page falls back to the default page layout and shows only its
  title, because the template exists only on `dev`.
- In-store check: the section renders, both part lists fill, the example verdict and estimates table appear.
- **Gotcha:** the connector's theme screenshot tool does not load Horizon's compiled section styles; stock
  pages (e.g. Contact on the untouched `main` theme) also come out unstyled. Styling inside Shopify therefore
  has to be checked by the owner in the theme preview.
- Preview address: `/pages/can-my-pc-run-it?preview_theme_id=147642581076`.

### 15 Nov 2026 — Checker turned into the homepage landing page (on `dev` only)
**Owner's instruction:** do not merge yet; make it a landing page until the email list has grown.
- `templates/index.json` on `dev` now shows only the PC checker section (the stock hero and product list are gone).
- New section setting **Landing page mode** (on by default): hides the store menu, cart and footer on the page
  showing the section, and shows a slim brand line plus a copyright / privacy-policy line instead. Untick it in
  the theme editor when the store opens.
- Email signup moved up, directly under the result.
- The separate page `can-my-pc-run-it` (id 116122124372) was unpublished to avoid two copies of the same page.
- Theme Check: still 7 warnings, all in stock Horizon files.
- Sync confirmed by reading `templates/index.json` back from the `dev` theme. The connector's screenshot tool
  kept showing the old homepage on two tries (looks cached), so the homepage has not been seen rendered.
- **Not yet true:** the store is on the Trial plan and password-protected, so the public sees the password
  page, not this landing page. No emails can be collected until that is resolved.
- The store has only the default privacy policy (still says "My Store 4"); it must be corrected before
  collecting emails.

### 15 Nov 2026 — Premium redesign and email-before-result (on `dev` only)
**Owner's instruction:** make the checker look more premium and show the result only after email signup.
- **Design:** the section now has its own fixed dark look (graphite surfaces, amber-to-coral accent, soft glow
  and faint grid behind the heading), independent of the theme's colours. Heading is split into a plain part
  and a highlighted part (two settings). A facts row shows the real counts from the parts lists
  (70 graphics cards, 50 processors, 4 quality levels — the earlier "about 75" was wrong).
- **Email before result:** new setting "Ask for an email before showing the result" (on by default). The result
  panel shows a blurred placeholder and an email form. After a successful signup Shopify reloads the page; the
  script restores the chosen parts and shows the result. The device stays unlocked afterwards (browser storage).
  When the setting is on, the separate signup box is not shown. The requirements table stays visible to
  everyone, so the gate is soft, and search engines can still read the page.
- The gate text states that subscribing also means PC-release emails, with an unsubscribe note and a privacy
  policy link, so consent is clear.
- **Checks:** Theme Check still 7 warnings, all in stock Horizon files. Tested outside Shopify at 380px and
  1280px: no sideways scroll, no script errors; locked state, signup-then-unlock (parts kept) and return visit
  (stays unlocked) all behaved. The real Shopify signup round trip has not been tested in the store.

### 16 Nov 2026 — Privacy policy checked (owner asked to fix it)
- Read the live policy: it now says "Aysose" throughout, dated 15 November 2026, contact staff@aysose.com.
  It is Shopify's automatic privacy policy, which picked up the store rename by itself. Nothing was changed.
- Left as the automatic version on purpose: overwriting it through the API would turn it into a fixed
  hand-written policy that no longer updates itself.
- It covers marketing emails and unsubscribing in general terms. It does not specifically describe the PC
  release alert list or the parts saved in the visitor's browser.
- **Still broken:** the policy points to a "contact information policy" that does not exist. That needs the
  business name and address from the owner (Settings → Policies → Contact information).
- No terms of service, refund or shipping policy exist yet (not needed until something is sold).

### 16 Nov 2026 — Owner will pay for Shopify; checker stays as the homepage; SEO pass (on `dev` only)
**Owner's decision:** he will subscribe to a Shopify plan, so the checker stays as the main landing page
(homepage), not the password page.

**SEO work done in the theme**
- Homepage heading now reads "Can my PC run GTA 6?" (the term people search), with "Grand Theft Auto VI"
  in the introduction.
- New editable **Common questions** part of the section (blocks of type "Question"; add, edit or reorder them
  in the theme editor). Eight questions written around real search phrases: PC release, PC system
  requirements, RTX 3050 / 3060, laptops, 8 GB RAM, SSD, accuracy, when requirements will be announced.
  Answers are plain text visible to everyone and to search engines, and are also output as FAQ structured data.
- Answers that quote our estimates must be kept in step with `TIERS` in `assets/pc-checker.js`.
- Release-gap facts used: GTA IV about 7 months to PC, Red Dead Redemption 2 about a year, GTA V about 19 months.
- Theme Check: still 7 warnings, all in stock Horizon files.

**SEO items only the owner can do (Shopify admin, no API for them)**
- Online Store → Preferences → homepage title and meta description (text supplied in chat).
- Choose a plan and remove the storefront password; until then search engines cannot index the site.
- Connect a domain, then add the site to Google Search Console and submit `/sitemap.xml`.
- Social sharing image in Preferences (original artwork only, no game images or logos).

**Idea noted, not built:** one page per graphics card ("Can an RTX 3050 run GTA 6?") to catch long-tail
searches. It conflicts with hiding the result behind the email form, so it needs an owner decision.

### 16 Nov 2026 — LIVE: merged to `main`, per-card pages, domain aysose.com
**Owner's instructions:** build the per-card pages; merge to `main`; he has subscribed (plan shows Advanced),
removed the password, set the homepage title and description, and connected **aysose.com** as the primary domain.
- `dev` merged into `main` (fast-forward). The owner published theme `Aysose-Shopify/main` (id 147642613844);
  it is now the live theme. The original Horizon (id 147591233620) is unpublished.
- **Per-card pages:** 69 pages, one per graphics card in the checker, titled "Can the <card> run GTA 6?",
  address `/pages/can-the-<card>-run-gta-6`, page template `gpu-check`. Each shows a free written estimate for
  that card (levels, video memory, next card up and down, laptop note), then the checker with that card
  already selected. The full-PC result is still behind the email form.
- **How they are built:** a page only needs the right title and the `gpu-check` template. The text is written
  by `sections/pc-checker.liquid` from `snippets/pc-card-data.liquid`; the links between cards come from
  `snippets/pc-card-links.liquid`. Both snippets are generated by `node tools/generate-card-pages.mjs`.
  **When estimates or the card list change: run that script, commit, push.** New cards also need a new page.
- Homepage now also lists links to all 69 card pages (setting "Show links to the graphics card pages").
- The first test page (RTX 5090, id 116144734292) carries an unused `custom.card` metafield; harmless.
- **Verified on the live site (aysose.com) in a real browser at 380px:** homepage and a card page load the
  checker, store header and footer hidden, 69 card links, 8 questions on the homepage, card page text correct,
  that card pre-selected, result locked, no sideways scroll, no errors from our code.
- **Not tested:** a real email signup through Shopify's form on the live site.
- Known small issue: the homepage has two top-level headings, because the hidden store header also outputs
  the shop name as one. Left alone (it is in `sections/header.liquid`, stock theme code).
- Old WordPress addresses on aysose.com (`/product/...`, `/collections/women`, old policy pages) now return
  "not found". `shop.aysose.com` still points at the old frozen store (HTTP 402).

**Google clean-up advice given to the owner (Search Console):** temporary removals by prefix for the old
WordPress paths, delete the old sitemap entry, submit `https://aysose.com/sitemap.xml`, request indexing of the
homepage. Do not redirect old product pages to the homepage. Remove the `shop` DNS record in Cloudflare.

**Logo:** a gaming-themed AYSOSE logo was started in Canva (see chat for the design link).

### 16 Nov 2026 — First real signup: overlay bug fixed, logo in the header (live)
- **Owner's test:** signup with his own email worked (the customer appeared in Shopify and the page unlocked
  with his parts kept), but the email form stayed on top of the result.
- **Cause and fix:** the form overlay's `display: flex` rule beat its `hidden` attribute. Added a rule so
  `hidden` always wins inside the checker. The earlier local test missed it because the test page had its own
  rule doing that. Pushed to `dev` and `main` because the bug was on the live site.
- **Verified on aysose.com:** locked state shows the form; with the device unlocked the form is gone and the
  result shows with the chosen card kept.
- **No email after signup is expected:** Shopify does not send anything to a new subscriber unless a welcome
  automation is set up (Marketing → Automations). Not set up yet; owner's choice.
- **Logo:** the owner uploaded the logo in theme settings (logo and inverse logo). In landing page mode the
  section now shows the inverse logo, centred at the top, linking to the homepage, at the theme's "Logo
  height" settings (currently 36px desktop, 28px mobile). Falls back to the shop name as text if no logo is set.
- **Gotcha:** Shopify commits theme-editor changes to the `main` branch ("Update from Shopify for theme ...").
  Always `git fetch origin main` and merge it before pushing, or the push is rejected or settings are lost.

### 16 Nov 2026 — Subscriber emails
- Recommended turning **Marketing double opt-in** on (Settings → Notifications → Customer notifications →
  Customer marketing confirmation), because the result is locked behind the email box and that invites junk
  addresses. Shopify Messaging is already installed in the store.
- Wrote two emails for the owner to paste in (text is in the chat): the confirmation email (same Notifications
  screen, change wording only, keep the code in curly brackets) and a welcome email (Marketing → Automations →
  "Welcome new subscribers").
- **Consent scope:** the signup text only promises PC release and requirements news. Before sending
  merchandise or other promotions to this list, the signup text must say so. Owner to decide on the wording.

### 16 Nov 2026 — Signup wording widened (live)
- On the owner's word, the text beside the email box now also says subscribers get "occasional updates from
  Aysose" (both the locked-result text and the separate signup box). This applies to people who sign up from
  now on. Anyone who subscribed before this change only agreed to PC release and requirements news.
- The welcome email should carry the same line.

### 21 Nov 2026 — Signups arriving but stuck as "pending"
- **Owner's report:** many emails are coming in, but they show as pending subscribers. Cause: double opt-in is
  on, so a signup only counts once the person taps the link in the confirmation email, and most do not.
- **Decision recommended to the owner:** turn double opt-in off (Settings → Notifications → Customer
  notifications → Customer marketing confirmation). New signups are then subscribed straight away. This reverses
  the earlier advice; the real numbers showed the confirmation step loses most of the list.
- **Wording changed (live):** the text beside the email box now says "By entering your email you agree to
  receive emails from Aysose: news about the PC version and its official requirements, and occasional updates.
  Unsubscribe any time." This is the consent that single opt-in relies on.
- **Existing pending signups:** advised NOT to convert them to subscribed by hand. The confirmation email they
  received says "If this wasn't you, ignore this email and you won't hear from us", and some of those addresses
  will be junk or belong to someone else. Owner's call.
- **Gotcha repeated:** the Shopify connector was pointing at SeenSheen again on 21 Nov. Nothing was read beyond
  the store name and nothing was changed. This task needed no store access. Check the store before any store call.

### 21 Nov 2026 — Connector back on Aysose; subscriber count
- Connector switched and confirmed on the Aysose store (aysose.com, Advanced plan).
- **Subscribers (read 21 Nov, consent state only, no names or emails):** 48 customers, all marked Subscribed,
  none Pending. 45 are single opt-in and 3 confirmed through the email link.
- **Signups by day (UTC):** 16 Nov 1 (the owner's test), 18 Nov 9, 19 Nov 13, 20 Nov 10, 21 Nov 15 so far.
- Not known: whether the earlier pending signups were switched by the owner by hand or changed when double
  opt-in was turned off.

### 22 Nov 2026 — Traffic so far (Shopify analytics, 15–22 Nov)
- **683 sessions** in total. By day: 15 Nov 13, 16 Nov 73, 17 Nov 44, 18 Nov 15, 19 Nov 169, 20 Nov 160,
  21 Nov 187, 22 Nov 22 (part day). The jump on 19 Nov is when the card pages started getting search visits.
- **Sources:** Google search 426 (62%), direct 235 (34%), Brave 11, Facebook 8, others 3. Some of the direct
  sessions are the owner's visits and the automated checks run from this project, so real direct is lower.
- **Landing pages:** homepage 90 sessions (13%); nearly all the rest land on the single-card pages. Top ones:
  RTX 2080 Ti 23, RX 6900 XT 19, RTX 3060 Ti 18, RTX 5070 18, RTX 3080 Ti 17, RX 5700 XT 17, RTX 4080 Super 15.
- **Countries:** United States 196 (29%), South Korea 27, India 24, United Kingdom 23, Germany 23, Pakistan 22,
  Netherlands 21, Egypt 18, Australia 16, Turkey 16, Canada 15. The audience is global, not Australian.
- **Devices:** desktop 348, mobile 334.
- **Signups:** 47 real signups against roughly 650 visitors, about 7%.
- **Implications:** the card pages are the traffic engine, so more pages of the same kind (processors, laptop
  cards) are the obvious next step; upgrade links should point at retailers that serve the United States first.

### 22 Nov 2026 — Monetisation direction and affiliate programs
- **Owner asked:** convert to a gaming store with GTA 6 merchandise, or put Google ads on the site?
  **Advice given:** neither yet. Unlicensed game merchandise risks the whole store; ads pay very little at
  about 680 sessions a week. Start with affiliate links to PC parts (the upgrade link boxes are already built),
  keep the checker as the homepage, and add any shop beside it later under its own addresses.
- **Owner has joined Amazon Associates** (which country's program is not yet confirmed).
- **Programs compared (rates from web research; only Amazon's is from its own published table, the rest are
  third-party reports that disagree):**
  - Amazon.com: PC and PC components 2.5%; physical games and consoles 1%; 24-hour cookie. OneLink can send
    visitors from Canada, UK, Germany, France, Italy and Spain to their local Amazon from a US account.
  - Newegg (Rakuten Advertising): reported 0.5–2.5%, 7-day cookie.
  - Best Buy (Impact): reported 0–1%, computers possibly 0%, 1-day cookie. Not worth it.
  - eBay Partner Network: computers reported 1.5%, 24-hour window.
  - B&H (Impact): reported 2–8%, base about 2%.
  - Prebuilt PC makers: NZXT reported 3–5%, Skytech 6%, Corsair 3–8%; iBuyPower and CyberPowerPC not found.
- **Recommendation:** Amazon as the main program; one prebuilt-PC maker for the "replace the whole machine" link.
- **Amazon rules to respect:** show an "As an Amazon Associate I earn from qualifying purchases" notice; do not
  show Amazon prices typed by hand; keep affiliate links out of emails until the owner has checked his own
  agreement (sources conflict on whether email is now allowed).
- **Proposed build, not started:** a theme setting for the Amazon tracking ID so each recommended part links
  to an Amazon search for that exact part, on the result and in the free text of every card page.

### 22 Nov 2026 — Amazon links built (live, switched off until the IDs are entered)
- **Owner joined both Amazon.com (United States) and Amazon.com.au (Australia) Associates.**
- **Three new settings on the PC checker section:** "Amazon.com tracking ID (United States)", "Amazon.com.au
  tracking ID (Australia)" and the Amazon notice text. Nothing shows until the United States ID is filled in.
- **What appears once filled in:** on the result, each suggested part (graphics card, processor, memory, SSD,
  whole PC) gets a "See <part> on Amazon" link to an Amazon search for that part; on every card page the
  suggested upgrade cards are links, plus a "See <card> cards on Amazon" link. The notice "As an Amazon
  Associate I earn from qualifying purchases." shows wherever links show and in the page footer line.
- **Which Amazon:** visitors whose device is on an Australian time zone go to Amazon.com.au with the Australian
  ID (if set); everyone else goes to Amazon.com with the United States ID. Links are marked sponsored / nofollow.
- The five manual link boxes still work and win over the Amazon link for that part.
- **Section settings are saved per template:** the IDs must be entered twice, on the homepage and on the
  graphics card page template (`gpu-check`).
- No prices are shown (Amazon rule). Keep the links out of emails until the owner has checked his agreement.
- **Tested outside Shopify at 380px** with test IDs: United States, United Kingdom and Sydney time zones gave
  the right store and ID; no links and no notice with the boxes empty; no sideways scroll; no script errors.
- Not done: other countries' Amazon stores (Amazon OneLink, set up inside the owner's Amazon account, can
  redirect UK / Canada / Germany visitors; it needs sign-ups to those programs).

### 22 Nov 2026 — Amazon IDs live; 50 processor pages (live)
- **Amazon IDs:** `aysoseus-20` (Amazon.com) and `aysose-22` (Amazon.com.au). The owner entered them on the
  homepage; the card pages showed no links because section settings are saved per template. The same IDs are
  now written into `templates/page.gpu-check.json`. If an ID ever changes, change it in both templates.
- **Processor pages:** 50 pages, one per processor in the checker, titled "Can the <processor> run GTA 6?",
  address `/pages/can-the-<processor>-run-gta-6`, same page template `gpu-check` as the graphics card pages.
  The section looks the name up in `snippets/pc-card-data.liquid` (graphics cards) and then
  `snippets/pc-cpu-data.liquid` (processors). Each page has a free written estimate for that processor, links
  to the next processor up and down, Amazon links, and the checker with that processor already selected.
- `tools/generate-card-pages.mjs` now also writes `pc-cpu-data.liquid` and `pc-cpu-links.liquid`. The example
  processors per level are repeated in the section (`level_cpus`); keep them in step with `TIERS`.
- Homepage and every part page now list links to all 69 graphics card pages and all 50 processor pages.
- **Verified on aysose.com at 380px:** a processor page from a United States time zone links to Amazon.com
  with `aysoseus-20`; from Sydney to Amazon.com.au with `aysose-22`; the RTX 3050 card page now shows its three
  Amazon links; the Amazon notice shows; no sideways scroll; no script errors.
- **Gotcha:** in Liquid, do not test a variable that was assigned `blank` with `!= blank`; assign `''` instead.
- Not tested: whether Amazon credits a real purchase (only the owner's Associates reports can show that).

### 22 Nov 2026 — Upgrade guide pages (live); budget pages rejected
- **Owner asked for "best card under $200 / $300 / $500" pages. Not built that way.** United States shop
  prices for graphics cards in November 2026 are far above launch prices (reports: RTX 5070 Ti lowest price
  about $1,340 against a $749 launch price; RTX 5060 Ti 16GB up to about $769 against $429). A page promising
  a card "under $300" would be wrong on the day, and Amazon's rules bar prices typed by hand. Honest budget
  pages need live prices from Amazon's product API, which only opens after the account's first sales.
- **Built instead: five upgrade guides by quality level**, same page template (`gpu-check`):
  `/pages/best-graphics-card-for-gta-6-on-pc`, `...-at-1080p`, `...-at-1440p`, `...-at-4k`, and
  `/pages/best-processor-for-gta-6-on-pc`. The section recognises them by the page title ("Best graphics card
  for GTA 6 ..." / "Best processor for GTA 6 ...", with "at 1080p", "at 1440p" or "at 4K" choosing the levels).
- **Picks:** for each level, the three least powerful parts still sold new that clear it in our estimate
  (current ranges only: RTX 50, RX 9000, Arc B; Ryzen 5000 / 7000 / 9000, Core 13th–14th gen, Core Ultra).
  Chosen by `tools/generate-card-pages.mjs` into `snippets/pc-best-data.liquid`; the list of current ranges
  is at the top of that part of the script. Each pick links to our own page for that part and to Amazon
  ("see today's price on Amazon"). No prices anywhere. The page tells visitors that waiting for the official
  requirements is the safest time to buy.
- Homepage and all part pages now show an "Upgrade guides" list above the card and processor lists.
- **Verified on aysose.com at 380px:** all five pages load with the right picks and Amazon links carrying the
  right ID for United States and Sydney visitors; no sideways scroll; no script errors.
- Store now has 69 card pages, 50 processor pages and 5 guides on the `gpu-check` template.

### 22 Nov 2026 — Visual product cards for recommended parts (live)
- **Owner's report:** sitemap resubmitted, more signups, no affiliate clicks yet; asked for visuals of the
  products. Note: the links had been live for about a day, so "no clicks" is not yet a verdict.
- **Not possible:** real product photos. Amazon product images are only allowed through its product API
  (opens after the first sales), and manufacturer photos are not ours to use.
- **Built:** each recommended part is now a card with our own drawing of the part (graphics card or processor
  chip, tinted by brand family), the name, one line about it, a large "Check price on Amazon" button and a
  link to our page for that part. Snippets: `snippets/pc-part-card.liquid` (one card) and
  `snippets/pc-part-picks.liquid` (the three picks for a level, from `pc-best-data.liquid`).
- **Where:** graphics card pages and processor pages ("What would it take to go higher?") and all five upgrade
  guides. The card and processor pages now recommend parts still sold new (the picks) instead of linking the
  older example parts in the sentence, which are mostly only sold used.
- On phones each card is a compact row with a full-width button; on wider screens three cards sit side by side.
- When real photos become available (product API), they replace the drawing inside `pc-part-card.liquid`.

### 24 Nov 2026 — Visual part cards in the checker's result (live)
- **Owner said go.** The "To reach <level>" box in the result (shown after the email step) now uses the same
  visual cards as the part pages: for a weak graphics card or processor, the three smallest parts still sold
  new that clear the next level, each with a "Check price on Amazon" button and a link to our page for it;
  for memory and the drive, one card each (with a line telling the visitor what to check on their
  motherboard). "Replacing the whole machine?" stays a text link.
- **One source for the picks:** `bestPicks()` in `assets/pc-checker.js` now chooses the parts for both the
  result and the generated pages (`tools/generate-card-pages.mjs` imports it). The list of ranges still sold
  new lives at the top of that function's section in `pc-checker.js`. The drawings used by the script
  (`PART_ART`) repeat the two in `snippets/pc-part-card.liquid`; change both together.
- The five manual link boxes in the theme editor still win: a filled box shows the owner's link, not cards.
- **Tested outside Shopify** with four sample PCs at 380px and 1280px (weak everything, weak card only, top
  PC, mid PC): right parts, right Amazon store and ID for United States and Sydney, no sideways scroll, no
  script errors. A PC that clears every level shows no cards.

### 26 Nov 2026 — Search Console numbers; live check; search descriptions (live)
- **Search Console, 17–23 Nov:** 699 clicks, about 100,000 impressions, click rate 0.7%, average position
  about 7.4. Roughly 100 Google visits a day. The site is shown far more often than it is clicked.
- **Owner feared the changes were not live because the Shopify connector is on his other store.** Checked:
  the connector was on SeenSheen again (nothing read beyond the store name, nothing changed), but the theme
  reaches the store through GitHub, not the connector. The live site has the part cards and Amazon buttons
  with the right IDs on card pages, guides and the result.
- **Why few affiliate clicks (assessment):** visitors are checking a part they already own for a game that is
  not out on PC, so few are shopping today; most are outside the United States; on a phone the first Amazon
  button sits about a screen and a half down.
- **Built:** the 124 part and guide pages had no description for search results. `snippets/meta-tags.liquid`
  now writes one from the estimate data (e.g. "Our estimate: yes, the RTX 2080 Ti should handle GTA 6 on PC at
  1080p, high settings. ..."). Aim: raise the 0.7% click rate. Only applies to pages on the `gpu-check`
  template that have no description of their own.
- **Cash-flow advice given:** apply for Google AdSense now (small money today, ready for the spike when the
  PC version is announced); keep growing the email list, which is the real asset for launch day.

### 26 Nov 2026 — AdSense applied for; email sanity check (live)
- **AdSense:** the owner applied on 26 Nov 2026 (review requested 13:50; Google says a few days, up to four
  weeks). Publisher ID `ca-pub-1108697349086812`, read from the owner's screenshot. It is a new theme setting,
  **Theme settings → Advertising → Google AdSense publisher ID**; when filled in, `snippets/meta-tags.liquid`
  adds the AdSense script and account tag to the head of every page. `layout/theme.liquid` was not touched.
  No ad spots are placed yet; that waits for approval. `/ads.txt` does not exist yet (Shopify needs a
  redirect or file for it; do it when AdSense asks).
- **Fake emails (owner's report):** with single opt-in nothing checks an address. Added `emailProblem()` in
  `assets/pc-checker.js`, run on both email forms before they are sent: rejects malformed addresses, about 50
  throwaway / placeholder domains (mailinator, example.com, test.com ...), made-up names (test, asdf, 123,
  one repeated letter) and common typos of gmail / hotmail / yahoo / outlook / icloud, with a short message.
  It cannot catch an invented but well-formed address; those bounce when the first email is sent and Shopify
  stops sending to them. Do not block real providers (a rule that rejected qq.com was removed in testing).
- Recommended to the owner: turn on the welcome email automation so bad addresses bounce out early, and
  judge the list by "Subscribed and not bounced", not by the customer count.

### 26 Nov 2026 — Connector back on Aysose; signup quality; TRAFFIC COLLAPSE found
- Connector switched by the owner and confirmed on Aysose before any read.
- **Signups (read 26 Nov):** 79 customers, all Subscribed. About 11 are clearly made up or throwaway
  (about 14%), 3 more are doubtful; roughly 65 look like real personal addresses. No addresses are recorded
  here. The email check was extended with the throwaway domains seen and a rule that Gmail names are at
  least six characters.
- **Signups by day (UTC):** 18 Nov 9, 19 Nov 13, 20 Nov 9, 21 Nov 27, 22 Nov 11, 23 Nov 5, 24 Nov 4, then
  **none since 24 Nov 13:33 UTC**.
- **Traffic collapse (Shopify analytics, store time):** sessions 22 Nov 171, 23 Nov 163, 24 Nov 183,
  **25 Nov 49, 26 Nov 9 (part day)**. Google search sessions: 116, 123, 106, then **9 and 1**. By hour the
  drop starts at 24 Nov 15:00 UTC (about 9 an hour before, 0–3 after).
- **Checked on 26 Nov, all normal:** homepage and part pages return 200 to a normal browser and to a
  Googlebot user agent; no noindex tag or header; canonical correct; robots.txt is Shopify's default;
  sitemap lists the pages; the checker loads with no script errors.
- **Cause not found.** A theme change went live at 24 Nov 14:52 UTC (result cards), minutes before the drop,
  but nothing in it touches indexing and the pages load correctly, so it is an unexplained coincidence, not
  a known cause. Other candidates only the owner can see: a Search Console removal request that covers the
  live pages, a manual action or security issue, or a ranking drop. During testing Shopify's bot check
  ("Verifying your connection") appeared twice for a few minutes for the automated browser only.
- **Needed from the owner:** Search Console → Removals, Security & Manual Actions, Pages (indexing), and
  Performance set to "24 hours" / last 7 days by day.

### 26 Nov 2026 — Search Console screens on the traffic collapse
- **Removals:** six temporary removals from 16 Nov, all old WordPress paths (`/product-tag/`, `/product/`,
  `/product-category/`, `/collections/`, `shop.aysose.com`). None covers the live `/pages/` addresses. Ruled out.
- **Manual actions:** none. **Security issues:** none. Both ruled out.
- **Performance, last 24 hours:** 14 impressions, 0 clicks, average position 4.7 (was about 15,000
  impressions a day). Google has almost stopped showing the pages; the few times it does, they still rank well.
  That pattern fits pages dropping out of the index, not a ranking slide.
- **Page indexing report:** last updated 16 Nov (14 indexed, 14.4k not indexed, mostly old WordPress
  addresses). Too old to show what happened on 24 Nov.
- **Cause still not confirmed.** Two candidates: (1) Google's automatic quality systems treating 124
  near-identical template pages with affiliate buttons on a two-week-old site as mass-produced content (no
  notice is shown for this); (2) Shopify's bot check answering Google's crawler with a "verifying" page around
  24 Nov. Asked the owner for URL Inspection of one part page and Settings → Crawl stats to tell them apart.
- **Advice given:** do not convert the site to something else yet; the demand was proven (about 100,000
  impressions in a week). Find the cause first, then rebuild the pages with more depth per page.

### 26 Nov 2026 — URL inspection and crawl stats; switch built on `dev`, NOT live
- **URL inspection** of the RTX 2080 Ti page: "URL is on Google", page is indexed. So the pages were not
  removed from the index; Google has them and has stopped showing them.
- **Crawl stats (report runs to 24 Nov):** 89% OK, 9% "Other client error (4XX)" (not "not found"), under 1%
  each for not found / robots.txt not available / redirects. `www.aysose.com` shows "Problems in the past".
  Which addresses returned the 4XX errors is not known yet (asked the owner to open that row).
- **Reading:** indexed + no manual action + almost no impressions fits an automatic, site-wide demotion by
  Google's quality / spam systems, most likely for mass-produced template pages with affiliate buttons. On
  21–22 Nov the site grew from 70 to 125 pages overnight and every page gained sponsored Amazon buttons; the
  drop came on 24 Nov. This is the most likely cause, not a proven one; Google sends no notice for it.
- **Built on `dev` and the working branch only (not on `main`, not live):** a section setting "Show Amazon
  buttons in the page text" (off by default). Off = the written part of the card, processor and guide pages
  keeps the part cards and the links to our own pages but has no Amazon buttons or sponsored links; Amazon
  buttons remain in the result after the email step. Waiting for the owner's word to make it live.
- **Told the owner honestly:** recovery from an automatic demotion can take weeks and is not guaranteed.

### 26 Nov 2026 — 4XX errors explained; Amazon buttons removed from the page text (live)
- **Crawl stats, "Other client error (4XX)" examples:** old WordPress filter addresses from 25 Oct – 3 Nov
  (`/collections/<name>/?_category=...&_tag=...`) and one `/search/suggest` request. None is a live page, so
  Shopify's bot check was not blocking Google. That candidate cause is ruled out; the automatic quality
  demotion remains the most likely explanation.
- **Owner said "go, make it live".** The switch "Show Amazon buttons in the page text" is merged to `main`
  and is off: the written part of the card, processor and guide pages has no Amazon buttons or sponsored
  links. Amazon buttons remain in the result after the email step. To undo: tick the setting in the theme
  editor on the homepage and on the `gpu-check` page template.
- **Next step proposed:** give each part page more depth so the pages stop reading as one template.

### 26 Nov 2026 — In-depth pages for the 20 most-visited graphics cards (on `dev`, NOT live)
- **Owner said go on the 20 most-visited cards.** From Shopify sessions since 16 Nov: RX 5700 XT, RTX 3050,
  RTX 3080 Ti, RTX 2080 Ti, RTX 5070, RTX 3060 Ti, RTX 4080 Super, RTX 3070, RX 6650 XT, RTX 2070, RX 6900 XT,
  RX 9060 XT 16GB, RTX 2070 Super, GTX 1660 Super, RTX 3070 Ti, RX 6700 XT, RTX 5070 Ti, RX 9070 XT, Arc B580,
  RTX 4070 Super.
- **What each of those pages gains (about 180 words before, about 600–690 after):** the card at a glance
  (release, launch price, memory, power draw, recommended power supply, ray tracing), measured frames a
  second in Cyberpunk 2077 and, where available, Red Dead Redemption 2 at 1080p and 1440p with the source
  linked, a short written take, what upscaling the card supports, how it compares with the cards Rockstar
  recommends for GTA V Enhanced and Red Dead Redemption 2, and whether a laptop version exists.
- **Sources:** specifications from Nvidia's compare page, AMD and Intel product pages (RX 5700 XT from
  Wikipedia, its AMD page is gone); release dates and launch prices from Wikipedia; benchmarks from seven
  TechPowerUp reviews (2021–2025), one review per card, never mixed; game requirements from Steam. 13 cards
  have both games; 7 newer cards have Cyberpunk 2077 only (TechPowerUp stopped testing Red Dead Redemption 2).
  Three charts were re-read by hand against the published numbers and matched.
- **Limits to remember:** the benchmark numbers come from different test systems and years, so they must not
  be compared between cards from different reviews; the test settings are only confirmed for two of the
  seven reviews, so no settings are claimed for the others; "no laptop version" means the name was not found
  in the makers' and Wikipedia's lists.
- **How it is built:** `tools/card-notes.json` holds the facts and text per card; `tools/build-card-notes.py`
  is the script that produced it from the research file (kept for reference; the research file itself is not
  in the repo); `tools/generate-card-pages.mjs` turns it into `snippets/pc-card-notes.liquid`; the section
  shows it under the quality levels. To add a card: add it to `card-notes.json`, run the generator, commit.
- **State:** pushed to `dev` and the working branch. Waiting for the owner's word before `main`.

### 27 Nov 2026 — Google traffic is back
- **Owner's Search Console screen (last 24 hours):** 129 clicks, about 11,100 impressions, click rate 1.2%,
  average position 7.3. The day before it was 14 impressions and 0 clicks.
- **Shopify analytics agree:** sessions by hour were 0–3 from 24 Nov 15:00 UTC, started rising at 26 Nov
  10:00 UTC and have run at about 5–18 an hour since. Customers went from 79 to 105 (26 new signups).
- **What changed before the recovery (all on 26 Nov UTC):** search descriptions added (02:56), AdSense code
  added (03:00), Amazon buttons removed from the public page text (about 04:00). Recovery began about six
  hours after the Amazon buttons came off. That fits the "affiliate buttons on template pages" explanation,
  but three changes went live the same morning and Google may also have reversed on its own, so it is the
  likely cause, not a proven one.
- **Rule from now on:** keep "Show Amazon buttons in the page text" OFF. Do not add affiliate or sponsored
  links to the public text of the part pages again. Make one change to the live pages at a time and watch
  Search Console for two or three days after each.
- **The 20 in-depth card pages are still on `dev` only.** Advice given: hold them a few days so the recovery
  can be confirmed stable first, then release.

### Open items
- **Owner:** send the Search Console 24-hour screen again around 30 Nov; if traffic has held, say go for the 20 in-depth card pages.
- Watch Search Console → Performance (24 hours) for impressions returning; expect weeks, not days.
- Owner: check Amazon Associates reports for clicks after a few days (both accounts need 3 sales in 180 days).
- Owner: set up the welcome email automation if not done (it now reaches people straight after signup).
- Owner: Search Console clean-up steps; resubmit the sitemap (55 new pages since 22 Nov).
- Later: budget pages with live prices once the Amazon product API is available to the account.
- Owner to supply the business name and address for the contact information policy.
- Parked: all earlier niche ideas above.
