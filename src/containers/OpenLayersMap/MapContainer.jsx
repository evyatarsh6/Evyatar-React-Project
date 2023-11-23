import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM.js';

// new VectorLayer({
//     source: new VectorSource({
//       format: new GeoJSON(),
    //   url: geojsonData,
// new TileLayer({source: new OSM()}),
        // new VectorLayer({
        //     source: new VectorSource({
        //       format: new GeoJSON(),
        //       url: './data/countries.json',
        //     // url: 'C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/data/countries.json'
        //     }),
        //   }),
new Map({

    layers: [
        new TileLayer({source: new OSM()})

    ],
    view: new View({
        center: [0, 0],
        zoom:  1,
    }),
    target: 'map',
});

export const MapContainer = () => {
    
    return (
        <div id="map" style={{
            margin: "0",
            width: "100%",
            fontFamily:" sans-serif",
            backgroundColor: "#04041b",
            height: "400px"
        }}>

        </div>
    )
}
