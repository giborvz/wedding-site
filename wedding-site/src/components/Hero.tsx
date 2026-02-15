import { useEffect, useState } from "react";
import image from "../assets/IMG_9539_VSCO.jpg";
import { translations, type Lang } from "../utils/constants";

const weddingDate = new Date("2026-12-19T16:00:00");

const Hero = ({ lang }: { lang: Lang }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = weddingDate.getTime() - new Date().getTime();

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const t = translations[lang].hero;

  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6
                 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>

      <div className="relative z-10 bg-white/30 backdrop-blur-[2px] p-8 md:p-12 rounded-lg border border-white/20 shadow-xl">
        <h1 className="text-6xl md:text-7xl font-serif mb-4 text-black drop-shadow-lg">
          {t.coupleNames.split("&")[0]}{" "}
          <span className="text-fuchsia-700">&</span>{" "}
          {t.coupleNames.split("&")[1]}
        </h1>

        <p className="text-xl md:text-2xl tracking-wide text-black drop-shadow-md">
          {t.dateLine}
        </p>

        <p className="mt-6 text-black max-w-xl">{t.description}</p>

        {/* Countdown */}
        <div className="mt-8 grid grid-cols-4 gap-4 text-black">
          {[
            {
              label: translations[lang].hero.countdown.days,
              value: timeLeft.days,
            },
            {
              label: translations[lang].hero.countdown.hours,
              value: timeLeft.hours,
            },
            {
              label: translations[lang].hero.countdown.minutes,
              value: timeLeft.minutes,
            },
            {
              label: translations[lang].hero.countdown.seconds,
              value: timeLeft.seconds,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/40 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/30 flex flex-col items-center justify-center min-w-0"
            >
              <div className="text-2xl md:text-3xl font-semibold">
                {item.value < 10 ? `0${item.value}` : item.value}
              </div>

              <div
                className="
      mt-1
      text-[clamp(0.55rem,1.2vw,0.75rem)]
      uppercase
      tracking-[0.15em]
      opacity-70
      whitespace-nowrap
      overflow-hidden
      text-ellipsis
    "
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
