import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  });

  const location = {
    lat: -34.458278,
    lng: -58.589501,
  };

  if (!isLoaded) {
    return <></>;
  }

  return (
    <section className="map">
      <GoogleMap
        center={location}
        zoom={14}
        mapContainerClassName="map__container"
        options={{
          fullscreenControl: false,
        }}
      >
        <Marker
          position={location}
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/Cielo/@-34.458322,-58.589389,18z/data=!4m6!3m5!1s0x95bca522ba3cf0e7:0x3b8fc2485412d4e7!8m2!3d-34.458278!4d-58.5895013!16s%2Fg%2F11cmh08w6y",
              "_blank"
            )
          }
        />
      </GoogleMap>
    </section>
  );
};

export default Map;
