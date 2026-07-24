import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "../context/LanguageContext";

const DashboardProfile = () => {
  const { user, token, API, updateUser } = useAuth();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      await axios.put(`${API}/auth/profile`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      updateUser({ ...user, ...form });
      setMsg(t("dashboard.profileUpdated"));
    } catch (err) {
      setMsg(err.response?.data?.error || t("dashboard.failedUpdate"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>

      {msg && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded-lg p-4 mb-4">
          {msg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-xl border border-gray-200 p-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={user?.email || ""}
            disabled
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            rows={3}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 bg-[#1F3A63] text-white text-sm font-semibold rounded-lg hover:bg-[#162d4d] transition-colors disabled:opacity-50"
        >
          {loading ? "Saving..." : t("dashboard.updateProfile")}
        </button>
      </form>
    </div>
  );
};

export default DashboardProfile;
