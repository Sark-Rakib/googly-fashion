import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Package,
  ChevronRight,
  Clock,
  MapPin,
  CreditCard,
  CheckCircle2,
  Circle,
  Loader2,
} from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { trackOrder } from "../services/orderService";

const statusSteps = [
  { key: "Order Placed", label: "orderTrack.placed" },
  { key: "Confirmed", label: "orderTrack.confirmed" },
  { key: "Processing", label: "orderTrack.processing" },
  { key: "Shipped", label: "orderTrack.shipped" },
  { key: "Out for Delivery", label: "orderTrack.outForDelivery" },
  { key: "Delivered", label: "orderTrack.delivered" },
];

const getStepIndex = (status) => {
  const idx = statusSteps.findIndex((s) => s.key === status);
  return idx >= 0 ? idx : -1;
};

const paymentLabels = {
  cod: "Cash on Delivery",
  bkash: "bKash",
  nagad: "Nagad",
  bank: "Bank Transfer",
};

const TrackOrder = () => {
  const { t } = useTranslation();
  const [orderId, setOrderId] = useState("");
  const [contact, setContact] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setOrder(null);
    setSearched(false);

    if (!orderId.trim()) {
      setError(t("orderTrack.errorOrderIdRequired") || "Order ID is required.");
      return;
    }
    if (!contact.trim()) {
      setError(
        t("orderTrack.errorContactRequired") || "Email or phone is required.",
      );
      return;
    }

    setLoading(true);
    try {
      const result = await trackOrder(orderId.trim(), contact.trim());
      setOrder(result);
    } catch (err) {
      if (err.response?.status === 404) {
        setError(
          t("orderTrack.errorNotFound") ||
            "No order found with the provided details.",
        );
      } else {
        setError(
          t("orderTrack.errorGeneric") ||
            "Something went wrong. Please try again.",
        );
      }
      setSearched(true);
    } finally {
      setLoading(false);
    }
  };

  const currentStep = order ? getStepIndex(order.orderStatus) : -1;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">
              {t("orderTrack.title") || "Track Order"}
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <div className="text-center mb-6">
            <Package className="w-10 h-10 text-[#1F3A63] mx-auto mb-3" />
            <h1 className="text-xl font-bold text-gray-900">
              {t("orderTrack.title") || "Track Your Order"}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {t("orderTrack.subtitle") ||
                "Enter your order ID and email/phone to track your order"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("orderTrack.orderId") || "Order ID"}
              </label>
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="e.g. GOOGLY-1001"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("orderTrack.emailOrPhone") || "Email or Phone"}
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="e.g. rakib@example.com or 01712345678"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#1F3A63]/20 focus:border-[#1F3A63] outline-none transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#1F3A63] text-white font-semibold text-sm rounded-lg hover:bg-[#162d4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
              {loading
                ? t("orderTrack.searching") || "Searching..."
                : t("orderTrack.trackButton") || "Track Order"}
            </button>
          </form>

          {error && (
            <div className="mt-6 max-w-lg mx-auto">
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4 text-center">
                {error}
              </div>
            </div>
          )}
        </div>

        {order && (
          <div className="mt-6 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6">
                {t("orderTrack.orderTimeline") || "Order Timeline"}
              </h2>
              <div className="relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200" />
                <div className="space-y-6">
                  {statusSteps.map((step, i) => {
                    const isComplete = i <= currentStep;
                    const isCurrent =
                      i === currentStep && order.orderStatus !== "Delivered";
                    const isLastDelivered =
                      step.key === "Delivered" &&
                      order.orderStatus === "Delivered";
                    const active = isComplete || isLastDelivered;
                    return (
                      <div
                        key={step.key}
                        className="flex items-start gap-4 relative"
                      >
                        <div className="relative z-10 mt-0.5">
                          {active ? (
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-300" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <p
                            className={`text-sm font-semibold ${
                              active ? "text-gray-900" : "text-gray-400"
                            }`}
                          >
                            {t(step.label) || step.key}
                          </p>
                          {isCurrent && (
                            <p className="text-xs text-[#EF394E] font-medium mt-0.5">
                              {t("orderTrack.currentStatus") ||
                                "Current Status"}
                            </p>
                          )}
                          {isLastDelivered && (
                            <p className="text-xs text-green-600 font-medium mt-0.5">
                              {t("orderTrack.deliveredOn") || "Delivered"}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {t("orderTrack.orderDetails") || "Order Details"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">
                    {t("orderTrack.orderId") || "Order ID"}
                  </span>
                  <p className="font-semibold text-gray-900 mt-0.5">
                    #{order.orderId}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">
                    {t("orderTrack.customerName") || "Customer Name"}
                  </span>
                  <p className="font-semibold text-gray-900 mt-0.5">
                    {order.customerName}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">
                    {t("orderTrack.orderDate") || "Order Date"}
                  </span>
                  <p className="font-semibold text-gray-900 mt-0.5">
                    {new Date(order.orderDate).toLocaleDateString("en-BD", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">
                    {t("orderTrack.paymentMethod") || "Payment Method"}
                  </span>
                  <p className="font-semibold text-gray-900 mt-0.5">
                    {paymentLabels[order.paymentMethod] || order.paymentMethod}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <div>
                    <span className="text-gray-500">
                      {t("orderTrack.paymentStatus") || "Payment"}
                    </span>
                    <span
                      className={`ml-2 inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                        order.paymentStatus === "Paid"
                          ? "bg-green-100 text-green-700"
                          : order.paymentStatus === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <div>
                    <span className="text-gray-500">
                      {t("orderTrack.orderStatus") || "Status"}
                    </span>
                    <span className="ml-2 inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                      {order.orderStatus}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <div>
                    <span className="text-gray-500">
                      {t("orderTrack.deliveryAddress") || "Delivery"}
                    </span>
                    <p className="font-medium text-gray-900 mt-0.5">
                      {order.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {t("orderTrack.orderedProducts") || "Ordered Products"}
              </h2>
              <div className="space-y-4">
                {order.products.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        ৳{item.price} x {item.quantity}
                        {item.size && ` | Size: ${item.size}`}
                        {item.color && ` | Color: ${item.color}`}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-gray-900">
                      ৳{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t mt-4 pt-4 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    {t("orderTrack.subtotal") || "Subtotal"}
                  </span>
                  <span className="text-gray-900">
                    ৳{order.subtotal?.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    {t("orderTrack.deliveryCharge") || "Delivery"}
                  </span>
                  <span className="text-gray-900">
                    {order.deliveryCharge === 0
                      ? "Free"
                      : `৳${order.deliveryCharge?.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t pt-1 mt-1 flex justify-between font-bold text-base">
                  <span className="text-gray-900">
                    {t("orderTrack.total") || "Total"}
                  </span>
                  <span className="text-gray-900">
                    ৳{order.total?.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
