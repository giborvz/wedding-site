import { useState } from "react";
import React from "react";
import Hero from "./components/Hero";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Registry from "./components/Registry";
import "./index.css";
import { type Lang, I18nContext } from "./utils/constants";

// Import images for each section
import heroImage from "./assets/IMG_9539_VSCO.jpg";
import venueImage from "./assets/venue.jpg";
import registryImage from "./assets/registry.jpeg";
import rsvpImage from "./assets/rsvp.jpeg";

function App() {
  const [lang, setLang] = useState<Lang>("af");

  // Array of sections with component and its background
  const sections = [
    { Component: Hero, image: heroImage },
    { Component: Venue, image: venueImage },
    { Component: Registry, image: registryImage },
    { Component: RSVP, image: rsvpImage },
  ];

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {/* Language Toggle */}
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

      {/* Sections with sticky backgrounds */}
      {sections.map(({ Component, image }, idx) => (
        <section key={idx} className="relative h-[120vh] w-full">
          {/* Sticky Background */}
          <div className="absolute inset-0">
            <div className="sticky top-0 h-screen w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="relative z-10 h-screen flex items-center justify-center px-6 text-center">
            <Component lang={lang} />
          </div>
        </section>
      ))}
    </I18nContext.Provider>
  );
}

export default App;
