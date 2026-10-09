import useCart from "../hooks/useCart.js";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <article className="card">
      <img src={product.image} alt={product.title} loading="lazy" />
      <div className="card-body">
        <span className="category">{product.category}</span>
        <h3>{product.title}</h3>
        <div className="card-footer">
          <strong>${product.price.toFixed(2)}</strong>
          <button className="btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
