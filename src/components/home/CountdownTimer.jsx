import { useState, useEffect } from "react";
import { useTranslation } from "../../context/LanguageContext";

const CountdownTimer = ({ targetDate }) => {
  const { t } = useTranslation();
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ hours: h, minutes: m, seconds: s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-1.5">
      <div className="bg-white/20 rounded px-2 py-1 text-center min-w-10">
        <span className="text-lg font-bold text-white leading-none">
          {String(time.hours).padStart(2, "0")}
        </span>
        <span className="block text-[8px] text-white/70">{t("home.hrs")}</span>
      </div>
      <span className="text-white text-lg font-bold">:</span>
      <div className="bg-white/20 rounded px-2 py-1 text-center min-w-10">
        <span className="text-lg font-bold text-white leading-none">
          {String(time.minutes).padStart(2, "0")}
        </span>
        <span className="block text-[8px] text-white/70">{t("home.min")}</span>
      </div>
      <span className="text-white text-lg font-bold">:</span>
      <div className="bg-white/20 rounded px-2 py-1 text-center min-w-10">
        <span className="text-lg font-bold text-white leading-none">
          {String(time.seconds).padStart(2, "0")}
        </span>
        <span className="block text-[8px] text-white/70">{t("home.sec")}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
