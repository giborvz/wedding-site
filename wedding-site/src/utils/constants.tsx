import React from "react";

export type Lang = "en" | "af";

export const translations = {
  en: {
    hero: {
      coupleNames: "Lize-Marié & Gibor",
      dateLine: "19 December 2026 • Stanford",
      description:
        "Join us as we celebrate our wedding surrounded by family, friends, and beautiful memories.",
      countdown: {
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
    },
    venue: {
      title: "Venue",
      subtitle:
        "Join us at the beautiful Beloftebos, located just outside of Stanford.",
      paragraph:
        "We can't wait to celebrate with you in this gorgeous setting!",
    },
    registry: {
      title: "Registry",
      intro:
        "We are grateful for your presence at our wedding. If you wish to honour us with a gift, we have registered at the following stores:",
      stores: ["Yuppiechef", "Hirsch's"],
      closing: "Your love and support are the greatest gifts we could ask for!",
    },
    rsvp: {
      title: "RSVP",
      prompt:
        "Please let us know if you will be attending our wedding by filling out the form below:",
      button: "RSVP Form",
    },
  },
  af: {
    hero: {
      coupleNames: "Lize-Marié & Gibor",
      dateLine: "19 Desember 2026 • Stanford",
      description:
        "Kom saam met ons ter viering van ons troue omring deur familie, vriende en mooi herinneringe.",
      countdown: {
        days: "Dae",
        hours: "Ure",
        minutes: "Minute",
        seconds: "Sekondes",
      },
    },
    venue: {
      title: "Plek",
      subtitle: "Sluit by ons aan by die pragtige Beloftebos, naby Stanford.",
      paragraph:
        "Ons kan nie wag om saam met julle in hierdie pragtige omgewing te vier nie!",
    },
    registry: {
      title: "Geskenkregister",
      intro:
        "Ons waardeer julle teenwoordigheid by ons troue. Indien jy ons graag met ’n geskenk wil vereer, het ons by die volgende winkels geregistreer:",
      stores: ["Yuppiechef", "Hirsch's"],
      closing:
        "Jou liefde en ondersteuning is die grootste geskenke wat ons kan vra!",
    },
    rsvp: {
      title: "RSVP",
      prompt:
        "Laat ons weet of jy by ons troue sal wees deur die vorm hieronder in te vul:",
      button: "RSVP Vorm",
    },
  },
} as const;

export const I18nContext = React.createContext<{
  lang: Lang;
  setLang?: (l: Lang) => void;
} | null>(null);

export default translations;
