import Head from "next/head";
import { useRouter } from "next/router";

export const SITE_URL = "https://cielosa.com.ar";
const DEFAULT_DESCRIPTION =
  "Único centro de ventas y servicio autorizado de Cirrus para Argentina, Chile, Paraguay y Uruguay.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export const Meta = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
}) => {
  const { asPath } = useRouter();
  const url = SITE_URL + (asPath.split(/[?#]/)[0] || "/");

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <link rel="canonical" href={url} key="canonical" />
      <meta property="og:site_name" content="Cielo S.A." key="og:site_name" />
      <meta property="og:locale" content="es_AR" key="og:locale" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:image" content={image} key="og:image" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
    </Head>
  );
};
