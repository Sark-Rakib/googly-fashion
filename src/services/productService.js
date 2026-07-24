import axios from "axios";

const API = "/api/products";

const normalize = (p) => ({
  id: p._id || p.id,
  name: p.name,
  slug: p.slug,
  description: p.description,
  price: p.price,
  compare_price: p.compare_price || null,
  image: p.image,
  category_name: p.category_name,
  category_id: p.category_id || 0,
  rating: p.rating || 0,
  review_count: p.review_count || Math.floor((p.rating || 4) * 8) + 2,
  stock: p.stock || 0,
  sizes: p.sizes || [],
  colors: p.colors || [],
  featured: p.featured || false,
  brand: p.brand || "",
  createdAt: p.createdAt || "",
});

export const getProducts = async (params = {}) => {
  const { data } = await axios.get(API, { params });
  const items = data.products || data;
  return Array.isArray(items) ? items.map(normalize) : [];
};

export const getProductById = async (id) => {
  const { data } = await axios.get(`${API}/${id}`);
  return normalize(data);
};

export const getProductBySlug = async (slug) => {
  const { data } = await axios.get(`${API}/slug/${slug}`);
  return normalize(data);
};

export const getProductsByCategory = async (category) => {
  if (!category) return getProducts();
  const { data } = await axios.get(API, { params: { category } });
  const items = data.products || data;
  return Array.isArray(items) ? items.map(normalize) : [];
};

export const searchProducts = async (query) => {
  if (!query) return getProducts();
  const { data } = await axios.get(API, { params: { search: query } });
  const items = data.products || data;
  return Array.isArray(items) ? items.map(normalize) : [];
};

export const getFeaturedProducts = async () => {
  const { data } = await axios.get(`${API}/featured`);
  return Array.isArray(data) ? data.map(normalize) : [];
};

export const getRelatedProducts = async (product, limit = 4) => {
  const { data } = await axios.get(`${API}/${product.id}/related`, { params: { limit } });
  return Array.isArray(data) ? data.map(normalize) : [];
};
