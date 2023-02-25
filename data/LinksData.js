/* Este approach es necesario porque Next.js no tiene manera aún de popular data global desde _app o componentes sin desactivar SSR. La unica manera es proveer estos datos en cada página y acceder a pageprops en _app, haciendo prop drilling */

export const socialLinks = {
  facebook: "https://www.facebook.com/CirrusAircraftArgentina/",
  instagram: "https://www.instagram.com/cirrusaircraftargentina/",
};
