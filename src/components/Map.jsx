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
  const showPointsMode = mapModeSelector.ShowPointsMode


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

  const showAllPoints = useCallback(() => {
    if (showPointsMode) {
      layerRef.current.getSource().clear();
       Object.values(GetMapPoints).forEach(coordinateObj => {
        featuresRef.current  = new Feature({
          geometry: new Point([coordinateObj.Long, coordinateObj.Lat]),
        });
        featuresRef.current.setStyle(iconStyle);
        layerRef.current.getSource().addFeature(featuresRef.current);
       });
      
    }

  },[iconStyle, mapModeSelector.ShowPointsMode])

  
  const createPoint = useCallback((evt) => {
    layerRef.current.getSource().clear();
      featuresRef.current  = new Feature({
        geometry: new Point(evt.coordinate),
      });
      featuresRef.current.setStyle(iconStyle);
      layerRef.current.getSource().addFeature(featuresRef.current);

      const coordinateObj = getLongLat(evt.coordinate)
      dispatch(updatePoint(selectedTODOID, coordinateObj.getLong, coordinateObj.getLat))  
    },
  [iconStyle, selectedTODOID, dispatch]);

  useEffect(() => {
    if (mapInstance.current) {
      if (pinModeStatus && !showPointsMode ) {
        clickEventRef.current = mapInstance.current.on('click', createPoint)
      }
      else if(showPointsMode ){
        showAllPoints()
      }

      else{
        clickEventRef.current = mapInstance.current.un('click', createPoint);
      }
      }
  },
    [
      iconStyle,
      createPoint,
      pinModeStatus,
      TODOS,
      selectedTODOID,
      showAllPoints,
      showPointsMode
    ]
  )

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