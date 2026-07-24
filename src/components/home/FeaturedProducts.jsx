import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
import HomeProductCard from "./HomeProductCard";

const FeaturedProducts = ({ products = [] }) => {
  const { t } = useTranslation();
  const displayProducts = products.slice(0, 8).reverse();

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-[#EF394E] font-medium">
              {t("home.trendingNow")}
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">
              {t("home.trendingProducts")}
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[#1F3A63] hover:underline"
          >
            {t("home.viewAll")} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {displayProducts.map((p, i) => (
            <HomeProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
