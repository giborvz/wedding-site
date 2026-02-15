import { translations, type Lang } from "../utils/constants";
import image from "../assets/registry.jpeg";

const Registry = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].registry;

  return (
    <>
      <div className="bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/20 shadow-xl max-w-3xl w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-black drop-shadow-lg">
          {t.title}
        </h1>
        <p className="mb-6 text-lg md:text-xl text-black">{t.intro}</p>
        <ul className="mb-6 space-y-3">
          <li>
            <a
              href="https://www.yuppiechef.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-fuchsia-800 underline"
            >
              {t.stores[0]}
            </a>
          </li>
          <li>
            <a
              href="https://www.hirschs.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-fuchsia-800 underline"
            >
              {t.stores[1]}
            </a>
          </li>
        </ul>
        <p className="text-lg italic text-black">{t.closing}</p>
      </div>
    </>
  );
};

export default Registry;
