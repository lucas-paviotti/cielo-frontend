import Head from "next/head";
import Error500 from "../components/Error500";

export default function page500() {
  return (
    <>
      <Head>
        <title>500 | Cielo S.A.</title>
        <meta
          name="description"
          content="Único centro de ventas y servicio autorizado para Argentina, Chile, Paraguay y Uruguay."
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <div className="wrapper">
        <div className="container">
          <Error500 />
        </div>
      </div>
    </>
  );
}
