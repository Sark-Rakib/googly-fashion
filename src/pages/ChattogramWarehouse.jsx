import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Clock, Phone, Package, Truck, Warehouse, Users, ArrowRight } from "lucide-react";

const ChattogramWarehouse = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/warehouses" className="hover:text-[#1F3A63] transition-colors">Warehouses</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Chattogram</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Warehouse - Chattogram</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Situated in Patenga Export Processing Zone, Chattogram, Bangladesh.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <MapPin className="w-8 h-8 text-[#1F3A63] mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
              <p className="text-gray-600 text-sm">Patenga Export Processing Zone, Chattogram, Bangladesh</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <Clock className="w-8 h-8 text-[#1F3A63] mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
              <p className="text-gray-600 text-sm">Sun-Thu: 9am - 6pm</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <Phone className="w-8 h-8 text-[#1F3A63] mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
              <p className="text-gray-600 text-sm">+880 1700-000003</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <Warehouse className="w-8 h-8 text-[#1F3A63] mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Area</h3>
              <p className="text-gray-600 text-sm">40,000 sq ft</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Offered</h2>
              <div className="space-y-4">
                {["Port Logistics", "International Shipping Preparation", "Bulk Storage", "Container Handling"].map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-[#1F3A63] flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
              <div className="space-y-4">
                {[
                  { icon: Users, text: "80+ staff members" },
                  { icon: MapPin, text: "Port proximity" },
                  { icon: Warehouse, text: "Customs bonded facility" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#1F3A63] flex-shrink-0" />
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://maps.google.com/?q=Patenga+Export+Processing+Zone+Chattogram+Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1F3A63] text-white px-6 py-3 rounded-lg hover:bg-[#172d4d] transition-colors font-medium"
            >
              View on Google Maps
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChattogramWarehouse;
