import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Upload, X, Loader2 } from "lucide-react";

const IMAGEBB_API_KEY = import.meta.env.VITE_IMAGEBB_API_KEY || "";

const categories = [
  "Men", "Women", "T-Shirts", "Jeans", "Dresses", "Jackets", "Shoes",
  "Accessories", "Watches", "Beauty", "Kids",
];

const EditProduct = () => {
  const { id } = useParams();
  const { token, API } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    compare_price: "",
    category_name: [],
    brand: "",
    stock: "",
    featured: false,
    sizes: "",
    colors: "",
  });

  const [existingImage, setExistingImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${API}/products/${id}`);
        setForm({
          name: data.name || "",
          description: data.description || "",
          price: data.price || "",
          compare_price: data.compare_price || "",
          category_name: Array.isArray(data.category_name) ? data.category_name : data.category_name ? [data.category_name] : [],
          brand: data.brand || "",
          stock: data.stock ?? "",
          featured: data.featured || false,
          sizes: Array.isArray(data.sizes) ? data.sizes.join(", ") : data.sizes || "",
          colors: Array.isArray(data.colors) ? data.colors.join(", ") : data.colors || "",
        });
        setExistingImage(data.image || "");
      } catch (err) {
        setError(err.response?.data?.error || "Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, API]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategoryToggle = (cat) => {
    setForm((prev) => {
      const current = prev.category_name;
      const updated = current.includes(cat)
        ? current.filter((c) => c !== cat)
        : [...current, cat];
      return { ...prev, category_name: updated };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }
    setError("");
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");
  };

  const uploadToImageBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${IMAGEBB_API_KEY}`,
      formData,
    );
    if (!data.success) throw new Error("Image upload failed");
    return data.data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.name || !form.price || form.category_name.length === 0) {
      setError("Name, price, and category are required");
      return;
    }

    setSubmitting(true);

    try {
      let imageUrl = existingImage;
      if (imageFile) {
        setUploading(true);
        imageUrl = await uploadToImageBB(imageFile);
        setUploading(false);
      }

      const slug = form.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      const payload = {
        name: form.name,
        slug,
        description: form.description,
        price: parseFloat(form.price),
        compare_price: form.compare_price ? parseFloat(form.compare_price) : null,
        image: imageUrl,
        category_name: form.category_name,
        brand: form.brand,
        stock: parseInt(form.stock) || 0,
        featured: form.featured,
        sizes: form.sizes
          ? form.sizes.split(",").map((s) => s.trim()).filter(Boolean)
          : [],
        colors: form.colors
          ? form.colors.split(",").map((c) => c.trim()).filter(Boolean)
          : [],
      };

      await axios.put(`${API}/products/${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSuccess(true);
      setTimeout(() => navigate("/dashboard/products"), 1500);
    } catch (err) {
      const raw = err.response?.data?.error || err.message || "Failed to update product";
      setError(typeof raw === "object" ? JSON.stringify(raw) : String(raw));
    } finally {
      setUploading(false);
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin h-8 w-8 border-b-2 border-[#1F3A63]" />
      </div>
    );
  }

  const currentImage = imagePreview || existingImage;

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Product</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4 mb-6">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-4 mb-6">
          Product updated successfully! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Basic Info</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none"
                placeholder="e.g. Classic White Cotton T-Shirt"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none resize-none"
                placeholder="Product description..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none"
                  placeholder="e.g. Nike"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <label
                      key={c}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border cursor-pointer transition-colors ${
                        form.category_name.includes(c)
                          ? "bg-[#1F3A63] text-white border-[#1F3A63]"
                          : "border-gray-300 text-gray-600 hover:border-gray-900"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.category_name.includes(c)}
                        onChange={() => handleCategoryToggle(c)}
                        className="sr-only"
                      />
                      {c}
                    </label>
                  ))}
                </div>
                {form.category_name.length === 0 && (
                  <p className="text-xs text-red-500 mt-1">Select at least one category</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Pricing & Stock</h2>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (৳) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Compare Price (৳)
              </label>
              <input
                type="number"
                name="compare_price"
                value={form.compare_price}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                min="0"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none"
                placeholder="0"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-300 text-[#1F3A63] focus:ring-[#1F3A63]"
            />
            <label className="text-sm text-gray-700">Featured product</label>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Options</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sizes
              </label>
              <input
                type="text"
                name="sizes"
                value={form.sizes}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none"
                placeholder="S, M, L, XL"
              />
              <p className="text-xs text-gray-400 mt-1">Comma separated</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Colors
              </label>
              <input
                type="text"
                name="colors"
                value={form.colors}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none"
                placeholder="Red, Blue, Black"
              />
              <p className="text-xs text-gray-400 mt-1">Comma separated</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Product Image</h2>

          {currentImage ? (
            <div className="relative w-40 h-40">
              <img
                src={currentImage}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg border border-gray-200"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#1F3A63] transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-xs text-gray-500">Upload Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}

          {uploading && (
            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
              <Loader2 className="w-3 h-3 animate-spin" /> Uploading to ImageBB...
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting || uploading}
          className="w-full py-3 bg-[#1F3A63] text-white font-semibold rounded-lg hover:bg-[#162d4d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Updating Product...
            </>
          ) : (
            "Update Product"
          )}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
