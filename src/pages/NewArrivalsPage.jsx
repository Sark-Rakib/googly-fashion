import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getProducts } from "../services/productService";
import { useTranslation } from "../context/LanguageContext";
import HomeProductCard from "../components/home/HomeProductCard";

const tabs = ["all", "men", "women", "kids", "beauty"];

const categoryMap = {
  men: ["T-Shirts", "Jeans", "Jackets", "Shoes", "Shirts", "Pants", "Hoodies"],
  women: ["Dresses", "Accessories", "Skirts", "Tops", "Handbags", "Jewelry"],
  kids: ["Kids T-Shirts", "Kids Shoes", "Kids Dresses", "Kids Jackets"],
  beauty: ["Beauty", "Cosmetics", "Makeup"],
};

const tabLabelsMap = {
  all: "home.tabAll",
  men: "home.tabMen",
  women: "home.tabWomen",
  kids: "home.tabKids",
  beauty: "home.tabBeauty",
};

const NewArrivalsPage = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("all");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data || []);
      } catch (error) {
        console.error(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Last 15 days filter
  const recentProducts = products
    .filter((product) => {
      if (!product.createdAt) return false;

      const createdDate = new Date(product.createdAt);
      const today = new Date();

      const diffDays = (today - createdDate) / (1000 * 60 * 60 * 24);

      return diffDays >= 0 && diffDays <= 15;
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Category wise filter
  const filteredProducts =
    tab === "all"
      ? recentProducts
      : recentProducts.filter((product) => {
          const categories = categoryMap[tab];

          return categories?.some((c) => {
            const pCats = Array.isArray(product.category_name) ? product.category_name : [product.category_name];
            return pCats.includes(c);
          });
        });

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63]">
              Home
            </Link>

            <ChevronRight className="w-3.5 h-3.5" />

            <span className="text-gray-900 font-medium">
              {t("nav.newArrivals")}
            </span>
          </div>
        </div>
      </div>

      <section className="py-6 lg:py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className=" mb-8">
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg w-max">
              {tabs.map((value) => (
                <button
                  key={value}
                  onClick={() => setTab(value)}
                  className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition ${
                    tab === value
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {t(tabLabelsMap[value])}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-80 bg-gray-200 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No products found
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-4">
                {filteredProducts.length} products found
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                {filteredProducts.map((product, index) => (
                  <HomeProductCard
                    key={product._id || `${product.id}-${index}`}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewArrivalsPage;
