import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);
const CART_KEY = "cart";

const loadLocal = () => {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const { user, token, API } = useAuth();
  const [cart, setCart] = useState(loadLocal);
  const [cartCount, setCartCount] = useState(() =>
    loadLocal().reduce((s, i) => s + (i.quantity || 0), 0)
  );

  const saveLocal = (items) => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    setCart(items);
    setCartCount(items.reduce((s, i) => s + (i.quantity || 0), 0));
  };

  useEffect(() => {
    if (token) fetchCart();
  }, [token]);

  const fetchCart = async () => {
    if (!token) return;
    try {
      const { data } = await axios.get(`${API}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.length > 0) saveLocal(data);
    } catch {
      // keep local cart
    }
  };

  const addToCart = async (product_id, quantity = 1, size = "", color = "", productInfo = null) => {
    if (token) {
      try {
        const { data } = await axios.post(
          `${API}/cart`,
          {
            product_id: String(product_id),
            quantity,
            size,
            color,
            name: productInfo?.name || "",
            price: productInfo?.price || 0,
            image: productInfo?.image || "",
            stock: productInfo?.stock || 0,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        saveLocal(data);
        return;
      } catch {
        // fall through to local
      }
    }

    const existing = cart.findIndex(
      (i) => i.product_id === product_id && i.size === size && i.color === color
    );
    let newCart;
    if (existing >= 0) {
      newCart = cart.map((item, idx) =>
        idx === existing ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      newCart = [
        ...cart,
        {
          id: Date.now(),
          product_id,
          quantity,
          size,
          color,
          name: productInfo?.name || "",
          price: productInfo?.price || 0,
          image: productInfo?.image || "",
          stock: productInfo?.stock || 0,
        },
      ];
    }
    saveLocal(newCart);
  };

  const updateQuantity = async (id, quantity) => {
    if (token) {
      try {
        const { data } = await axios.put(
          `${API}/cart/${id}`,
          { quantity },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        saveLocal(data);
        return;
      } catch {
        // fall through
      }
    }
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    saveLocal(newCart);
  };

  const removeItem = async (id) => {
    if (token) {
      try {
        const { data } = await axios.delete(`${API}/cart/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        saveLocal(data);
        return;
      } catch {
        // fall through
      }
    }
    const newCart = cart.filter((item) => item.id !== id);
    saveLocal(newCart);
  };

  const clearCart = async () => {
    if (token) {
      try {
        await axios.delete(`${API}/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch {
        // ignore
      }
    }
    localStorage.removeItem(CART_KEY);
    setCart([]);
    setCartCount(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, fetchCart, addToCart, updateQuantity, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
