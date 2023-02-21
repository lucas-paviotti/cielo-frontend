import { createContext } from "react";
import { HeaderLinks, FooterLinks, SocialLinks } from "../data/LinksData";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  return (
    <GlobalContext.Provider
      value={{
        HeaderLinks,
        FooterLinks,
        SocialLinks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
