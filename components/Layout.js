import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContactFormModal } from "./ContactFormModal";
import { GalleryModal } from "./GalleryModal";
import { GlobalProvider } from "../context/GlobalContext";

export const Layout = ({ children }) => {
  return (
    <GlobalProvider>
      <Header />
      <main className="main">{children}</main>
      <ContactFormModal />
      <GalleryModal />
      <Footer />
    </GlobalProvider>
  );
};
