import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useTranslation } from "../context/LanguageContext";

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  const discount = product.compare_price
    ? Math.round(
        ((product.compare_price - product.price) / product.compare_price) * 100,
      )
    : 0;

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (added) return;
    try {
      await addToCart(product.id, 1, "", "", {
        name: product.name,
        price: product.price,
        image: product.image,
        stock: product.stock,
      });
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch {
      // silent fail
    }
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <Link
        to={`/product/${product.slug || product.id}`}
        className="block relative"
      >
        <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <ShoppingCart className="w-12 h-12" />
            </div>
          )}
          {discount > 0 && (
            <span className="absolute top-2 left-2 bg-[#f85606] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
              -{discount}%
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setWishlisted(!wishlisted);
          }}
          className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${
              wishlisted ? "text-[#f85606] fill-[#f85606]" : "text-gray-500"
            }`}
          />
        </button>
      </Link>

      <div className="p-3">
        <p className="text-[11px] text-gray-400 mb-0.5">
          {Array.isArray(product.category_name)
            ? product.category_name.join(", ")
            : product.category_name || t("productCard.fashion")}
        </p>
        <h3 className="text-sm font-medium text-gray-800 leading-tight truncate mb-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating || 0)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
          {product.review_count > 0 && (
            <span className="text-[10px] text-gray-400">
              ({product.review_count})
            </span>
          )}
        </div>

        <div className="flex items-baseline gap-2 mt-1.5">
          <span className="text-base font-bold text-[#1F3A63]">
            ৳{product.price}
          </span>
          {product.compare_price && (
            <span className="text-xs text-gray-400 line-through">
              ৳{product.compare_price}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={`mt-2 w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-lg transition-colors ${
            added
              ? "bg-green-500 text-white"
              : "bg-[#1F3A63] text-white hover:bg-[#162d4d]"
          }`}
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Added
            </>
          ) : (
            <>
              <ShoppingCart className="w-3.5 h-3.5" />
              {t("productCard.addToCart")}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
