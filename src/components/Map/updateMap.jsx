import React, { useEffect, useRef, useMemo } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Style, Icon } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import Select from "ol/interaction/Select";
import Overlay from "ol/Overlay";

export const BaseMap = () => {

  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const pointRef = useRef(null);
  const layerRef = useRef(null);

  const overlay = useMemo(
    () =>
      new Overlay({
        stopEvent: false,
        element: pointRef.current,
        autoPan: {
          animation: {
            duration: 250,
          },
        },
      }),
    []
  );

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
          zoom: 1,
          rotation: 0,
          minZoom: 2,
          maxZoom: 10,
        })
      })
      ,
          layerRef.current = new VectorLayer({
          source: new VectorSource(),
        });
        mapInstance.current.addLayer(layerRef.current);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        margin: 0,
        width: '100%',
        fontFamily: 'sans-serif',
        height: '400px',
      }}
    > 
    </div>
  );
};