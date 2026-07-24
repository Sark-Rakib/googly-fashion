import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { X } from "lucide-react";
import { getProducts } from "../services/productService";
import {
  homeCategories as categories,
  // customerReviews as reviews,
} from "../services/config";
import { useTranslation } from "../context/LanguageContext";
import HeroSection from "../components/home/HeroSection";
import FeaturesBar from "../components/home/FeaturesBar";
import CategorySection from "../components/home/CategorySection";
import DealsSection from "../components/home/DealsSection";
import NewArrivals from "../components/home/NewArrivals";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NewsletterSection from "../components/home/NewsletterSection";

// function TopBrands() {
//   const { t } = useTranslation();
//   const scrollRef = useRef(null);

//   return (
//     <section className="py-12 lg:py-16">
//       <div className="px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8">
//           <p className="text-sm text-[#EF394E] font-medium">
//             {t("home.topBrands")}
//           </p>
//           <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">
//             {t("home.shopFromPremiumBrands")}
//           </h2>
//         </div>
//         <div
//           ref={scrollRef}
//           className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide group"
//           onMouseEnter={() => {
//             if (scrollRef.current)
//               scrollRef.current.style.animationPlayState = "paused";
//           }}
//           onMouseLeave={() => {
//             if (scrollRef.current)
//               scrollRef.current.style.animationPlayState = "running";
//           }}
//         >
//           <motion.div
//             className="flex gap-8"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           >
//             {[...brands, ...brands].map((brand, i) => (
//               <div
//                 key={i}
//                 className="flex-shrink-0 w-36 h-20 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:shadow-md transition-shadow"
//               >
//                 <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
//                   {brand}
//                 </span>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

const Home = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [reviewIndex, setReviewIndex] = useState(0);

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
      {/* <TopBrands /> */}
      <NewsletterSection />

      {/* <section className="py-12 lg:py-16 bg-[#f5f5f5]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-[#EF394E] font-medium">
              {t("home.testimonials")}
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">
              {t("home.whatCustomersSay")}
            </h2>
          </div>
          <div className="relative ">
            <div className="overflow-hidden">
              <motion.div
                key={reviewIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-sm text-center"
              >
                <Quote className="w-10 h-10 text-[#1F3A63]/20 mx-auto mb-4" />
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < reviews[reviewIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  &ldquo;{t(`customerReviews.review${reviewIndex + 1}`)}&rdquo;
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">
                    {reviews[reviewIndex].name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t("home.verifiedBuyer")}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === reviewIndex ? "bg-[#1F3A63]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-4">
              <button
                onClick={() =>
                  setReviewIndex((i) => (i === 0 ? reviews.length - 1 : i - 1))
                }
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4">
              <button
                onClick={() =>
                  setReviewIndex((i) => (i === reviews.length - 1 ? 0 : i + 1))
                }
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
