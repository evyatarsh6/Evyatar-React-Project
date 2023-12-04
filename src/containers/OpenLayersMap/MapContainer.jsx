import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { useMemo, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const MapContainer = () => {

    const [currLayer, setCurrLayer] = useState('non')
    const [wantedLayer, setWantedLayer] = useState('OSM')
    const [prevLayer, setPrevLayer] = useState('non')

    const layersObj =  {
      'OSM': new TileLayer({ source: new OSM()})
    } 

    const map = useMemo(() => {
      return new Map({
        target: 'mainMap',
        layers: [],
        view: new View({
          center: [0, 0], 
          zoom: 1,
        }),
      });
    }, []);

       map.addLayer(layersObj.OSM)


    // useEffect(() => {

    //     map.addLayer(wantedLayer);
    //     // wantedLayer.setVisible(true);
    
    //     if (currLayer !== 'non') {
    
    //         // map.removeLayer(currLayer);
    //         setPrevLayer(currLayer)
    //     }
    
    //     setCurrLayer(wantedLayer)

    // },
    // [map ,wantedLayer, prevLayer, currLayer])

    return (
            <div id= 'mainMap' style={{ 
                margin: 0,
                width: "100%",
                fontFamily:" sans-serif",
                backgroundColor: "#04041b",
                height: "400px"
            }}>
        </div>
    )
}