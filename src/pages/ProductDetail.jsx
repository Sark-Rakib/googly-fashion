import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Star,
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useTranslation } from "../context/LanguageContext";
import ProductCard from "../components/ProductCard";
import {
  getProductById,
  getProductBySlug,
  getRelatedProducts,
} from "../services/productService";

const generateGallery = (image) => {
  if (!image) return [];
  const base = image.replace(/[?&]w=\d+/, "");
  return [
    { id: 1, url: `${base}?w=700&h=900&fit=crop`, label: "Front" },
    { id: 2, url: `${base}?w=700&h=900&fit=crop&crop=top`, label: "Top" },
    {
      id: 3,
      url: `${base}?w=700&h=900&fit=crop&crop=bottom&h=900`,
      label: "Side",
    },
    { id: 4, url: `${base}?w=700&h=900&fit=crop&crop=left`, label: "Detail" },
  ];
};

const Skeleton = () => (
  <div className="animate-pulse">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className=" bg-gray-200 rounded-xl" />
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/4" />
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-6 bg-gray-200 rounded w-1/3" />
        <div className="h-20 bg-gray-200 rounded" />
        <div className="h-10 bg-gray-200 rounded w-1/2" />
        <div className="h-12 bg-gray-200 rounded" />
      </div>
    </div>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      setSelectedSize("");
      setSelectedColor("");
      setQuantity(1);
      setActiveImg(0);

      try {
        let product = null;
        try {
          product = await getProductBySlug(id);
        } catch {
          // slug not found, try by ID
        }
        if (!product) {
          try {
            product = await getProductById(id);
          } catch {
            // not found by id either
          }
        }
        if (product) {
          const related = await getRelatedProducts(product, 8);
          setData({ product, reviews: [], related });
        }
      } catch {
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <Skeleton />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-500">{t("product.productNotFound")}</p>
        <Link to="/shop" className="text-gray-900 underline mt-2 inline-block">
          {t("product.backToShop")}
        </Link>
      </div>
    );
  }

  const { product, reviews, related } = data;
  const sizes = product.sizes
    ? typeof product.sizes === "string"
      ? JSON.parse(product.sizes)
      : product.sizes
    : [];
  const colors = product.colors
    ? typeof product.colors === "string"
      ? JSON.parse(product.colors)
      : product.colors
    : [];
  const discount = product.compare_price
    ? Math.round(
        ((product.compare_price - product.price) / product.compare_price) * 100,
      )
    : 0;
  const images = generateGallery(product.image);

  const handleAddToCart = async () => {
    try {
      await addToCart(product.id, quantity, selectedSize, selectedColor, {
        name: product.name,
        price: product.price,
        image: product.image,
        stock: product.stock,
      });
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleOrderNow = () => {
    navigate("/checkout", {
      state: {
        directItem: {
          product_id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          size: selectedSize,
          color: selectedColor,
        },
      },
    });
  };

  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <nav className="text-xs sm:text-sm text-gray-400 mb-6 flex items-center gap-1.5">
          <Link to="/" className="hover:text-gray-700 transition-colors">
            {t("product.home")}
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/shop" className="hover:text-gray-700 transition-colors">
            {t("product.shop")}
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-700 font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 p-4 sm:p-6 lg:p-10">
            <div className="space-y-3">
              <div className="relative group overflow-hidden rounded-xl bg-gray-50">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={images[activeImg]?.url || product.image}
                    alt={product.name}
                    className="w-full h-full md:h-120 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {discount > 0 && (
                  <span className="absolute top-3 left-3 bg-[#EF394E] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                    -{discount}%
                  </span>
                )}
                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-sm"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      wishlisted
                        ? "text-[#EF394E] fill-[#EF394E]"
                        : "text-gray-500"
                    }`}
                  />
                </button>
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImg((i) =>
                          i === 0 ? images.length - 1 : i - 1,
                        )
                      }
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImg((i) =>
                          i === images.length - 1 ? 0 : i + 1,
                        )
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {images.map((img, i) => (
                    <button
                      key={img.id}
                      onClick={() => setActiveImg(i)}
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        i === activeImg
                          ? "border-[#1F3A63] shadow-sm"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={`${product.name} ${t("product." + img.label.toLowerCase())}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <p className="text-xs sm:text-sm text-[#EF394E] font-semibold uppercase tracking-widest">
                {Array.isArray(product.category_name)
                  ? product.category_name.join(", ")
                  : product.category_name || t("product.fashion")}
              </p>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-1.5 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating || 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-500">
                  {product.rating || 0} ({product.review_count || 0}{" "}
                  {t("product.reviews")})
                </span>
              </div>

              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-2xl sm:text-3xl font-bold text-[#1F3A63]">
                  ৳{product.price}
                </span>
                {product.compare_price && (
                  <span className="text-base sm:text-lg text-gray-400 line-through">
                    ৳{product.compare_price}
                  </span>
                )}
                {discount > 0 && (
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                    {t("product.savePercent", { percent: discount })}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {product.stock !== undefined && (
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      product.stock > 0 ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                  <p
                    className={`text-sm ${
                      product.stock > 0 ? "text-green-700" : "text-red-600"
                    }`}
                  >
                    {product.stock > 0
                      ? t("product.inStockAvailable", { count: product.stock })
                      : t("product.outOfStock")}
                  </p>
                </div>
              )}

              <hr className="my-5 border-gray-100" />

              {sizes.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2.5">
                    {t("product.size")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[44px] px-4 py-2.5 border rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedSize === size
                            ? "border-[#1F3A63] bg-[#1F3A63] text-white shadow-sm"
                            : "border-gray-200 text-gray-700 hover:border-gray-400 bg-white"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {colors.length > 0 && (
                <div className="mt-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2.5">
                    {t("product.color")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2.5 border rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedColor === color
                            ? "border-[#1F3A63] bg-[#1F3A63] text-white shadow-sm"
                            : "border-gray-200 text-gray-700 hover:border-gray-400 bg-white"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2.5">
                  {t("product.quantity")}
                </h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors bg-white"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="text-lg font-semibold w-8 text-center text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() =>
                      setQuantity(Math.min(product.stock || 99, quantity + 1))
                    }
                    className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors bg-white"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1F3A63] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#162d4d] transition-colors disabled:opacity-50 shadow-sm"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {added ? t("product.addedToCart") : t("product.addToCart")}
                </button>
                <button
                  onClick={handleOrderNow}
                  disabled={product.stock === 0}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#EF394E] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#d6303f] transition-colors disabled:opacity-50 shadow-sm"
                >
                  {t("product.buyNow")}
                </button>
              </div>

              {!user && (
                <p className="mt-4 text-sm text-gray-500 text-center sm:text-left">
                  <Link
                    to="/login"
                    className="text-[#1F3A63] font-medium underline hover:text-[#162d4d]"
                  >
                    {t("product.signIn")}
                  </Link>{" "}
                  {t("product.signInToSave")}
                </p>
              )}
            </div>
          </div>
        </div>

        {reviews.length > 0 && (
          <section className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
              {t("product.customerReviews")} ({reviews.length})
            </h2>
            <div className="grid gap-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="border border-gray-100 rounded-xl p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">
                      {review.user_name}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-8 pb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
              {t("product.similarProducts")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {related.map((p, i) => (
                <ProductCard key={p.id || i} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
