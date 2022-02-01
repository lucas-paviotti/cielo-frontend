import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <main className='main'>
                { children }
            </main>
            <Footer></Footer>
        </>
    );
}
