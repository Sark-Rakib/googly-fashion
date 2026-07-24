import { Link } from "react-router-dom";
import {
  ChevronRight,
  Truck,
  Package,
  MapPin,
  CheckCircle,
} from "lucide-react";

const ShippingInformation = () => {
  const deliveryOptions = [
    {
      type: "Standard",
      time: "5–7 business days",
      cost: "৳60",
      desc: "Reliable delivery to your doorstep",
    },
    {
      type: "Express",
      time: "2–3 business days",
      cost: "৳150",
      desc: "Faster processing and delivery",
    },
    {
      type: "Same-Day",
      time: "Within 24 hours",
      cost: "৳250",
      desc: "Available in select city areas",
    },
  ];

  const steps = [
    {
      icon: Package,
      title: "Order Placed",
      desc: "We receive and confirm your order",
    },
    {
      icon: Package,
      title: "Processing",
      desc: "Items are picked and packed with care",
    },
    { icon: Truck, title: "Shipped", desc: "Order leaves our warehouse" },
    { icon: MapPin, title: "In Transit", desc: "Package is on its way to you" },
    {
      icon: CheckCircle,
      title: "Delivered",
      desc: "Package handed over to you",
    },
  ];

  const cities = [
    "Dhaka",
    "Chattogram",
    "Khulna",
    "Rajshahi",
    "Sylhet",
    "Barisal",
    "Rangpur",
    "Mymensingh",
    "Comilla",
    "Narayanganj",
    "Gazipur",
    "Bogra",
    "Jessore",
    "Dinajpur",
    "Tangail",
    "Pabna",
  ];

  const faqs = [
    {
      q: "How long does standard shipping take?",
      a: "Standard shipping typically takes 5–7 business days depending on your location. Rural areas may take slightly longer.",
    },
    {
      q: "Do you offer international shipping?",
      a: "Currently we only deliver within Bangladesh. We plan to expand internationally in the future.",
    },
    {
      q: "Can I change my delivery address after placing an order?",
      a: "Yes, you can change your address within 2 hours of placing the order. Contact our support team for assistance.",
    },
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">
              Shipping Information
            </span>
          </div>
        </div>
      </div>

      <section className="bg-linear-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Shipping Information
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Everything you need to know about delivery
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Delivery Options
          </h2>
          <div className="overflow-x-auto mb-16">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="bg-[#1F3A63] text-white">
                  <th className="text-left py-3 px-4 font-medium">Method</th>
                  <th className="text-left py-3 px-4 font-medium">
                    Delivery Time
                  </th>
                  <th className="text-left py-3 px-4 font-medium">Cost</th>
                  <th className="text-left py-3 px-4 font-medium">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {deliveryOptions.map((opt, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 font-medium text-gray-900">
                      {opt.type}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{opt.time}</td>
                    <td className="py-3 px-4 font-medium text-[#EF394E]">
                      {opt.cost}
                    </td>
                    <td className="py-3 px-4 text-gray-500 text-sm">
                      {opt.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Delivery Timeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-[#1F3A63]" />
                </div>
                <div className="text-sm font-semibold text-[#1F3A63] mb-1">
                  Step {i + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Coverage Area
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            We deliver to all major cities and districts across Bangladesh.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {cities.map((city, i) => (
              <span
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:border-[#1F3A63] hover:text-[#1F3A63] transition-colors"
              >
                {city}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Shipping FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden group"
              >
                <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                  {faq.q}
                </summary>
                <div className="px-6 py-4 border-t border-gray-100 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingInformation;
