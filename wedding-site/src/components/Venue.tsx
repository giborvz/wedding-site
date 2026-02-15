import image from "../assets/venue.jpg";
import { translations, type Lang } from "../utils/constants";

const Venue = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].venue;
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6
                 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>
      <div className="relative z-10 bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/20 shadow-xl">
        <h1 className="text-6xl md:text-7xl font-serif mb-4 text-black drop-shadow-lg">
          {t.title}
        </h1>
        <h3 className="text-lg mb-6 text-black">{t.subtitle}</h3>
        <p className="text-black italic">{t.paragraph}</p>
      </div>
    </section>
  );
};

export default Venue;
