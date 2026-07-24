import { features } from "../../services/config";

const FeaturesBar = () => {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-200">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white py-5 px-4"
            >
              <div className="w-9 h-9 bg-[#1F3A63]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <f.icon className="w-4 h-4 text-[#1F3A63]" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">{f.title}</p>
                <p className="text-[10px] text-gray-500">{f.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
