import { useState, createContext } from "react";
import { HeaderLinks, FooterLinks, SocialLinks } from "../data/LinksData";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ HeaderLinks, FooterLinks, SocialLinks, isOpen, setIsOpen }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
