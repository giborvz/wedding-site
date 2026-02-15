import { useState } from "react";
import React from "react";
import Hero from "./components/Hero";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Registry from "./components/Registry";
import "./index.css";
import { type Lang, translations, I18nContext } from "./utils/constants";

function App() {
  const [lang, setLang] = useState<Lang>("af");

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      <div className="absolute top-4 right-4 z-50">
        <div className="inline-flex rounded-md bg-white/70 backdrop-blur-sm border border-white/30 overflow-hidden">
          <button
            onClick={() => setLang("af")}
            className={`px-3 py-1 ${lang === "af" ? "bg-fuchsia-700 text-white" : "text-black"}`}
          >
            AF
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 ${lang === "en" ? "bg-fuchsia-700 text-white" : "text-black"}`}
          >
            EN
          </button>
        </div>
      </div>

      <Hero lang={lang} />
      <Venue lang={lang} />
      <Registry lang={lang} />
      <RSVP lang={lang} />
    </I18nContext.Provider>
  );
}

export default App;
