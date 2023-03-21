import Head from "next/head";
import NotFound from "../components/NotFound";

export default function page404() {
  return (
    <>
      <Head>
        <title>404 | Cielo S.A.</title>
        <meta
          name="description"
          content="Único centro de ventas y servicio autorizado para Argentina, Bolivia, Paraguay, Uruguay y Chile."
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <div className="wrapper">
        <div className="container">
          <NotFound />
        </div>
      </div>
    </>
  );
}
