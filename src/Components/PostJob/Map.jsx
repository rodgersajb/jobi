import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import { useEffect, useState } from "react";

const Map = ({ city }) => {
  const [position, setPosition] = useState(null);
  const initialPosition = [51.505, -0.09];

  useEffect(() => {
    async function fetchPosition() {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`
      );
      const data = await response.json();

      if (data[0] && data[0].lat && data[0].lon) {
        setPosition([data[0].lat, data[0].lon]);
      }
      
    }
    fetchPosition();
  }, [city]);
  return (
    <>
      <MapContainer
        center={position || initialPosition}
        zoom={1}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position && (
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
      </MapContainer>
      ,
    </>
  );
};

export default Map;
