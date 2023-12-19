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
import { GetMapMode, GetMapPoints, GetTodoList } from '../../selectors';
import { Point } from "ol/geom";
import { updatePoint } from "../../actions/actions";
import { getLongLat } from "../../utils/generalUtils";
import useMap from "../../hooks/useMap";

export const BaseMap = () => {

  const mapRef = useRef();
  const mapInstance = useRef();
  const featuresRef = useRef();
  const layerRef = useRef();
  
  const mapPoints = useSelector(GetMapPoints)
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
  
  const createMapPoint = useMap().createPointOnMap 

  
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
    if(showPointsMode){
      layerRef.current.getSource().clear();
          Object.values(mapPoints).forEach(coordinateObj => {
            createMapPoint(
            layerRef,
            featuresRef,
            [coordinateObj.Long, coordinateObj.Lat],
            iconStyle
            )
          });  
    }
  },[iconStyle, mapPoints, createMapPoint, showPointsMode])

  
  const createPoint = useCallback((evt) => {
    layerRef.current.getSource().clear();
    createMapPoint(
      layerRef,
      featuresRef,
      evt.coordinate,
      iconStyle
      )
      const coordinateObj = getLongLat(evt.coordinate)
      dispatch(updatePoint(selectedTODOID, coordinateObj.Long, coordinateObj.Lat)) 
    },
    [
      iconStyle,
      selectedTODOID,
      dispatch,
      createMapPoint
    ]
    );

  useEffect(() => {
    if (mapInstance.current) {
      if (pinModeStatus) {
        mapInstance.current.on('click', createPoint)
      }
      else{
        mapInstance.current.un('click', createPoint)
      }
      }
  },
    [
      createPoint,
      pinModeStatus
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