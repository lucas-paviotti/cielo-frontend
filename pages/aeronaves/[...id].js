import Head from "next/head";
import { fetchAPI } from "../../data/api";

export default function PlanePage({ aeronave }) {
  return (
    <>
      <Head>
        <title>
          {aeronave.attributes.manufacturer.replace(" Aircraft", " ") +
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
      <div></div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const aeronaveRes = await fetchAPI(`/aeronaves/${query.id[0]}`, {
    populate: {
      specs: "*",
      media: "*",
    },
  });

  return {
    props: {
      aeronave: aeronaveRes.data,
    },
  };
}
