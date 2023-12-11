import React, { useCallback, useEffect, useMemo, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import { Projection, fromLonLat } from 'ol/proj';
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"

export const BaseMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const featuresRef = useRef(null);
  const layerRef = useRef(null);

  const iconStyle = useMemo(() => new Style({
    image: new Icon({
      src: LocationPin,
      anchor: [0.5, 1],
    }),
  }), []);

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
        }),
        overlays: [],
      });

      layerRef.current = new VectorLayer({
        source: new VectorSource()
      });

      mapInstance.current.addLayer(layerRef.current);
    }
  }, [iconStyle]);


  useEffect(() => {

    const handleMapClick = (evt) => {
      layerRef.current.getSource().clear();

        const markerFeature = new Feature({
          geometry: new Point(evt.coordinate),
        });
  
      markerFeature.setStyle(iconStyle);
      layerRef.current.setSource(new VectorSource())
      layerRef.current.getSource().addFeature(markerFeature);

    }

    if (mapInstance.current) {
      mapInstance.current.on('click', handleMapClick);
    }
  }, [iconStyle]);
  
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