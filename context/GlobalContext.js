import { createContext } from "react";
import { SocialLinks } from "../data/LinksData";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  return (
    <GlobalContext.Provider
      value={{
        SocialLinks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
