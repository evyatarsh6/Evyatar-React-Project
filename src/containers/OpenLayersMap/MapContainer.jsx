import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { useState } from 'react';
import { useRef } from 'react';
import { current } from '@reduxjs/toolkit';

export const MapContainer = (mapID) => {


    const [currLayer, setCurrLayer] = useState('OSM')
    const [wantedLayer, setWantedLayer] = useState('OSM')
    const [prevLayer, setPrevLayer] = useState('OSM')
    
    const mapContainerRef = useRef()
    let inititalMap = true
    const layers = {'OSM': OSM }
    mapID = 'mainMap'
    mapContainerRef.current = mapID


    const showLayer = () => {
        let map
        if (inititalMap) {
            inititalMap= false;
            const layerInstance = new layers[wantedLayer]();
            setCurrLayer(wantedLayer);
            map = new Map({
                target: mapContainerRef.current,
                layers: [
                    new TileLayer
                    ({ source: layerInstance }
                        )],
                view: new View({
                    center: [0, 0],
                    zoom: 1,
                }),
            });
        } 
        else {

            map.addLayer(wantedLayer);
            wantedLayer.setVisible(true);
            map.removeLayer(currLayer);
            setCurrLayer(wantedLayer)
            setPrevLayer(currLayer)
        }
    };

    return (
        <div id={mapContainerRef.current} style={{ 
            position:'sticky',
            margin: "0",
            width: "100%",
            fontFamily:" sans-serif",
            backgroundColor: "#04041b",
            height: "400px"
        }}>

        </div>
    )
}

