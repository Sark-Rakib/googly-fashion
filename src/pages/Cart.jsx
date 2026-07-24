import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTranslation } from "../context/LanguageContext";

const Cart = () => {
  const { cart, cartCount, fetchCart, updateQuantity, removeItem } = useCart();
  const { t } = useTranslation();

  useEffect(() => {
    fetchCart();
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        {t("cart.shoppingCart")} ({cartCount} {t("cart.items")})
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500">{t("cart.empty")}</p>
          <Link
            to="/shop"
            className="mt-4 inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-medium"
          >
            {t("cart.continueShopping")}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 border border-gray-200 rounded-lg p-4"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs">
                      {t("cart.image")}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.product_id}`}
                    className="text-sm font-medium text-gray-900 truncate block"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-gray-500">
                    ${item.price}{" "}
                    {item.size && `- ${t("cart.size")}: ${item.size}`}{" "}
                    {item.color && `- ${t("cart.color")}: ${item.color}`}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 py-1 border border-gray-300 rounded text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 border border-gray-300 rounded text-sm"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-sm text-red-500 hover:text-red-700"
                    >
                      {t("cart.remove")}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-gray-200 rounded-lg p-6 h-fit">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("cart.orderSummary")}
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t("cart.subtotal")}</span>
                <span className="text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t("cart.shipping")}</span>
                <span className="text-gray-900">{t("cart.free")}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span className="text-gray-900">{t("cart.total")}</span>
                  <span className="text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-6 block w-full bg-gray-900 text-white text-center py-3 rounded-md font-medium hover:bg-gray-800"
            >
              {t("cart.proceedToCheckout")}
            </Link>
            <Link
              to="/shop"
              className="mt-2 block w-full text-center text-sm text-gray-500 hover:text-gray-700"
            >
              {t("cart.continueShopping")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
