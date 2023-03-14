import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

function Map({ data }) {
  const containerStyle = {
    width: "100%",
    height: "50vh",
  };

  const center = {
    lat: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDmWrytnz9jScVJeXffWdSGhqUHVKSC0TQ">
      <GoogleMap mapContainerStyle={containerStyle} zoom={9} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
