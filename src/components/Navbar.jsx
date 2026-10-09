import useCart from "../hooks/useCart.js";

export default function Navbar({ onCartClick }) {
  const { totalItems } = useCart();
  return (
    <header className="navbar">
      <h1 className="logo">ShopEasy</h1>
      <button className="cart-btn" onClick={onCartClick} aria-label="Open cart">
        🛒 Cart
        {totalItems > 0 && <span className="badge">{totalItems}</span>}
      </button>
    </header>
  );
}
