import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import {defaults as defaultControls } from 'ol/control'
import {defaults as defaultinteraction } from 'ol/interaction'
import { useCallback, useEffect, useMemo, useRef } from 'react';
import {toLonLat} from 'ol/proj.js';
import {toStringHDMS} from 'ol/coordinate.js';
import { Overlay } from 'ol';
// import Control from 'ol/control/Control.js';
// import { ControlBtns } from '../containers/ControlBtns';

export const BaseMap = (props) => {

  const mapRef = useRef(null);
  const mapInstance = useRef(null);
//   const controlBtnsRef = useRef(null);
//   const layerRef = useRef(null);
//   const viewlayRef = useRef(null);

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
        // controls: [new Control({element: controlBtnsRef.current})],
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
})

  const overlay = useMemo(() => new Overlay({
    element: props.container,
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  }), [props.container]);

   const handleMapClick = useCallback((evnt) => {
        const coordinate = evnt.coordinate;
        const hdms = toStringHDMS(toLonLat(coordinate));
        console.log(hdms)
        props.container.current = <input id="popup-input-content" ref={props.content} />;
        overlay.setPosition(coordinate)

    } ,[overlay, props.container, props.content])

    useEffect(() => {
        document.querySelector('div[class*="ol-control"]').style = {
    // pointer-events: 'auto',
    // position: 'absolute',
    // display: 'flex',
    // flex-direction: 'column',
    // margin-top: '5px'
        }
    },[])


    useEffect(() => {
        if (mapInstance.current) {

            mapInstance.current.on('click', handleMapClick)            
        }
    }, [handleMapClick])
    
    useEffect(() => {
        if (props.closer) {
            props.closer.currentonclick =  () => {
                overlay.setPosition(undefined);
                props.closer.blur();
                return false;
            }
        }
    }, [props.closer,overlay])

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
