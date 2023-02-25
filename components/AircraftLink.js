import Link from "next/link";
import { getAircraftLink } from "../utils/getAircraftLink";

export const AircraftLink = ({ item, children }) => {
  return (
    <Link
      href={{
        pathname: "/aeronaves/[name]",
        query: {
          id: item.id,
        },
      }}
      as={`/aeronaves/${getAircraftLink(
        item.attributes.manufacturer,
        item.attributes.model,
        item.attributes.registration
      )}`}
    >
      {children}
    </Link>
  );
};
