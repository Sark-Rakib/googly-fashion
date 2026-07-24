import { Link, useLocation, Navigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";

const OrderConfirm = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const order = location.state;

  if (!order?.orderId) return <Navigate to="/" replace />;

  const paymentLabels = {
    cod: t("payment.cod"),
    bkash: t("payment.bkash"),
    nagad: t("payment.nagad"),
    bank: t("payment.bank"),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          {t("orderConfirm.title")}
        </h1>
        <p className="text-gray-500 mt-1">
          {t("orderConfirm.thankYou")},{" "}
          <span className="font-medium text-gray-900">
            {order.customerName}
          </span>
          !
        </p>
      </div>

      <div className="mt-8 border border-gray-200 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">{t("orderConfirm.orderId")}</span>
            <p className="font-medium text-gray-900">#{order.orderId}</p>
          </div>
          <div>
            <span className="text-gray-500">{t("orderConfirm.orderDate")}</span>
            <p className="font-medium text-gray-900">
              {new Date(order.orderDate).toLocaleDateString("en-BD", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div>
            <span className="text-gray-500">
              {t("orderConfirm.paymentMethod")}
            </span>
            <p className="font-medium text-gray-900">
              {paymentLabels[order.paymentMethod] || order.paymentMethod}
            </p>
          </div>
          <div>
            <span className="text-gray-500">
              {t("orderConfirm.orderStatus")}
            </span>
            <span className="ml-2 inline-block px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800 font-medium">
              {order.orderStatus}
            </span>
          </div>
        </div>

        <div className="border-t pt-4">
          <span className="text-sm text-gray-500">
            {t("orderConfirm.deliveryAddress")}
          </span>
          <p className="font-medium text-gray-900">{order.address}</p>
          <p className="text-sm text-gray-600">
            {t("orderConfirm.phone")}: {order.phone}
          </p>
          {order.email && (
            <p className="text-sm text-gray-600">
              {t("orderConfirm.email")}: {order.email}
            </p>
          )}
        </div>
      </div>

      {order.products && order.products.length > 0 && (
        <div className="mt-6 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t("orderConfirm.orderItems")}
          </h3>
          <div className="space-y-4">
            {order.products.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs">
                      {t("orderConfirm.img")}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    ৳{item.price} x {item.quantity}
                    {item.size && ` | ${t("checkout.size")}: ${item.size}`}
                    {item.color && ` | ${t("checkout.color")}: ${item.color}`}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ৳{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">
                {t("orderConfirm.subtotal")}
              </span>
              <span className="text-gray-900">
                ৳{order.subtotal?.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {t("orderConfirm.deliveryCharge")}
              </span>
              <span className="text-gray-900">
                ৳{order.deliveryCharge?.toFixed(2)}
              </span>
            </div>
            <div className="border-t pt-1 mt-1 flex justify-between font-semibold text-base">
              <span className="text-gray-900">{t("orderConfirm.total")}</span>
              <span className="text-gray-900">৳{order.total?.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/shop"
          className="bg-[#1F3A63] text-white px-6 py-3 rounded-md font-medium hover:bg-[#162d4d]"
        >
          {t("orderConfirm.continueShopping")}
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirm;
