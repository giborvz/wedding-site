import { translations, type Lang } from "../utils/constants";
import image from "../assets/venue.jpg";

const Venue = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].venue;

  return (
    <>
      <div className="bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/20 shadow-xl max-w-3xl w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-4 text-black drop-shadow-lg">
            {t.title}
          </h1>
          <h3 className="text-lg md:text-xl mb-6 text-black">{t.subtitle}</h3>
          <p className="text-black italic">{t.paragraph}</p>
      </div>
    </>
  );
};

export default Venue;
