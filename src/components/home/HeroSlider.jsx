import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "NEW COLLECTION",
    bigText: "WINTER FASHION",
    discount: "UP TO 50% OFF",
    cta: "SHOP NOW",
    link: "/shop?category=men",
    bg: "from-blue-900 to-blue-700",
    img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80",
    textColor: "text-white",
  },
  {
    title: "SUMMER SALE",
    bigText: "SUMMER COLLECTION",
    discount: "UP TO 40% OFF",
    cta: "SHOP NOW",
    link: "/shop?category=women",
    bg: "from-rose-600 to-pink-500",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    textColor: "text-white",
  },
  {
    title: "FRESH LOOKS",
    bigText: "NEW ARRIVALS",
    discount: "UP TO 30% OFF",
    cta: "EXPLORE",
    link: "/new-arrivals",
    bg: "from-emerald-700 to-emerald-500",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    textColor: "text-white",
  },
  {
    title: "PREMIUM PICKS",
    bigText: "PREMIUM FASHION",
    discount: "LUXURY COLLECTION",
    cta: "DISCOVER",
    link: "/shop",
    bg: "from-amber-800 to-amber-600",
    img: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=800&q=80",
    textColor: "text-white",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative h-full rounded-xl overflow-hidden shadow-md group">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        // navigation
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={slide.img}
                alt={slide.bigText}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-linear-to-r ${slide.bg} opacity-75`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-12">
                <span
                  className={`text-xs font-semibold tracking-[0.2em] uppercase ${slide.textColor} opacity-80 mb-2`}
                >
                  {slide.title}
                </span>
                <h2
                  className={`text-3xl lg:text-4xl font-extrabold ${slide.textColor} leading-tight mb-1`}
                >
                  {slide.bigText}
                </h2>
                <p
                  className={`text-lg lg:text-xl font-bold ${slide.textColor} mb-5`}
                >
                  {slide.discount}
                </p>
                <Link
                  to={slide.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-sm rounded-lg hover:bg-gray-100 transition-all shadow-lg w-max"
                >
                  {slide.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
