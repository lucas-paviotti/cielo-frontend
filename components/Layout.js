import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContactFormModal } from "./ContactFormModal";
import { GalleryModal } from "./GalleryModal";
import { GlobalProvider } from "../context/GlobalContext";
import { ParallaxProvider } from "react-scroll-parallax";
import { fetchAPI } from "../data/api";

export const Layout = ({ children }) => {
  const [links, setLinks] = useState();

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

      setLinks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <GlobalProvider>
      <ParallaxProvider>
        <Header subLinks={links} />
        <main className="main">{children}</main>
        <ContactFormModal />
        <GalleryModal />
        <Footer subLinks={links} />
      </ParallaxProvider>
    </GlobalProvider>
  );
};
