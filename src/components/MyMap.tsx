import "mapbox-gl/dist/mapbox-gl.css";
import process from "process";
import Map from "react-map-gl";

const MyMap = ({ latlong }: { latlong: number[] }) => {
    const viewport = {
        latitude: latlong[0],
        longitude: latlong[1],
        bearing: 0,
        zoom: 5,
        pitch: 0,
    };

    return (
        <Map
            initialViewState={viewport}
            style={{ width: "100%", height: 500, marginTop: "7rem" }}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/mapbox/streets-v9'
        />
    );
};

export default MyMap;
