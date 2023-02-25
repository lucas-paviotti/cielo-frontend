import { useState, useEffect, createContext } from "react";
import { fetchAPI } from "../data/api";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [aircraftLinks, setAircraftLinks] = useState();
  const socialLinks = {
    facebook: "https://www.facebook.com/CirrusAircraftArgentina/",
    instagram: "https://www.instagram.com/cirrusaircraftargentina/",
  };

  const fetchLinks = async () => {
    try {
      const res = await fetchAPI("/aeronaves", {
        sort: ["featured:desc", "id:asc"],
        filters: {
          frontpage: {
            $eq: true,
          },
        },
      });

      setAircraftLinks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        socialLinks,
        aircraftLinks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
