import image from "../assets/rsvp.jpeg";
import { translations, type Lang } from "../utils/constants";

const RSVP = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].rsvp;
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6
                 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>
      <div className="relative z-10 bg-white/30 backdrop-blur-[2px] p-8 md:p-12 rounded-lg border border-white/20 shadow-xl">
        <h1 className="text-6xl font-serif mb-6 text-black">{t.title}</h1>
        <p className="mb-6 text-lg">{t.prompt}</p>
        <a
          href="https://forms.gle/dE3STMQtfcGVppY7A"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-fuchsia-700 text-amber-50 font-semibold rounded hover:bg-fuchsia-800 transition"
        >
          {t.button}
        </a>
      </div>
    </section>
  );
};

export default RSVP;
