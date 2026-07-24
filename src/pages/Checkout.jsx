import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "../context/LanguageContext";
import { DELIVERY_CHARGE, paymentMethods } from "../services/config";

const Checkout = () => {
  const { cart, fetchCart, clearCart } = useCart();
  const { user, API } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const directItem = location.state?.directItem;
  const items = directItem ? [directItem] : cart;
  const [form, setForm] = useState({
    fullName: user?.name || "",
    phone: "",
    email: user?.email || "",
    district: "",
    address: "",
    deliveryNotes: "",
    paymentMethod: "cod",
  });
  const [placing, setPlacing] = useState(false);

  useEffect(() => {
    if (!directItem) fetchCart();
  }, []);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal + DELIVERY_CHARGE;

  const generateOrderId = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `GF-${y}${m}${d}-${rand}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.address) {
      alert("Please fill in all required fields");
      return;
    }
    setPlacing(true);

    const orderId = generateOrderId();
    const orderData = {
      orderId,
      customerName: form.fullName,
      phone: form.phone,
      email: form.email || "",
      address: `${form.address}, ${form.district}`.trim(),
      products: items.map((i) => ({
        name: i.name,
        price: i.price,
        quantity: i.quantity,
        size: i.size,
        color: i.color,
        image: i.image,
      })),
      subtotal,
      deliveryCharge: DELIVERY_CHARGE,
      total,
      paymentMethod: form.paymentMethod,
      paymentStatus: "Pending",
      orderStatus: "Order Placed",
      orderDate: new Date().toISOString(),
    };

    try {
      await axios.post(`${API}/orders`, orderData);
    } catch {
      // fallback to localStorage if API is down
      const saved = JSON.parse(localStorage.getItem("googly_orders") || "[]");
      saved.unshift(orderData);
      localStorage.setItem("googly_orders", JSON.stringify(saved));
    }

    if (!directItem) {
      await clearCart();
    }

    navigate("/order-confirm", { state: orderData });
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          {t("checkout.title")}
        </h1>
        <div className="text-center py-16">
          <p className="text-gray-500">{t("checkout.empty")}</p>
          <Link
            to="/shop"
            className="text-gray-900 underline mt-2 inline-block"
          >
            {t("checkout.continueShopping")}
          </Link>
        </div>
      </div>
    );
  }

  const districts = [
    t("checkout.bagerhat"),
    t("checkout.bandarban"),
    t("checkout.barguna"),
    t("checkout.barishal"),
    t("checkout.bhola"),
    t("checkout.bogura"),
    t("checkout.brahmanbaria"),
    t("checkout.chandpur"),
    t("checkout.chattogram"),
    t("checkout.chuadanga"),
    t("checkout.coxsbazar"),
    t("checkout.cumilla"),
    t("checkout.dhaka"),
    t("checkout.dinajpur"),
    t("checkout.faridpur"),
    t("checkout.feni"),
    t("checkout.gaibandha"),
    t("checkout.gazipur"),
    t("checkout.gopalganj"),
    t("checkout.habiganj"),
    t("checkout.jamalpur"),
    t("checkout.jashore"),
    t("checkout.jhalokathi"),
    t("checkout.jhenaidah"),
    t("checkout.joypurhat"),
    t("checkout.khagrachhari"),
    t("checkout.khulna"),
    t("checkout.kishoreganj"),
    t("checkout.kurigram"),
    t("checkout.kushtia"),
    t("checkout.lakshmipur"),
    t("checkout.lalmonirhat"),
    t("checkout.madaripur"),
    t("checkout.magura"),
    t("checkout.manikganj"),
    t("checkout.meherpur"),
    t("checkout.moulvibazar"),
    t("checkout.munshiganj"),
    t("checkout.mymensingh"),
    t("checkout.naogaon"),
    t("checkout.narail"),
    t("checkout.narayanganj"),
    t("checkout.narsingdi"),
    t("checkout.natore"),
    t("checkout.netrokona"),
    t("checkout.nilphamari"),
    t("checkout.noakhali"),
    t("checkout.pabna"),
    t("checkout.panchagarh"),
    t("checkout.patuakhali"),
    t("checkout.pirojpur"),
    t("checkout.rajbari"),
    t("checkout.rajshahi"),
    t("checkout.rangamati"),
    t("checkout.rangpur"),
    t("checkout.satkhira"),
    t("checkout.shariatpur"),
    t("checkout.sherpur"),
    t("checkout.sirajganj"),
    t("checkout.sunamganj"),
    t("checkout.sylhet"),
    t("checkout.tangail"),
    t("checkout.thakurgaon"),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        {t("checkout.title")}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="border border-gray-200 rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {t("checkout.contactInfo")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("checkout.fullName")}{" "}
                    <span className="text-red-500">
                      {t("checkout.required")}
                    </span>
                  </label>
                  <input
                    required
                    value={form.fullName}
                    onChange={(e) =>
                      setForm({ ...form, fullName: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder={t("checkout.fullNamePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("checkout.phoneNumber")}{" "}
                    <span className="text-red-500">
                      {t("checkout.required")}
                    </span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder={t("checkout.phonePlaceholder")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("checkout.email")}{" "}
                    <span className="text-gray-400">
                      {t("checkout.emailOptional")}
                    </span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder={t("checkout.emailPlaceholder")}
                  />
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 space-y-4 mt-6">
              <h2 className="text-lg font-semibold text-gray-900">
                {t("checkout.deliveryInfo")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("checkout.district")}{" "}
                    <span className="text-red-500">
                      {t("checkout.required")}
                    </span>
                  </label>
                  <select
                    required
                    value={form.district}
                    onChange={(e) =>
                      setForm({ ...form, district: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 bg-white"
                  >
                    <option value="">{t("checkout.selectDistrict")}</option>
                    {districts.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("checkout.areaAddress")}{" "}
                    <span className="text-red-500">
                      {t("checkout.required")}
                    </span>
                  </label>
                  <textarea
                    required
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder={t("checkout.addressPlaceholder")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("checkout.deliveryNotes")}{" "}
                    <span className="text-gray-400">
                      {t("checkout.emailOptional")}
                    </span>
                  </label>
                  <textarea
                    value={form.deliveryNotes}
                    onChange={(e) =>
                      setForm({ ...form, deliveryNotes: e.target.value })
                    }
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder={t("checkout.deliveryNotesPlaceholder")}
                  />
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 space-y-4 mt-6">
              <h2 className="text-lg font-semibold text-gray-900">
                {t("checkout.paymentMethod")}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {paymentMethods.map((pm) => (
                  <button
                    key={pm.value}
                    type="button"
                    onClick={() =>
                      setForm({ ...form, paymentMethod: pm.value })
                    }
                    className={`px-4 py-3 border rounded-lg text-sm font-medium transition-colors ${
                      form.paymentMethod === pm.value
                        ? "border-[#1F3A63] bg-[#1F3A63] text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-900"
                    }`}
                  >
                    {t(`payment.${pm.value}`)}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={placing}
              className="mt-6 w-full bg-[#EF394E] text-white py-3.5 rounded-lg font-semibold hover:bg-[#d6303f] transition-colors disabled:opacity-50 text-lg"
            >
              {placing ? t("checkout.placingOrder") : t("checkout.placeOrder")}
            </button>
          </form>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 h-fit sticky top-24">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t("checkout.orderSummary")}
          </h3>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={item.id || i} className="flex gap-3">
                <div className="w-16 h-16 bg-gray-100 rounded-md  flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs">
                      {t("checkout.img")}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t("checkout.qty")}: {item.quantity}
                    {item.size && ` | ${t("checkout.size")}: ${item.size}`}
                    {item.color && ` | ${item.color}`}
                  </p>
                  <p className="text-sm font-medium text-gray-900 mt-1">
                    ৳{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">{t("checkout.subtotal")}</span>
              <span className="text-gray-900">৳{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {t("checkout.deliveryCharge")}
              </span>
              <span className="text-gray-900">
                ৳{DELIVERY_CHARGE.toFixed(2)}
              </span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-semibold text-base">
              <span className="text-gray-900">{t("checkout.total")}</span>
              <span className="text-gray-900">৳{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
