import { Link } from "react-router-dom";
import { Flame, ChevronRight } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
import CountdownTimer from "./CountdownTimer";
import HomeProductCard from "./HomeProductCard";

const DealsSection = ({ flashSaleEnd, products }) => {
  const { t } = useTranslation();

  return (
    <section className="py-12 lg:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-[#EF394E]" />
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {t("home.flashSale")}
              </h2>
            </div>
            <CountdownTimer targetDate={flashSaleEnd} />
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#EF394E] hover:underline"
          >
            {t("home.viewAll")} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {products.slice(0, 10).map((p, i) => (
            <HomeProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
