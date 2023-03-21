import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="UTF-8" key="charset" />
          <meta property="og:title" content="Cielo S.A." />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://cielosa.com.ar/thumbnail.JPG"
          />
          <meta property="og:url" content="https://cielosa.com.ar/" />
          <meta name="twitter:card" content="summary_large_image" />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            key="apple"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
            key="icon32"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
            key="icon16"
          />
          <link rel="icon" href="/favicon/favicon.ico" key="favicon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
