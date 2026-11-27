# Care U storefront

A standalone Next.js storefront for the Care U account. Because GitHub, Vercel, and erxes 3.0 were not linked when the work started, this build is a review-ready frontend with a local demo catalog and simulated checkout. It is not connected to a live erxes shop.

## What is included

- Homepage with hero, category cards, featured products, value props, story, FAQ, and CTA
- Product catalog with search, category filters, and sorting over 12 sample products and 15 categories
- Product detail pages with gallery and related products
- Cart with quantity controls and delivery threshold logic
- Checkout with Ulaanbaatar delivery / pickup, QPay or cash, eBarimt opt-in
- Test order confirmation with a local demo receipt
- About, contact, FAQ, and blog pages

## Commands

```bash
npm install
npm run dev        # local development
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build      # production build
```

## Test order flow

Add any product to the cart, open `/checkout`, fill in the receiver details, choose a delivery option and payment method, then submit. The order is stored in the browser under `careu-last-order` and the receipt is shown on `/order-confirmed`. No payment is taken and no eBarimt receipt is issued in this standalone build.

## Deployment

The project is deployed to Vercel from this repository. No secrets are required to build the static storefront.

## erxes admin work

Catalog import, QPay, eBarimt, delivery zones, and order statuses must be completed in the erxes dashboard. See `docs/manual-steps.md` for task-by-task admin paths and notes.
