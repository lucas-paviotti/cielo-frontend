import { HeadData } from "../components/Head";

export default function Home() {
  const router = useRouter();

  console.log(router.query);

  return (
    <>
      <HeadData title="Cielo S.A." description="Cielo S.A." />

      <div></div>
    </>
  );
}