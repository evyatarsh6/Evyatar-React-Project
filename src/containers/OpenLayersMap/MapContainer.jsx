// import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM.js';
import Control from 'ol/control/Control';


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

// var scaleLineControl = new ol.control.ScaleLine();
// Map.addControl(scaleLineControl );

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
