import { Link } from "react-router-dom";
import {
  Flame,
  ChevronRight,
  Play,
  Apple,
  Smartphone,
  Truck,
} from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
import CountdownTimer from "./CountdownTimer";
import CategorySidebar from "./CategorySidebar";
import HeroSlider from "./HeroSlider";

const HeroSection = ({ flashSaleEnd }) => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div
          className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_230px] gap-3"
          // style={{ minHeight: 380 }}
        >
          <div className="hidden lg:block">
            <CategorySidebar />
          </div>

          <div className="min-h-72 sm:min-h-80 md:min-h-70 lg:min-h-50">
            <HeroSlider />
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-linear-to-br from-[#1F3A63] to-[#493608] rounded-xl p-4 text-white flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400">
                    {t("home.flashSale")}
                  </span>
                </div>
                <p className="text-lg font-extrabold leading-tight">
                  UP TO 70% OFF
                </p>
              </div>
              <div className="mt-2">
                <CountdownTimer targetDate={flashSaleEnd} />
              </div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/80 hover:text-white mt-2 transition-colors"
              >
                {t("home.shopNow")} <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <Link
              to="/shop"
              className="flex items-center gap-3 bg-amber-300 rounded-xl p-4 text-gray-900 flex-1 hover:bg-yellow-300 transition-colors"
            >
              <Truck className="w-7 h-7 flex-shrink-0" />
              <div>
                <p className="text-sm font-extrabold leading-tight">
                  FREE DELIVERY
                </p>
                <p className="text-[11px] text-red-500 font-medium uppercase">
                  On orders over ৳999
                </p>
              </div>
            </Link>

            <div className="bg-black rounded-xl p-4 shadow-sm border border-gray-200 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="w-5 h-5 text-[#1F3A63] flex-shrink-0" />
                <div>
                  <p className="text-sm font-extrabold text-white leading-tight">
                    DOWNLOAD APP
                  </p>
                  <p className="text-[10px] text-white">Extra 10% OFF</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 bg-gray-900 text-white text-[10px] font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                  <Play className="w-3 h-3" /> Google Play
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 bg-gray-900 text-white text-[10px] font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                  <Apple className="w-3 h-3" /> App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
