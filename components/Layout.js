import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Modal } from "./Modal";

export const Layout = ({ children }) => {

    const [openModal, setOpenModal] = useState(false);

    const socials = {
        facebook: 'https://www.facebook.com/CirrusAircraftArgentina/',
        instagram: 'https://www.instagram.com/cirrusaircraftargentina/',
        envelope: 'https://www.instagram.com/cirrusaircraftargentina/'
    };

    return (
        <>
            <Header socials={socials} toggleModal={setOpenModal}></Header>
            <main className='main'>
                { children }
            </main>
            <Modal openModal={openModal} toggleModal={setOpenModal} />
            <Footer></Footer>
        </>
    );
}
