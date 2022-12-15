import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContactFormModal } from "./ContactFormModal";
import { GalleryModal } from "./GalleryModal";
import { GlobalProvider } from "../context/GlobalContext";
import { ParallaxProvider } from "react-scroll-parallax";

export const Layout = ({ children }) => {
  return (
    <GlobalProvider>
      <ParallaxProvider>
        <Header />
        <main className="main">{children}</main>
        <ContactFormModal />
        <GalleryModal />
        <Footer />
      </ParallaxProvider>
    </GlobalProvider>
  );
};
