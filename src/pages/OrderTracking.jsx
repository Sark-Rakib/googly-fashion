import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, PackageSearch, Truck, CheckCircle, MapPin } from "lucide-react";
import { trackOrder } from "../services/orderService";

const STAGES = ["Order Placed", "Confirmed", "Processing", "Shipped", "Out for Delivery", "Delivered"];

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [contact, setContact] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    setError("");
    setOrder(null);
    setLoading(true);
    try {
      const data = await trackOrder(orderId, contact);
      setOrder(data);
    } catch (err) {
      setError(err.response?.data?.error || "Order not found");
    } finally {
      setLoading(false);
    }
  };

  const currentStageIndex = order ? STAGES.indexOf(order.orderStatus) : -1;

  const stages = [
    { icon: PackageSearch, title: "Confirmed", desc: "Your order has been placed and payment confirmed" },
    { icon: PackageSearch, title: "Processing", desc: "Items are being picked and packed in our warehouse" },
    { icon: Truck, title: "Shipped", desc: "Package has left our warehouse and is in transit" },
    { icon: MapPin, title: "Out for Delivery", desc: "Package is with the delivery agent near your area" },
    { icon: CheckCircle, title: "Delivered", desc: "Package has been successfully delivered to you" },
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Order Tracking</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Track Your Order</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Enter your order ID and email/phone to track your package</p>
          <form onSubmit={handleTrack} className="mt-8 max-w-xl mx-auto space-y-3">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
              placeholder="Order ID (e.g. GF-20240101-1234)"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF394E] focus:border-transparent text-gray-900"
            />
            <div className="flex gap-3">
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                placeholder="Email or phone number"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF394E] focus:border-transparent text-gray-900"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#EF394E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d63243] transition-colors whitespace-nowrap disabled:opacity-50"
              >
                <PackageSearch className="w-5 h-5 inline-block mr-2" />
                {loading ? "Tracking..." : "Track"}
              </button>
            </div>
            {error && (
              <p className="text-red-200 text-sm mt-2">{error}</p>
            )}
          </form>
        </div>
      </section>

      {order && (
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Order #{order.orderId}</h2>
              <p className="text-sm text-gray-500 mb-4">
                Placed on {new Date(order.createdAt).toLocaleDateString("en-BD", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Status:</span>{" "}
                  <span className="font-medium text-gray-900">{order.orderStatus}</span>
                </div>
                <div>
                  <span className="text-gray-500">Total:</span>{" "}
                  <span className="font-medium text-gray-900">৳{order.total}</span>
                </div>
                <div>
                  <span className="text-gray-500">Payment:</span>{" "}
                  <span className="font-medium text-gray-900 capitalize">{order.paymentMethod}</span>
                </div>
                <div>
                  <span className="text-gray-500">Items:</span>{" "}
                  <span className="font-medium text-gray-900">{order.products?.length || 0}</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  {STAGES.map((s, i) => (
                    <div key={s} className="flex-1">
                      <div className={`h-2 rounded-full ${i <= currentStageIndex ? "bg-green-500" : "bg-gray-200"}`} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  {STAGES.map((s) => (
                    <span key={s} className={`text-center ${STAGES.indexOf(s) <= currentStageIndex ? "text-green-600 font-medium" : ""}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Order Status Guide</h2>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="hidden lg:block absolute left-[2.35rem] top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-8">
                {stages.map((stage, i) => (
                  <div key={i} className="flex items-start gap-6 relative">
                    <div className="w-14 h-14 bg-[#1F3A63]/10 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <stage.icon className="w-7 h-7 text-[#1F3A63]" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-[#1F3A63]">0{i + 1}</span>
                        <h3 className="text-lg font-semibold text-gray-900">{stage.title}</h3>
                      </div>
                      <p className="text-gray-500">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-gray-50 rounded-xl p-10 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Help?</h2>
            <p className="text-gray-500 mb-6">Can't find your order? Contact our support team for assistance.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-[#1F3A63] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#162d4f] transition-colors">Contact Support</Link>
              <Link to="/help-center" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Visit Help Center</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderTracking;
