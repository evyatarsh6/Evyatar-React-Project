import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { useMemo, useState } from 'react';
import {defaults as defaultControls } from 'ol/control'
import {defaults as defaultinteraction } from 'ol/interaction'
import { useEffect } from 'react';
import { useRef } from 'react';

export const MapContainer = () => {
  
  const [mapState, setMapState] = useState(null) 
  const mapRef = useRef();
  const layer = useMemo(() => new TileLayer({ source: new OSM() }),[])

  // useEffect(() => {
    
  //   if (!mapState) {      
  //     setMapState(new Map({
  //       target: mapRef.current, 
  //       layers: [],
  //       controls: defaultControls(),
  //       interactions : defaultinteraction(),
  //       view: new View({ 
  //         center: [0, 0], 
  //         zoom: 1,
  //         rotation:0, 
  //         minZoom:2,
  //         maxZoom:10
  //       })
  //     }));
  //   }
  // }, [mapState]);

  // // useEffect(() => {
  // //   if (layerState !== mapState.getLayers().item(0)) {
  // //       mapState.getLayers().clear();
  // //       mapState.addLayer(layerState);
  // //       layerState.setVisible(true);
  // //   }
  // // },[mapState , layerState])

  // useEffect(() => {

  //   if (!mapState) return

  //   mapState.addLayer(layer)

  //   return () => {
  //     mapState.removeLayer(layer)
  //   }
  // }, [mapState, layer])


    return (
            <div ref={mapRef.current} style={{ 
                margin: 0,
                width: "100%",
                fontFamily:" sans-serif",
                backgroundColor: "#04041b",
                height: "400px"
            }}>
        </div>
    )
}


