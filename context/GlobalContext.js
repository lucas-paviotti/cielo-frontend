import { useState, createContext } from "react";
import { HeaderLinks, FooterLinks, SocialLinks } from "../data/LinksData";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        HeaderLinks,
        FooterLinks,
        SocialLinks,
        isOpen,
        setIsOpen,
        isGalleryOpen,
        setIsGalleryOpen,
        currentImage,
        setCurrentImage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
