import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { getProducts } from "../services/productService";
import { homeCategories as categories } from "../services/config";
import { useTranslation } from "../context/LanguageContext";
import HeroSection from "../components/home/HeroSection";
import FeaturesBar from "../components/home/FeaturesBar";
import CategorySection from "../components/home/CategorySection";
import DealsSection from "../components/home/DealsSection";
import NewArrivals from "../components/home/NewArrivals";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NewsletterSection from "../components/home/NewsletterSection";

const Home = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const allProducts = await getProducts();
        setProducts(allProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const [flashSaleEnd] = useState(() =>
    new Date(Date.now() + 86400000 * 2).toISOString(),
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1F3A63] mx-auto"></div>
          <p className="text-sm text-gray-500 mt-4">{t("home.loading")}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-4">
            <X className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {t("home.somethingWentWrong")}
          </h2>
          <p className="text-sm text-gray-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-[#1F3A63] text-white text-sm font-medium rounded-lg hover:bg-[#162d4d] transition-colors"
          >
            {t("home.tryAgain")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeroSection flashSaleEnd={flashSaleEnd} />
      <FeaturesBar />
      <CategorySection categories={categories} />
      <DealsSection flashSaleEnd={flashSaleEnd} products={products} />
      <NewArrivals products={products} />
      <FeaturedProducts products={products} />
      <NewsletterSection />
    </div>
  );
};

export default Home;
