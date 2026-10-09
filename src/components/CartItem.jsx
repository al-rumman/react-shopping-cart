import useCart from "../hooks/useCart.js";

export default function CartItem({ item }) {
  const { increase, decrease, removeItem } = useCart();
  return (
    <li className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="info">
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)}</p>
        <div className="qty">
          <button onClick={() => decrease(item.id)} disabled={item.qty === 1} aria-label="Decrease quantity">−</button>
          <span>{item.qty}</span>
          <button onClick={() => increase(item.id)} aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div className="right">
        <strong>${(item.price * item.qty).toFixed(2)}</strong>
        <button className="remove" onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </li>
  );
}
