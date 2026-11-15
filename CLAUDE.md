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

### Open items
- Owner decision on direction; he is reviewing Google Trends for ideas.
- Parked: everything above this entry, including the Shopify store "Aysose" on its trial plan.
