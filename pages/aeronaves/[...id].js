import Head from "next/head";
import { fetchAPI } from "../../data/api";
import { Gallery } from "../../components/Gallery";
import { AircraftDetailCTA } from "../../components/AircraftDetailCTA";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SpecList from "../../components/SpecList";
import AvionicList from "../../components/AvionicList";
import EquipmentList from "../../components/EquipmentList";
import RemarksList from "../../components/RemarksList";
import Faq from "../../components/Faq";
import useResponsive from "../../hooks/useResponsive";

export default function PlanePage({ aeronave }) {
  const { screenType } = useResponsive();

  return (
    <>
      <Head>
        <title>
          {aeronave.attributes.manufacturer.replace(" Aircraft", "") +
            " " +
            aeronave.attributes.model +
            " | Cielo S.A."}
        </title>
        <meta name="description" content={aeronave.attributes.description} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <div className="wrapper">
        <div className="container">
          <div className="details">
            <div>
              {screenType === "DESKTOP" ? (
                <Gallery media={aeronave.attributes.media.data} />
              ) : null}
              <SpecList specs={aeronave.attributes.specs} />
              <AvionicList avionics={aeronave.attributes.avionics} />
              <EquipmentList equipment={aeronave.attributes.equipment} />
              <RemarksList remarks={aeronave.attributes.remarks} />
            </div>
            <div>
              {screenType === "MOBILE" ? (
                <Gallery media={aeronave.attributes.media.data} />
              ) : null}
              <div className="details__header">
                {aeronave.attributes.manufacturer ? (
                  <h4>{aeronave.attributes.manufacturer}</h4>
                ) : null}
                <h1>{aeronave.attributes.model}</h1>
                <div className="details__header-list">
                  {aeronave.attributes.year ? (
                    <span>{aeronave.attributes.year}</span>
                  ) : null}
                  {aeronave.attributes.registration ? (
                    <span>{aeronave.attributes.registration}</span>
                  ) : null}
                  {aeronave.attributes.serial ? (
                    <span>{aeronave.attributes.serial}</span>
                  ) : null}
                </div>
              </div>
              {aeronave.attributes.description ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  className="details__description"
                >
                  {aeronave.attributes.description}
                </ReactMarkdown>
              ) : null}
              <AircraftDetailCTA aircraft={aeronave.attributes} />
            </div>
          </div>
          <Faq questions={aeronave.attributes.question} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const aeronaveRes = await fetchAPI(`/aeronaves/${query.id[0]}`, {
    populate: {
      specs: "*",
      avionics: "*",
      media: "*",
      equipment: "*",
      remarks: "*",
      question: "*",
    },
  });

  return {
    props: {
      aeronave: aeronaveRes.data,
    },
  };
}
