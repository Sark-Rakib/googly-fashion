import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, Eye, Check } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
import { useCart } from "../../context/CartContext";

const HomeProductCard = ({ product, index = 0 }) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const discount = product.compare_price
    ? Math.round(
        ((product.compare_price - product.price) / product.compare_price) * 100,
      )
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <Link
        to={`/product/${product.slug || product.id}`}
        className="block relative"
      >
        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <ShoppingCart className="w-10 h-10" />
            </div>
          )}
          {discount > 0 && (
            <span className="absolute top-2 left-2 bg-[#EF394E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
              -{discount}%
            </span>
          )}
          <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
            <Eye className="w-3.5 h-3.5 text-gray-600" />
          </button>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setWishlisted(!wishlisted);
          }}
          className="absolute bottom-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-3.5 h-3.5 ${wishlisted ? "text-[#EF394E] fill-[#EF394E]" : "text-gray-500"}`}
          />
        </button>
      </Link>
      <div className="p-3">
        <Link to={`/product/${product.slug}`}>
          <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">
            {Array.isArray(product.category_name)
              ? product.category_name.join(", ")
              : product.category_name || t("productCard.fashion")}
          </p>
          <h3 className="text-xs font-medium text-gray-800 leading-tight line-clamp-2 min-h-[2rem]">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${i < Math.floor(product.rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
            />
          ))}
          {product.review_count > 0 && (
            <span className="text-[9px] text-gray-400 ml-0.5">
              ({product.review_count})
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-1.5 mt-1.5">
          <span className="text-sm font-bold text-[#1F3A63]">
            ৳{product.price}
          </span>
          {product.compare_price && (
            <span className="text-[10px] text-gray-400 line-through">
              ৳{product.compare_price}
            </span>
          )}
        </div>
        <button
          onClick={async (e) => {
            e.preventDefault();
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
          }}
          className={`mt-2 w-full flex items-center justify-center gap-1 py-1.5 text-[11px] font-medium rounded-lg transition-colors ${
            added
              ? "bg-green-500 text-white"
              : "text-white bg-[#1F3A63] hover:bg-[#162d4d]"
          }`}
        >
          {added ? (
            <>
              <Check className="w-3 h-3" />
              Added
            </>
          ) : (
            <>
              <ShoppingCart className="w-3 h-3" />
              {t("productCard.addToCart")}
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default HomeProductCard;
