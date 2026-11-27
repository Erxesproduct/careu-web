# Manual steps in erxes admin

These actions happen inside the erxes dashboard and are intentionally not faked in code. No erxes 3.0 instance URL, app token, or client portal ID was supplied for the Care U account, so the website keeps a clearly labelled local catalog and a simulated checkout until the backend is connected.

## [1.1] Import products, categories, and prices

Admin path: **Shop → Products**, **Shop → Categories**, **Shop → Settings → Price rules**.

- Export the real Care U product list (names, categories, images, stock, and prices) and import it into the target erxes shop.
- Create the category tree before importing products so every product lands in the right category.
- Verify each imported product has a price, image, stock count, and published status.
- Configure sale prices or promotional pricing in the price rules screen.
- The local copy used by this website lives in `data/products.json` and `data/categories.json`. It is sample data for review only; it is not a substitute for the erxes import.

## [1.2] Payment setup (QPay)

Admin path: **Settings → Payments → QPay**.

- Add the Care U QPay merchant credentials, callback URL, and enabled bank/card options.
- Confirm the payment success and failure redirect URLs point at the deployed storefront.
- The Facebook page currently lists Pocket app as a payment option. Confirm with the account owner whether QPay, Pocket, or both should be enabled before going live.
- Run a small live test payment and verify the order transitions to paid before enabling it for customers.
- The checkout page offers QPay as the primary method, but no live payment is processed until this admin setup is done.
