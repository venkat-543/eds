# E-commerce storefront authoring guide

Branch: ecommerce-storefront

## Reusable blocks
- category-strip: category links such as Mobiles, Laptops, TVs, Home Appliances.
- offer-banner: promotional hero/offer section.
- product-card: reusable product presentation with image, title, current price, old price and PDP link.
- product-carousel: horizontal product collection.
- product-grid: responsive PLP product grid.
- product-detail: PDP layout with image, pricing and specification content.

## Suggested pages
- /: Home
- /mobiles: Mobile PLP
- /laptops: Laptop PLP
- /home-appliances: Home Appliances PLP
- /mobiles/iphone-17-pro: Mobile PDP
- /laptops/macbook-air-m4: Laptop PDP
- /home-appliances/lg-55-oled: Appliance PDP

## Home authoring
Use only authorable blocks. Recommended order:
1. Hero / offer-banner
2. category-strip
3. product-carousel - Trending Mobiles
4. product-carousel - Latest Laptops
5. offer-banner - Home Appliance Offers
6. product-carousel - Best Sellers
7. product-carousel - Deals of the Week

Each product card should contain an authored link to its PDP. Each carousel/grid heading can contain an authored "View more" link to its category PLP.

## PLP authoring
Use a heading followed by product-card rows inside product-grid. Every card links directly to its PDP.

## PDP authoring
Use product-detail with authored image, product title, pricing, rating, purchase CTA, highlights, and specification rows. No runtime product API is required.
