import React, { useCallback, useEffect, useMemo, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import Feature from 'ol/Feature';
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { GetMapMode, GetMapPoints, GetTodoList } from '../selectors';
import { Point } from "ol/geom";
import { updatePoint, editTODO } from "../actions/actions";

export const BaseMap = () => {

  const mapRef = useRef();
  const mapInstance = useRef();
  const featuresRef = useRef();
  const layerRef = useRef();
  const clickEventRef = useRef();
  
  const TODOS = useSelector(GetTodoList)
  const mapModeSelector = useSelector(GetMapMode) 
  const pinModeStatus = mapModeSelector.PinMode
  const selectedTODOID = mapModeSelector.activeTODOID
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

  
  const createPoint = useCallback((evt) => {
    const isPointExist = Object.keys(TODOS[selectedTODOID].location).length !== 0
    if (!isPointExist) {
      featuresRef.current  = new Feature({
        geometry: new Point(evt.coordinate),
      });
      featuresRef.current.setStyle(iconStyle);
      layerRef.current.getSource().addFeature(featuresRef.current);
  
      const coordinateObj = getLongLat(evt.coordinate)
      dispatch(updatePoint(selectedTODOID, coordinateObj.getLong, coordinateObj.getLat))  
    }
  },
  [iconStyle, selectedTODOID, dispatch, TODOS]);

  useEffect(() => {
    if (mapInstance.current) {
      if (pinModeStatus) {
          if (!clickEventRef.current) {
            clickEventRef.current = mapInstance.current.on('click', createPoint)
          }
          else{
            clickEventRef.current = mapInstance.current.un('click', createPoint);
          }
        }
        else{
          clickEventRef.current = mapInstance.current.un('click', createPoint);
        }
      }
  },
    [iconStyle, createPoint, pinModeStatus, TODOS, selectedTODOID])

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