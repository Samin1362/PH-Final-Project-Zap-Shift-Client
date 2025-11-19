import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);

  const position = [23.685, 90.3563];

  return (
    <div>
      <h1>We are available in 64 Districts</h1>

      <div className="border w-full h-[800px]">
        <MapContainer
          className="h-[800px]"
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center) => {
            <Marker position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Easily customizable.
              </Popup>
            </Marker>;
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
