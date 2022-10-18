/* Este approach es necesario porque Next.js not tiene manera aún de popular data global desde _app o componentes sin desactivar SSR. La unica manera es proveer estos datos en cada página y acceder a pageprops en _app, haciendo prop drilling */

export const HeaderLinks = [
    {
        name: 'Sobre Nosotros', 
        links:  [
            { title: "Sobre Nosotros", to: "/sobre-nosotros" }
        ]
    },
    {
        name: 'Aeronaves', 
        links:  [
            { title: "Cirrus SR22T", to: "/aeronaves/cirrus-sr22t" },
            { title: "Cirrus Vision Jet", to: "/aeronaves/cirrus-vision-jet" },
            { title: "Cirrus SR22", to: "/aeronaves/cirrus-sr22" },
            { title: "Cirrus SR20", to: "/aeronaves/cirrus-sr20" },
            { title: "Aeronaves usadas", to: "/aeronaves-usadas" },
        ]
    },
    {
        name: 'Habilitaciones', 
        links:  [
            { title: "Habilitaciones", to: "/habilitaciones" }
        ]
    },
    {
        name: 'Contactanos', 
        links:  [
            { title: "Contactanos", to: "/contactanos" }
        ]
    },
]

export const FooterLinks = [
    {
        name: 'Sobre Nosotros', 
        links:  [
            { title: "Sobre Nosotros", to: "/sobre-nosotros" }
        ]
    },
    {
        name: 'Aeronaves', 
        links:  [
            { title: "Cirrus SR22T", to: "/aeronaves/cirrus-sr22t" },
            { title: "Cirrus Vision Jet", to: "/aeronaves/cirrus-vision-jet" },
            { title: "Cirrus SR22", to: "/aeronaves/cirrus-sr22" },
            { title: "Cirrus SR20", to: "/aeronaves/cirrus-sr20" },
            { title: "Aeronaves usadas", to: "/aeronaves-usadas" },
        ]
    },
    {
        name: 'Habilitaciones', 
        links:  [
            { title: "Habilitaciones", to: "/habilitaciones" }
        ]
    },
    {
        name: 'Contactanos', 
        links:  [
            { title: "Contactanos", to: "/contactanos" }
        ]
    },
]

export const SocialLinks = {
    facebook: "https://www.facebook.com/CirrusAircraftArgentina/",
    instagram: "https://www.instagram.com/cirrusaircraftargentina/",
}