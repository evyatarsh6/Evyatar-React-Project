import React, { useCallback, useEffect, useMemo, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { GetMapMode, GetMapPoints } from '../../selectors';
import { updatePoint } from "../../actions/actions";
import useMap from "../../hooks/useMap";

export const BaseMap = () => {

  const mapRef = useRef();
  const mapInstance = useRef();
  const featuresRef = useRef();
  const layerRef = useRef();
  
  const mapPoints = useSelector(GetMapPoints)
  const mapModeSelector = useSelector(GetMapMode) 
  const pinModeStatus = mapModeSelector.PinMode
  const selectedTODOID = mapModeSelector.activeTODOID
  const showPointsMode = mapModeSelector.ShowPointsMode
  const clearPointsMode = mapModeSelector.ClearPointsMode
  

  const dispatch = useDispatch();

  const iconStyle = useMemo(() => new Style({
    image: new Icon({
      src: LocationPin,
      anchor: [0.5, 1],
    }),
  }), []);
  
  const createMapPoint = useMap().createPointOnMap 

  const createPointByClick = useCallback((evt) => {
    layerRef.current.getSource().clear();
    createMapPoint(
      layerRef,
      featuresRef,
      evt.coordinate,
      iconStyle
      )
      
      dispatch(updatePoint(selectedTODOID, evt.coordinate))  
    },
    [
      iconStyle,
      selectedTODOID,
      dispatch,
      createMapPoint
    ]
    );

    const handleClearPointsMode =  useCallback(() => {
      layerRef.current.getSource().clear();
    },[])

    const handleShowPointsMode = useCallback(() => {
      layerRef.current.getSource().clear();
        Object.values(mapPoints).forEach(coordinateObj => {
          createMapPoint(
          layerRef,
          featuresRef,
          coordinateObj.location,
          iconStyle
          )
        });  
      },
      [
        iconStyle,
        createMapPoint,
        mapPoints
      ]
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
      if(showPointsMode){
        handleShowPointsMode() 
      }
    }
  },[showPointsMode, handleShowPointsMode])


  useEffect(() => {
    if (mapInstance.current) {
      if(clearPointsMode){
        handleClearPointsMode() 
      }
    }
  },[clearPointsMode, handleClearPointsMode])


  useEffect(() => {
    if (mapInstance.current) {
      if (pinModeStatus) {
        mapInstance.current.on('click', createPointByClick)
      }
      else{
        mapInstance.current.un('click', createPointByClick)
      }
      }
  },
    [
      createPointByClick,
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