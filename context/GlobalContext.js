import { useState, createContext } from "react";
import { HeaderLinks, FooterLinks, SocialLinks } from "../data/LinksData";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        HeaderLinks,
        FooterLinks,
        SocialLinks,
        currentImage,
        setCurrentImage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
