import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import {defaults as defaultControls } from 'ol/control'
import {defaults as defaultinteraction } from 'ol/interaction'
import { useEffect, useRef } from 'react';
import {toLonLat} from 'ol/proj.js';
import {toStringHDMS} from 'ol/coordinate.js';
import { Overlay } from 'ol';


export const BaseMap = () => {
  const mapRef = useRef(null);
  const layerRef = useRef(null);
  const mapInstance = useRef(null);
  const viewlayRef = useRef(null);

  useEffect(() => {
    if (!mapInstance.current) {
      mapInstance.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        controls: defaultControls(),
        interactions : defaultinteraction(),
        view: new View({ 
          center: [0, 0], 
          zoom: 1,
          rotation:0, 
          minZoom:2,
          maxZoom:10
      }),
        overlays: []
    })
    }

  }, []);


  useEffect(() => {

    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const closer = document.getElementById('popup-closer') 

    const overlay = new Overlay({
      element: container,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });
    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };
  
    mapRef.on('click', (evnt) => {
      const coordinate = evnt.coordinate;
      const hdms = toStringHDMS(toLonLat(coordinate));
  
    content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
    overlay.setPosition(coordinate);
  });

  },[])

    // layerRef.current = new VectorLayer({
  //   source: new VectorSource(),
  // });
  // mapInstance.current.addLayer(layerRef.current);


  return (
            <div ref={mapRef} style={{ 
                margin: 0,
                width: "100%",
                fontFamily:" sans-serif",
                backgroundColor: "#04041b",
                height: "400px"
            }}>
        </div>
    )
}