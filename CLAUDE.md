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

### Open items
- Owner decision: stay pure dropship (slow delivery) or hold a small Sydney stock of hero pieces.
- Owner to check CJ Dropshipping for modest pieces with "Ship from: Australia".
- Still open from section 6: business address for the store, traffic truth for aysose.com (Cloudflare Web
  Analytics, Search Console), WooCommerce customer export.
- Paid plan and refund / shipping / terms policies are not done yet.
