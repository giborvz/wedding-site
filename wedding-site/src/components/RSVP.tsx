import { translations, type Lang } from "../utils/constants";
import image from "../assets/rsvp.jpeg";

const RSVP = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].rsvp;

  return (
    <>
      <div className="bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/20 shadow-xl max-w-3xl w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-black drop-shadow-lg">
          {t.title}
        </h1>
        <p className="mb-6 text-lg md:text-xl text-black">{t.prompt}</p>
        <a
          href="https://forms.gle/dE3STMQtfcGVppY7A"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-fuchsia-700 text-amber-50 font-semibold rounded-lg hover:bg-fuchsia-800 transition"
        >
          {t.button}
        </a>
      </div>
    </>
  );
};

export default RSVP;
