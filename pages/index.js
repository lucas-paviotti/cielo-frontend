import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Hero } from '../components/Hero';
import { GridMenuContainer } from '../components/GridMenuContainer';
import { CallToAction } from '../components/CallToAction';
import { TitleWithLine } from '../components/TitleWithLine';
import { AircraftCard } from '../components/AircraftCard';
import { AircraftGridContainer } from '../components/AircraftGridContainer';
import { PlaneData } from '../data/PlaneData';
import axios from 'axios';

export default function Home({ aeronaves }) {
  
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cielo S.A.</title>
        <meta name="description" content="Cielo S.A." />
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <meta property="og:title" content="Cielo S.A." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cielosa.com.ar/thumbnail.JPG" />
        <meta property="og:url" content="https://cielosa.com.ar/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${router.basePath}/favicon/favicon-32x32.png`} key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href={`${router.basePath}/favicon/favicon-16x16.png`} key="icon16" />
        <link rel="icon" href={`${router.basePath}/favicon/favicon.ico`} key="favicon" />
      </Head>

      <Hero />

      <GridMenuContainer />

      <CallToAction />

      <div className="container">
        <TitleWithLine title='Aeronaves a la venta' />
        { aeronaves.data.filter(plane => plane.attributes.featured == true).map((plane) => <AircraftCard key={plane.id} planeInfo={plane.attributes} />) }
        <AircraftGridContainer>
          { aeronaves.data.filter(plane => plane.attributes.featured == false).map((plane) => <AircraftCard key={plane.id} planeInfo={plane.attributes} />) }
        </AircraftGridContainer>
      </div>

    </>
  )
}

export async function getServerSideProps() {
  const aeronavesRes = await axios.get(`${process.env.REACT_APP_STRAPI_URL}/api/aeronaves?populate=details,images`);
  return {
    props: {
      aeronaves: aeronavesRes.data
    }
  }
}
