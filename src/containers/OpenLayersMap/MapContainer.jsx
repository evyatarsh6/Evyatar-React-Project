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
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      })
    }
  }, []);
  
  
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