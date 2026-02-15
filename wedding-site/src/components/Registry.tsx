import image from "../assets/registry.jpeg";
import { translations, type Lang } from "../utils/constants";

const Registry = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].registry;
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6
                 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="relative z-10 bg-white/30 backdrop-blur-[2px] p-8 md:p-12 rounded-lg border border-white/20 shadow-xl">
        <h1 className="text-6xl font-serif mb-6 text-black">{t.title}</h1>
        <p className="mb-6 text-lg">{t.intro}</p>
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
    </section>
  );
};

export default Registry;
