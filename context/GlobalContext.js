import { useState, createContext } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const socials = {
    facebook: "https://www.facebook.com/CirrusAircraftArgentina/",
    instagram: "https://www.instagram.com/cirrusaircraftargentina/",
  };

  /* fetchAPI("/aeronaves", {
    populate: {
      details: "*",
      images: "*",
    },
  }); */

  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ socials, isOpen, setIsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}
