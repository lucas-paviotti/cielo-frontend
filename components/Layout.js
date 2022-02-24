import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {

    const socials = {
        facebook: 'https://www.facebook.com/CirrusAircraftArgentina/',
        instagram: 'https://www.instagram.com/cirrusaircraftargentina/',
        envelope: 'https://www.instagram.com/cirrusaircraftargentina/'
    };

    return (
        <>
            <Header socials={socials}></Header>
            <main className='main'>
                { children }
            </main>
            <Footer></Footer>
        </>
    );
}
