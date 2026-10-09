import { createContext, useReducer, useEffect, useMemo } from "react";

export const CartContext = createContext(null);

// Reducer keeps all cart transitions in one predictable place
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const exists = state.find((i) => i.id === action.product.id);
      return exists
        ? state.map((i) => (i.id === exists.id ? { ...i, qty: i.qty + 1 } : i))
        : [...state, { ...action.product, qty: 1 }];
    }
    case "INCREASE":
      return state.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i));
    case "DECREASE": // quantity never drops below 1; use REMOVE to delete
      return state.map((i) => (i.id === action.id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i));
    case "REMOVE":
      return state.filter((i) => i.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  // Persist cart across page reloads
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Derived values update in real time whenever items change
  const value = useMemo(
    () => ({
      items,
      totalItems: items.reduce((sum, i) => sum + i.qty, 0),
      totalPrice: items.reduce((sum, i) => sum + i.qty * i.price, 0),
      addToCart: (product) => dispatch({ type: "ADD", product }),
      increase: (id) => dispatch({ type: "INCREASE", id }),
      decrease: (id) => dispatch({ type: "DECREASE", id }),
      removeItem: (id) => dispatch({ type: "REMOVE", id }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
