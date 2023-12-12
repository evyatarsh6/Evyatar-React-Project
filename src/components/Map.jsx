import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import Feature from 'ol/Feature';
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { GetMapAction } from '../selectors';
import { getPointValues } from "../actions/actions";

export const BaseMap = () => {

  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const featuresRef = useRef(null);
  const layerRef = useRef(null);
  const clickEventKeyRef = useRef();

  const mapSelector = useSelector(GetMapAction) 
  const dispatch = useDispatch();

  const iconStyle = useMemo(() => new Style({
    image: new Icon({
      src: LocationPin,
      anchor: [0.5, 1],
    }),
  }), []);

  const getLongLat = coordinate => {
    return {getLong: coordinate[0], getLat: coordinate[1]}
  }
  
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

  
  const createPoint = useCallback( (evt) => {
    const Point = new Feature({
      geometry: new Point(evt.coordinate),
    });
  
    featuresRef.current = Point
    featuresRef.current.setStyle(iconStyle);
    layerRef.current.getSource().addFeature(featuresRef.current);
  }, [iconStyle]);

  useEffect((TODOID) => {
    
    if (mapInstance.current) {
      const TODOPointExist = Object.keys(featuresRef.current).includes(TODOID)


      if (!TODOPointExist) {
        clickEventKeyRef.current = mapInstance.current.on('click', createPoint); 
      }
      else if (TODOPointExist) {
        clickEventKeyRef.current = mapInstance.current.un('click', createPoint); 
      }
    }
  },[mapSelector.points, iconStyle, createPoint])

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