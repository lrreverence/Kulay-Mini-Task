# React Native Cart App

A simple React Native shopping cart application built with Expo and Tailwind CSS.

## Features

- **Product Catalog**: Browse through 6 static products with descriptions and prices
- **Add to Cart**: Add products to your shopping cart
- **Cart Management**: View cart items, adjust quantities, and remove items
- **Real-time Updates**: Cart count and total update in real-time
- **Voucher System**: Apply "discount10" code for 10% discount
- **Responsive Design**: Built with Tailwind CSS for React Native

## React Hooks Used

- `useState`: For managing cart state and UI state
- `useContext`: For global cart state management
- `useMemo`: For optimizing cart calculations
- `useEffect`: Available for future enhancements

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your preferred platform:
```bash
npm run ios     # iOS Simulator
npm run android # Android Emulator
npm run web     # Web Browser
```

## Project Structure

```
src/
├── components/
│   ├── ProductCard.js    # Individual product display
│   ├── ProductList.js    # Product catalog
│   └── Cart.js          # Shopping cart interface
├── context/
│   └── CartContext.js   # Global cart state management
└── data/
    └── products.js      # Static product data
```

## Usage

1. **Browse Products**: Switch to the "Products" tab to see available items
2. **Add to Cart**: Tap "Add to Cart" on any product
3. **Manage Cart**: Switch to the "Cart" tab to view and manage your items
4. **Apply Discount**: Enter "discount10" in the voucher field for 10% off
5. **Adjust Quantities**: Use +/- buttons to change item quantities
6. **Remove Items**: Tap "Remove" to delete items from cart

## Technologies

- React Native
- Expo
- Tailwind CSS (NativeWind)
- React Context API
- React Hooks
