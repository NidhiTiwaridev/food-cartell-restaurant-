# Food Cartell — MVC Restaurant Website

A React + Vite restaurant storefront and separate admin dashboard, organized with Models, Controllers, Views, reusable Components, Routes, Services and utility modules.

## Run locally

1. Extract the ZIP and open this folder in VS Code.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the local URL printed by Vite.
5. Create a production build with `npm run build`.

## Pages

- Customer storefront: Home, Menu, Offers, Our Story, Reservations, Contact and Profile.
- Admin: Dashboard, Analytics, Orders, Order Details, Customers, Reviews, Foods, Food Detail, Calendar, Messages, Wallet and Settings (see admin navigation).

## Images and branding

Food image assets and the Food Cartell logo are included in `public/images`. The menu uses local image paths so the food imagery does not depend on third-party image hosts. Replace the demo food photos with your own licensed restaurant photography when available.

## Notes

This is a frontend starter. Reservation submission and order/payment data are demo/local only; connect a backend and payment provider before accepting real bookings or payments. Update the restaurant phone, address, hours and WhatsApp number in `src/models/RestaurantModel.js` before publishing.

For Vercel, use the Vite preset, build command `npm run build`, and output directory `dist`.


## Latest UI polish
- Branded opening loader with a short progress animation.
- Menu organized into five visual collections: Breakfast, Brunch, Lunch & Dinner, Tea & Coffee, and Desserts. Selecting a collection reveals its subcategories instead of showing every category at once.
- Responsive menu cards, dish detail modal, reservation form, header, and admin layout for smaller screens.
- Refined ivory, oxblood, and champagne palette in light mode, with a matching dark theme.
- Food photos and logo are bundled in `public/images`, so they do not depend on remote image URLs.
