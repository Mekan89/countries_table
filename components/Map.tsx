import { FC } from "react";
import Map, { GeolocateControl } from "react-map-gl";

interface MapProps {
    latlong: number[];
    area: number;
}

const MyMap: FC<MapProps> = ({ latlong, area }) => {
    return (
        <div>
            <Map
                mapboxAccessToken={process.env.MAPBOX_TOKEN}
                initialViewState={{
                    longitude: -100,
                    latitude: 40,
                    zoom: 3.5,
                }}
                mapStyle='mapbox://styles/mapbox/streets-v11'>
                <GeolocateControl positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true} />
            </Map>
        </div>
    );
};

export default MyMap;
