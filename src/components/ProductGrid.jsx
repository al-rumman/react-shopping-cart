import { useState } from "react";
import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function ProductGrid() {
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? products : products.filter((p) => p.category === category);

  return (
    <section>
      <div className="filters">
        {categories.map((c) => (
          <button key={c} className={`chip ${c === category ? "active" : ""}`} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
