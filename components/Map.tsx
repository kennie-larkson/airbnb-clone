import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { ISearchServerProps } from "../interfaces";
import { getCenter } from "geolib";
const mapboxkey = process.env.mapbox_key;

// interface ISearchServerProps {
//   searchResults: ISearchDetails[];
// }

export default function MapComponent({ searchResults }: ISearchServerProps) {
  // Transform the searchResults object into the shape { latitude: 50.2524678965, longitude: 17.8875356}
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    // width: "100%",
    // height: "100%",
    latitude: 37.8,
    longitude: -122.4,
    zoom: 5,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/kenniecodecamp/clbknh2oc000q14pmmoqdwkyn"
      mapboxAccessToken={mapboxkey}
      style={{ width: "100", height: "100" }}
      //initialViewState={{ ...viewState }}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            color="red"

            //offset={}
          ></Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}
