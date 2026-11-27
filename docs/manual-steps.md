# Manual steps in erxes admin

These actions happen inside the erxes dashboard and are intentionally not faked in code. No erxes 3.0 instance URL, app token, or client portal ID was supplied for the Care U account, so the website keeps a clearly labelled local catalog and a simulated checkout until the backend is connected.

## [1.1] Import products, categories, and prices

Admin path: **Shop → Products**, **Shop → Categories**, **Shop → Settings → Price rules**.

- Export the real Care U product list (names, categories, images, stock, and prices) and import it into the target erxes shop.
- Create the category tree before importing products so every product lands in the right category.
- Verify each imported product has a price, image, stock count, and published status.
- Configure sale prices or promotional pricing in the price rules screen.
- The local copy used by this website lives in `data/products.json` and `data/categories.json`. It is sample data for review only; it is not a substitute for the erxes import.
