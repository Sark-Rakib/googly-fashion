import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { Package, ChevronDown, ChevronUp, Loader2 } from "lucide-react";

const STATUSES = [
  "Order Placed",
  "Confirmed",
  "Processing",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

const PAYMENT_STATUSES = ["Pending", "Paid", "Unpaid"];

const DashboardOrders = () => {
  const { user, token, API } = useAuth();
  const { toast } = useToast();
  const isAdmin = user?.role === "admin";
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchOrders = async () => {
    try {
      const url = isAdmin ? `${API}/orders` : `${API}/orders/user/orders`;
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(Array.isArray(data) ? data : []);
    } catch {
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId, status) => {
    try {
      const { data } = await axios.put(
        `${API}/orders/${orderId}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrders((prev) =>
        prev.map((o) => (o.orderId === orderId ? { ...o, orderStatus: data.orderStatus } : o))
      );
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to update status");
    }
  };

  const updatePayment = async (orderId, paymentStatus) => {
    try {
      const { data } = await axios.put(
        `${API}/orders/${orderId}/payment`,
        { paymentStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrders((prev) =>
        prev.map((o) => (o.orderId === orderId ? { ...o, paymentStatus: data.paymentStatus } : o))
      );
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to update payment status");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin h-8 w-8 border-b-2 border-[#1F3A63]" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {isAdmin ? "All Orders" : "My Orders"}
      </h1>

      {orders.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No orders yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === order.orderId ? null : order.orderId)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">#{order.orderId}</p>
                    <p className="text-xs text-gray-500">
                      {isAdmin && `${order.customerName} · `}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm font-medium text-gray-900">৳{order.total}</p>
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      order.orderStatus === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.orderStatus === "Shipped" || order.orderStatus === "Out for Delivery"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                  {expanded === order.orderId ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </button>

              {expanded === order.orderId && (
                <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Contact</p>
                      <p className="text-sm text-gray-900">{order.email}</p>
                      <p className="text-sm text-gray-900">{order.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Address</p>
                      <p className="text-sm text-gray-900">{order.address}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Payment</p>
                      <p className="text-sm text-gray-900 capitalize">{order.paymentMethod}</p>
                      <p className="text-xs text-gray-500">{order.paymentStatus}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Items</p>
                    <div className="space-y-2">
                      {order.products?.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <div className="w-8 h-8 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                            {item.image && (
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            )}
                          </div>
                          <span className="text-gray-900">{item.name}</span>
                          <span className="text-gray-500">x{item.quantity}</span>
                          <span className="text-gray-900 font-medium ml-auto">৳{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {isAdmin && (
                    <>
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Update Status</p>
                        <div className="flex flex-wrap gap-2">
                          {STATUSES.map((s) => (
                            <button
                              key={s}
                              onClick={() => updateStatus(order.orderId, s)}
                              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                                order.orderStatus === s
                                  ? "bg-[#1F3A63] text-white border-[#1F3A63]"
                                  : "border-gray-300 text-gray-600 hover:border-gray-900"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 mb-2">Payment Status</p>
                        <div className="flex flex-wrap gap-2">
                          {PAYMENT_STATUSES.map((ps) => (
                            <button
                              key={ps}
                              onClick={() => updatePayment(order.orderId, ps)}
                              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                                order.paymentStatus === ps
                                  ? ps === "Paid"
                                    ? "bg-green-600 text-white border-green-600"
                                    : ps === "Unpaid"
                                      ? "bg-red-600 text-white border-red-600"
                                      : "bg-yellow-500 text-white border-yellow-500"
                                  : "border-gray-300 text-gray-600 hover:border-gray-900"
                              }`}
                            >
                              {ps}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardOrders;
