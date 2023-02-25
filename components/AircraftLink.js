import Link from "next/link";
import { getAircraftLink } from "../utils/getAircraftLink";

export const AircraftLink = ({ item, children }) => {
  return (
    <Link
      href={{
        pathname: "/aeronaves/[id]",
        query: {
          id: item.id,
        },
      }}
      as={`/aeronaves/${item.id}/${getAircraftLink(
        item.attributes.manufacturer.replace(" Aircraft", ""),
        item.attributes.model,
        item.attributes.registration
      )}`}
    >
      {children}
    </Link>
  );
};
