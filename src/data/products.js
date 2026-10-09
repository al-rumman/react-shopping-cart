// Mock product data (replace with an API call if needed)

// Builds a self-contained SVG image (emoji on a colored background),
// so the app never depends on an external image server.
const makeImage = (emoji, bg) =>
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <rect width="400" height="300" fill="${bg}"/>
      <text x="200" y="150" font-size="110" text-anchor="middle" dominant-baseline="central">${emoji}</text>
    </svg>`
  );

export const products = [
  { id: 1, title: "Wireless Headphones", category: "Electronics", price: 59.99, image: makeImage("🎧", "#dbeafe") },
  { id: 2, title: "Smart Watch", category: "Electronics", price: 129.0, image: makeImage("⌚", "#e0e7ff") },
  { id: 3, title: "Running Shoes", category: "Fashion", price: 74.5, image: makeImage("👟", "#fee2e2") },
  { id: 4, title: "Denim Jacket", category: "Fashion", price: 89.0, image: makeImage("🧥", "#cffafe") },
  { id: 5, title: "Ceramic Mug Set", category: "Home", price: 24.99, image: makeImage("☕", "#fef3c7") },
  { id: 6, title: "Desk Lamp", category: "Home", price: 34.0, image: makeImage("💡", "#fef9c3") },
  { id: 7, title: "Backpack", category: "Accessories", price: 49.9, image: makeImage("🎒", "#dcfce7") },
  { id: 8, title: "Sunglasses", category: "Accessories", price: 39.5, image: makeImage("🕶️", "#f3e8ff") },
];