import { Header } from "./Header";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { ContactForm } from "./ContactForm";
import { GlobalProvider } from "../context/GlobalContext";

export const Layout = ({ children }) => {
  return (
    <GlobalProvider>
      <Header />
      <main className="main">{children}</main>
      <Modal title={"Contactanos"}>
        <ContactForm />
      </Modal>
      <Footer />
    </GlobalProvider>
  );
};
