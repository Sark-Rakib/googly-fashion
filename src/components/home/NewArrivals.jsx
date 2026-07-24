import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
import HomeProductCard from "./HomeProductCard";

const tabs = ["all", "men", "women", "kids", "beauty"];

const categoryMap = {
  men: ["T-Shirts", "Jeans", "Jackets", "Shoes"],
  women: ["Dresses", "Accessories"],
  kids: ["T-Shirts", "Shoes"],
  beauty: ["Accessories"],
};

const NewArrivals = ({ products = [] }) => {
  const { t } = useTranslation();
  const [tab, setTab] = useState("all");

  const tabLabels = {
    all: t("home.tabAll"),
    men: t("home.tabMen"),
    women: t("home.tabWomen"),
    kids: t("home.tabKids"),
    beauty: t("home.tabBeauty"),
  };

  const filtered =
    tab === "all"
      ? products.slice(0, 8)
      : products
          .filter((p) => {
            const cats = categoryMap[tab];
            if (!cats) return true;
            const pCats = Array.isArray(p.category_name) ? p.category_name : [p.category_name];
            return pCats.some((c) => cats.includes(c));
          })
          .slice(0, 8);

  return (
    <section className="py-12 lg:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-[#EF394E] font-medium">
              {t("home.newArrivalsLabel")}
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">
              {t("home.latestProducts")}
            </h2>
          </div>

          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg overflow-x-auto">
            {tabs.map((value) => (
              <button
                key={value}
                onClick={() => setTab(value)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  tab === value
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tabLabels[value]}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {filtered.map((p, i) => (
                <HomeProductCard key={p._id || p.id} product={p} index={i} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="shop?category=new-arrivals"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t("home.viewAllProducts")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No new products available
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
