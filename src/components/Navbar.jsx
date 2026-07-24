import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Package,
  ChevronDown,
  Flame,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useTranslation } from "../context/LanguageContext";
import { IoLocation } from "react-icons/io5";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All Categories");
  const [selectedCatSlug, setSelectedCatSlug] = useState("");
  const [catDropdown, setCatDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      const params = new URLSearchParams();
      params.set("search", search.trim());
      if (selectedCatSlug) params.set("category", selectedCatSlug);
      navigate(`/shop?${params.toString()}`);
      setSearch("");
    }
  };

  const selectCategory = (name, slug) => {
    setSelectedCat(name);
    setSelectedCatSlug(slug);
    setCatDropdown(false);
  };

  const categories = [
    { name: t("nav.allCategories"), slug: "" },
    { name: t("nav.home"), slug: "/" },
    { name: t("nav.men"), slug: "men" },
    { name: t("nav.women"), slug: "women" },
    { name: t("nav.kids"), slug: "kids" },
    { name: t("nav.shoes"), slug: "shoes" },
    { name: t("nav.watches"), slug: "watches" },
    { name: t("nav.beauty"), slug: "beauty" },
    { name: t("nav.accessories"), slug: "accessories" },
    { name: t("nav.newArrivals"), slug: "new-arrivals" },
  ];

  return (
    <>
      <TopNavbar></TopNavbar>
      <header className="sticky top-0 z-50 bg-[#071827] shadow-sm">
        <div className="bg-[#071827]">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
              <Link to="/" className="flex-shrink-0">
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-xl text-red-500 lg:text-2xl font-bold tracking-tight">
                      GOOGLY
                    </span>
                    <span className="text-xl text-white lg:text-2xl font-light ml-1">
                      FASHION
                    </span>
                  </div>
                  <span className="text-[10px] lg:text-[11px] tracking-wider text-white mt-[-2px]">
                    {t("nav.styleThatDefinesYou")}
                  </span>
                </div>
              </Link>

              <form onSubmit={handleSearch} className="hidden md:flex flex-1">
                <div className="flex w-full border border-gray-300 rounded-[4px] overflow-hidden focus-within:border-[#1F3A63] focus-within:ring-1 focus-within:ring-[#1F3A63] transition-all">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setCatDropdown(!catDropdown)}
                      className="flex items-center gap-1 h-full px-3 text-xs text-gray-600 bg-gray-50 hover:bg-gray-100 border-r border-gray-300 whitespace-nowrap min-w-[110px]"
                    >
                      {selectedCat}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {catDropdown && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setCatDropdown(false)}
                        />
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-[4px] shadow-lg z-20 w-44 py-1">
                          {categories.map((cat) => (
                            <button
                              key={cat.slug}
                              type="button"
                              onClick={() => selectCategory(cat.name, cat.slug)}
                              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                                selectedCat === cat.name
                                  ? "text-[#1F3A63] font-medium"
                                  : "text-gray-700"
                              }`}
                            >
                              {cat.name}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={t("nav.searchPlaceholder")}
                    className="flex-1 px-3 py-2.5 text-sm text-gray-700 bg-white placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 flex items-center justify-center gap-1 bg-yellow-200"
                  >
                    <Search className="w-4 h-4" />
                    <p className="font-extralight">{t("nav.searchButton")}</p>
                  </button>
                </div>
              </form>

              <div className="flex items-center gap-4 lg:gap-5">
                <div className="flex items-center text-white">
                  <div>
                    <IoLocation className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-[10px]">
                    {t("nav.deliverTo")} <br /> {t("nav.dhaka")}
                  </h1>
                </div>

                {user ? (
                  <Link
                    to="/dashboard"
                    className="hidden sm:flex flex-col items-center group"
                  >
                    <User className="w-5 h-5 text-white group-hover:text-[#1F3A63]" />
                    <span className="text-[10px] text-white group-hover:text-[#1F3A63] mt-0.5">
                      {user.name.split(" ")[0]}
                    </span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="hidden sm:flex flex-col items-center group"
                  >
                    <User className="w-5 h-5 text-white group-hover:text-gray-300" />
                    <span className="text-[10px] text-white group-hover:text-gray-300 mt-0.5">
                      {t("nav.signIn")}
                    </span>
                  </Link>
                )}

                {(!user || user.role === "customer") && (
                  <Link
                    to={user ? "/dashboard/orders" : "/login"}
                    className="hidden md:flex flex-col items-center group"
                  >
                    <Package className="w-5 h-5 text-white group-hover:text-gray-300" />
                    <span className="text-[10px] text-white group-hover:text-gray-300 mt-0.5">
                      {t("nav.orders")}
                    </span>
                  </Link>
                )}

                <Link
                  to="/cart"
                  className="flex flex-col items-center group relative"
                >
                  <ShoppingCart className="w-5 h-5 text-white group-hover:text-gray-300" />
                  <span className="text-[10px] text-white group-hover:text-gray-300 mt-0.5">
                    {t("nav.cart")}
                  </span>
                  {cartCount > 0 && (
                    <span
                      className="absolute -top-1 -right-2 text-[10px] font-bold text-white rounded-full h-4 w-4 flex items-center justify-center"
                      style={{ backgroundColor: "#EF394E" }}
                    >
                      {cartCount}
                    </span>
                  )}
                </Link>

                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="lg:hidden text-white hover:text-gray-300"
                >
                  {mobileMenu ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            <form onSubmit={handleSearch} className="md:hidden pb-3">
              <div className="flex border border-gray-300 rounded-[4px] overflow-hidden focus-within:border-[#1F3A63] focus-within:ring-1 focus-within:ring-[#1F3A63] transition-all">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t("nav.searchPlaceholder")}
                  className="flex-1 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-3 flex items-center gap-1 justify-center bg-yellow-200"
                >
                  <p className="font-extralight">{t("nav.searchButton")}</p>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden lg:block bg-[#091f32]">
          <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/shop"
                className="-ml-4 px-4 py-2.5 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {t("nav.allCategories")}
              </Link>
              <Link
                to="/"
                className="px-4 py-2.5 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 border-l border-white/10"
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/shop?category=men"
                className="px-4 py-2.5 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 border-l border-white/10"
              >
                {t("nav.men")}
              </Link>
              <Link
                to="/shop?category=women"
                className="px-4 py-2.5 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 border-l border-white/10"
              >
                {t("nav.women")}
              </Link>
              <Link
                to="/shop?category=kids"
                className="px-4 py-2.5 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 border-l border-white/10"
              >
                {t("nav.kids")}
              </Link>
              <Link
                to="/shop?category=shoes"
                className="px-4 py-2.5 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 border-l border-white/10"
              >
                {t("nav.shoes")}
              </Link>
              <Link
                to="/shop?category=watches"
                className="px-4 py-2.5 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 border-l border-white/10"
              >
                {t("nav.watches")}
              </Link>
              <Link
                to="/shop?category=beauty"
                className="px-4 py-2.5 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 border-l border-white/10"
              >
                {t("nav.beauty")}
              </Link>
              <Link
                to="/shop?category=accessories"
                className="px-4 py-2.5 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 border-l border-white/10"
              >
                {t("nav.accessories")}
              </Link>
               <Link
                to="/new-arrivals"
                className="px-4 py-2.5 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 border-l border-white/10"
              >
                {t("nav.newArrivals")}
              </Link>
            </div>
            <Link
              to="/shop?category=deals"
              className="flex items-center bg-red-500 p-1 rounded text-white"
            >
              <Flame className="w-4 h-4" />
              {t("nav.deals")}
            </Link>
          </div>
        </div>

        {mobileMenu && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              <Link
                to="/shop"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] hover:bg-gray-50 rounded"
                onClick={() => setMobileMenu(false)}
              >
                {t("nav.allCategories")}
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] hover:bg-gray-50 rounded"
                onClick={() => setMobileMenu(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/shop?category=men"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] hover:bg-gray-50 rounded"
                onClick={() => setMobileMenu(false)}
              >
                {t("nav.men")}
              </Link>
              <Link
                to="/shop?category=women"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] hover:bg-gray-50 rounded"
                onClick={() => setMobileMenu(false)}
              >
                {t("nav.women")}
              </Link>
              <Link
                to="/shop?category=kids"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] hover:bg-gray-50 rounded"
                onClick={() => setMobileMenu(false)}
              >
                {t("nav.kids")}
              </Link>
              <Link
                to="/shop?category=shoes"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] hover:bg-gray-50 rounded"
                onClick={() => setMobileMenu(false)}
              >
                {t("nav.shoes")}
              </Link>
              <Link
                to="/shop?category=watches"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] hover:bg-gray-50 rounded"
                onClick={() => setMobileMenu(false)}
              >
                {t("nav.watches")}
              </Link>
              <Link
                to="/shop?category=beauty"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] hover:bg-gray-50 rounded"
                onClick={() => setMobileMenu(false)}
              >
                {t("nav.beauty")}
              </Link>
              <Link
                to="/shop?category=accessories"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] hover:bg-gray-50 rounded"
                onClick={() => setMobileMenu(false)}
              >
                {t("nav.accessories")}
              </Link>
               <Link
                to="/new-arrivals"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] hover:bg-gray-50 rounded"
                onClick={() => setMobileMenu(false)}
              >
                {t("nav.newArrivals")}
              </Link>
              <div className="border-t border-gray-100 pt-2 mt-2">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1F3A63] rounded"
                      onClick={() => setMobileMenu(false)}
                    >
                      {t("nav.myAccount")}
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setMobileMenu(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-500 hover:text-gray-700 rounded"
                    >
                      {t("nav.logout")}
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-sm font-medium text-[#1F3A63] rounded"
                    onClick={() => setMobileMenu(false)}
                  >
                    {t("nav.signInRegister")}
                  </Link>
                )}
                {(!user || user.role === "customer") && (
                  <Link
                    to={user ? "/dashboard/orders" : "/login"}
                    className="block px-3 py-2 text-sm text-gray-700 rounded"
                    onClick={() => setMobileMenu(false)}
                  >
                    {t("nav.returnsOrders")}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
