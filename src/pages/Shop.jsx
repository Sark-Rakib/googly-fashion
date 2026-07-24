import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";
import {
  shopCategories as categoryList,
  sortOptions,
  quickPrices,
} from "../services/config";
import { useTranslation } from "../context/LanguageContext";

const SkeletonCard = () => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
    <div className=" bg-gray-200" />
    <div className="p-3 space-y-2">
      <div className="h-3 bg-gray-200 rounded w-1/3" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
      <div className="h-5 bg-gray-200 rounded w-1/3" />
      <div className="h-8 bg-gray-200 rounded w-full" />
    </div>
  </div>
);

const Shop = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "newest";
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page")) || 1;
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const [localMin, setLocalMin] = useState(minPrice);
  const [localMax, setLocalMax] = useState(maxPrice);

  useEffect(() => {
    setLocalMin(minPrice);
    setLocalMax(maxPrice);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let result = await getProducts();

        if (category) {
          result = result.filter((p) => {
            const cats = Array.isArray(p.category_name) ? p.category_name : [p.category_name];
            return cats.some((c) => c.toLowerCase().includes(category.toLowerCase()));
          });
        }

        if (search) {
          const q = search.toLowerCase();
          result = result.filter(
            (p) => {
              const cats = Array.isArray(p.category_name) ? p.category_name : [p.category_name];
              return (
                p.name.toLowerCase().includes(q) ||
                cats.some((c) => c.toLowerCase().includes(q))
              );
            },
          );
        }

        if (minPrice)
          result = result.filter((p) => p.price >= Number(minPrice));
        if (maxPrice)
          result = result.filter((p) => p.price <= Number(maxPrice));

        if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
        else if (sort === "price-desc")
          result.sort((a, b) => b.price - a.price);
        else if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

        const perPage = 12;
        const start = (page - 1) * perPage;
        setProducts(result.slice(start, start + perPage));
        setTotal(result.length);
        setTotalPages(Math.ceil(result.length / perPage));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [category, sort, search, page, minPrice, maxPrice]);

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value || value === 0) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    if (key !== "page") params.delete("page");
    setSearchParams(params);
  };

  const handlePriceFilter = (min, max) => {
    const params = new URLSearchParams(searchParams);
    if (min !== null && min !== "") params.set("minPrice", min);
    else params.delete("minPrice");
    if (max !== null && max !== "") params.set("maxPrice", max);
    else params.delete("maxPrice");
    params.delete("page");
    setSearchParams(params);
  };

  const sortLabels = {
    newest: t("shop.sortNewest"),
    "price-asc": t("shop.sortPriceAsc"),
    "price-desc": t("shop.sortPriceDesc"),
    rating: t("shop.sortRating"),
    bestselling: t("shop.sortBestselling"),
  };

  // const activeCategory =
  //   categoryList.find((c) => c.slug === category)?.name || "All Categories";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="lg:hidden sticky z-20 bg-white border-b border-gray-200 px-4 py-2.5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {t("shop.filters")}
          </button>
          {/* <div className="flex items-center gap-2 text-sm text-gray-500">
            {search && (
              <span className="text-gray-700 font-medium">
                &quot;{search}&quot;
              </span>
            )}
            <span>
              {total}
              {t("shop.itemsCount")}
            </span>
          </div> */}
        </div>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-white overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">
                {t("shop.filters")}
              </h2>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-4">
              <MobileFilters
                category={category}
                categories={categoryList.slice(1)}
                sort={sort}
                sortOptions={sortOptions}
                sortLabels={sortLabels}
                localMin={localMin}
                localMax={localMax}
                onCategoryChange={(v) => {
                  updateParams("category", v);
                  setSidebarOpen(false);
                }}
                onSortChange={(v) => {
                  updateParams("sort", v);
                  setSidebarOpen(false);
                }}
                onPriceChange={handlePriceFilter}
                setLocalMin={setLocalMin}
                setLocalMax={setLocalMax}
                quickPrices={quickPrices}
                t={t}
              />
            </div>
          </div>
        </div>
      )}

      <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex gap-6">
          <aside className="hidden lg:block w-[280px] flex-shrink-0 space-y-4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("shop.categories")}
                </h3>
              </div>
              <div className="p-2">
                {categoryList.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => updateParams("category", cat.slug)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      category === cat.slug || (!category && !cat.slug)
                        ? "bg-[#1F3A63] text-white font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("shop.priceRange")}
                </h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder={t("shop.min")}
                    value={localMin}
                    onChange={(e) => setLocalMin(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F3A63] focus:border-[#1F3A63]"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    placeholder={t("shop.max")}
                    value={localMax}
                    onChange={(e) => setLocalMax(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F3A63] focus:border-[#1F3A63]"
                  />
                </div>
                <button
                  onClick={() => handlePriceFilter(localMin, localMax)}
                  className="w-full py-2 text-sm font-medium text-white bg-[#1F3A63] rounded-lg hover:bg-[#162d4d] transition-colors"
                >
                  {t("shop.apply")}
                </button>
                <div className="space-y-1">
                  {quickPrices.map((p) => (
                    <button
                      key={p.label}
                      onClick={() => handlePriceFilter(p.min, p.max)}
                      className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${
                        Number(minPrice) === p.min && Number(maxPrice) === p.max
                          ? "bg-[#1F3A63]/10 text-[#1F3A63] font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("shop.sortBy")}
                </h3>
              </div>
              <div className="p-2">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => updateParams("sort", opt.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      sort === opt.value
                        ? "bg-[#1F3A63] text-white font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {sortLabels[opt.value] || opt.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="hidden lg:flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {search && (
                  <span className="text-sm font-medium text-gray-700 bg-white px-3 py-1.5 rounded-lg shadow-sm">
                    &quot;{search}&quot;
                  </span>
                )}
                <span className="text-sm text-gray-500">
                  {total}
                  {t("shop.productsFound")}
                </span>
              </div>
              {(category || search || minPrice) && (
                <button
                  onClick={() => setSearchParams(new URLSearchParams())}
                  className="text-sm text-[#f85606] hover:underline flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  {t("shop.clearAll")}
                </button>
              )}
            </div>

            {error ? (
              <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-center max-w-md">
                  <div className="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-4">
                    <X className="w-10 h-10 text-red-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {t("shop.failedToLoad")}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2.5 bg-[#1F3A63] text-white text-sm font-medium rounded-lg hover:bg-[#162d4d] transition-colors"
                  >
                    {t("shop.tryAgain")}
                  </button>
                </div>
              </div>
            ) : loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
                {[...Array(8)].map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-center max-w-md">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-10 h-10 text-gray-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {t("shop.noProductsFound")}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {t("shop.tryDifferentFilter")}
                  </p>
                  <button
                    onClick={() => setSearchParams(new URLSearchParams())}
                    className="mt-4 px-6 py-2.5 bg-[#1F3A63] text-white text-sm font-medium rounded-lg hover:bg-[#162d4d] transition-colors"
                  >
                    {t("shop.clearFilters")}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8 pb-4">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => updateParams("page", String(i + 1))}
                        className={`min-w-[36px] h-9 flex items-center justify-center text-sm font-medium rounded-lg transition-colors ${
                          page === i + 1
                            ? "bg-[#1F3A63] text-white shadow-sm"
                            : "bg-white text-gray-600 border border-gray-200 hover:border-[#1F3A63] hover:text-[#1F3A63]"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileFilters = ({
  category,
  categories,
  sort,
  sortOptions,
  sortLabels,
  localMin,
  localMax,
  onCategoryChange,
  onSortChange,
  onPriceChange,
  setLocalMin,
  setLocalMax,
  quickPrices,
  t,
}) => (
  <div className="space-y-5">
    <div>
      <h4 className="text-sm font-semibold text-gray-900 mb-2">
        {t("shop.categories")}
      </h4>
      <div className="space-y-1">
        <button
          onClick={() => onCategoryChange("")}
          className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
            !category
              ? "bg-[#1F3A63] text-white font-medium"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          {t("nav.allCategories")}
        </button>
        {(categories.length > 0 ? categories : []).map((cat) => (
          <button
            key={cat.id || cat.slug}
            onClick={() => onCategoryChange(cat.slug)}
            className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
              category === cat.slug
                ? "bg-[#1F3A63] text-white font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-sm font-semibold text-gray-900 mb-2">
        {t("shop.priceRange")}
      </h4>
      <div className="flex items-center gap-2 mb-2">
        <input
          type="number"
          placeholder={t("shop.min")}
          value={localMin}
          onChange={(e) => setLocalMin(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F3A63]"
        />
        <span className="text-gray-400">-</span>
        <input
          type="number"
          placeholder={t("shop.max")}
          value={localMax}
          onChange={(e) => setLocalMax(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F3A63]"
        />
      </div>
      <button
        onClick={() => onPriceChange(localMin, localMax)}
        className="w-full py-2 text-sm font-medium text-white bg-[#1F3A63] rounded-lg hover:bg-[#162d4d] mb-2"
      >
        {t("shop.apply")}
      </button>
      <div className="space-y-1">
        {quickPrices.map((p) => (
          <button
            key={p.label}
            onClick={() => {
              onPriceChange(p.min, p.max);
              setLocalMin(p.min);
              setLocalMax(p.max);
            }}
            className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-sm font-semibold text-gray-900 mb-2">
        {t("shop.sortBy")}
      </h4>
      <div className="space-y-1">
        {sortOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSortChange(opt.value)}
            className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
              sort === opt.value
                ? "bg-[#1F3A63] text-white font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {sortLabels[opt.value] || opt.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Shop;
