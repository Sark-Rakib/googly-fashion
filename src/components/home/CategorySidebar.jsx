import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const categories = [
  { label: "Men Fashion", slug: "men", icon: "👔" },
  { label: "Women Fashion", slug: "women", icon: "👗" },
  { label: "Kids Fashion", slug: "kids", icon: "👶" },
  { label: "Footwear", slug: "footwear", icon: "👟" },
  { label: "Bags & Wallets", slug: "bags-wallets", icon: "👝" },
  { label: "Watches", slug: "watches", icon: "⌚" },
  { label: "Beauty & Care", slug: "beauty-care", icon: "✨" },
  { label: "Accessories", slug: "accessories", icon: "💎" },
  { label: "Sunglasses", slug: "sunglasses", icon: "👓" },
  { label: "Perfumes", slug: "perfumes", icon: "🌸" },
  { label: "Sportswear", slug: "sportswear", icon: "🏆" },
  { label: "View All Categories", slug: "", icon: "📋" },
];

const CategorySidebar = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full">
      <div className="py-1">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            to={`/shop?category=${cat.slug}`}
            className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-600 hover:text-[#EF394E] hover:bg-red-50/50 transition-colors duration-150 group"
          >
            <span className="text-base">{cat.icon}</span>
            <span className="flex-1 truncate font-medium">{cat.label}</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#EF394E] transition-colors duration-150 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
