import { useEffect } from "react";
import useCart from "../hooks/useCart.js";
import CartItem from "./CartItem.jsx";

export default function Cart({ open, onClose }) {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  // Close drawer with Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      <div className={`overlay ${open ? "show" : ""}`} onClick={onClose} />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h2>Your Cart</h2>
          <button className="close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((i) => <CartItem key={i.id} item={i} />)}
            </ul>
            <div className="summary">
              <p><span>Total items</span><strong>{totalItems}</strong></p>
              <p><span>Total price</span><strong>${totalPrice.toFixed(2)}</strong></p>
              <button className="btn full" onClick={() => { alert("Order placed!"); clearCart(); onClose(); }}>Checkout</button>
              <button className="link" onClick={clearCart}>Clear cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
