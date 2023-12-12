import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { GetMapAction } from '../selectors';

export const BaseMap = () => {

  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const featuresRef = useRef(null);
  const layerRef = useRef(null);
  const mapSelector = useSelector(GetMapAction) 
  const clickEventKeyRef = useRef();
  const dispatch = useDispatch();

  const [pointLocation,setPointLocation] = useState(null)

  const iconStyle = useMemo(() => new Style({
    image: new Icon({
      src: LocationPin,
      anchor: [0.5, 1],
    }),
  }), []);

  const getLongLat = coordinate => {
    return {getLong: coordinate[0], getLat: coordinate[1]}
  }
  
  const createPoint = useCallback((evt) => {

    featuresRef.current = new Feature({
      geometry: new Point(evt.coordinate),
    });

    featuresRef.current.setStyle(iconStyle);
    layerRef.current.getSource().addFeature(featuresRef.current);
    setPointLocation(getLongLat(evt.coordinate))
    // dispatch(createPoint(pointLocation))
    
    },[iconStyle])
      // ,dispatch,pointLocation])

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
    if (mapInstance.current) {
      if (mapSelector.pin && !pointLocation) {
        clickEventKeyRef.current = mapInstance.current.on('click', createPoint);
      } 
      else if(pointLocation || clickEventKeyRef.current) {
          clickEventKeyRef.current = mapInstance.current.un('click', createPoint);
      }

    }
  },[mapSelector.pin, iconStyle, createPoint, pointLocation])

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