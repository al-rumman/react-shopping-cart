import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Cart from "./components/Cart.jsx";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main className="container">
        <ProductGrid />
      </main>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
