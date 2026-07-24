import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const CategoryCard = ({ cat, index }) => {
  const { t } = useTranslation();
  const displayName = t(`nav.${cat.slug}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link
        to={`/shop?category=${cat.slug}`}
        className="group relative block h-48 rounded-xl overflow-hidden"
      >
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg">{displayName}</h3>
          <p className="text-white/80 text-sm">
            {t("home.startFrom")} {cat.price}
          </p>
          <span className="inline-flex items-center gap-1 text-white text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {t("home.shopNow")} <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const CategorySection = ({ categories }) => {
  const { t } = useTranslation();

  return (
    <section className="py-12 lg:py-16 bg-[#f5f5f5]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-[#EF394E] font-medium">
            {t("home.categoriesLabel")}
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">
            {t("home.shopByCategory")}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
