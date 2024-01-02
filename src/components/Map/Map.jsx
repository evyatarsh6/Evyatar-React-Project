import React, { useCallback, useEffect, useMemo, useRef} from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { GetMapShowPointsMode, GetMapPinMode, GetMapPoints, GetCurrViewInfo, GetTooltipStatus } from '../../selectors';
import { currMapLocation, updatePoint, updateTooltipStatus}  from "../../actions/actions";
import useMap from "../../hooks/useMap";
import Overlay from 'ol/Overlay.js';

export const BaseMap = ({ PopUpRef, currTooltip, setCurrTooltip, setHoverID}) => {

  const mapRef = useRef();
  const mapContainer = useRef();
  const featuresRef = useRef();
  const layerRef = useRef()
  const dispatch = useDispatch();


  const mapPoints = useSelector(GetMapPoints)
  const isTooltipExist = useSelector(GetTooltipStatus)
  const currViewInfo = useSelector(GetCurrViewInfo)
  const showPointsMode = useSelector(GetMapShowPointsMode)
  
  const pinModeStatus = useSelector(GetMapPinMode)
  const selectedTODOID = pinModeStatus.activeTODOID
  const PinMode = pinModeStatus.PinMode

  const mapFunctions = useMap(mapContainer, layerRef,featuresRef, PopUpRef) 

  const getHoverIDFunction  =  mapFunctions.getHoverID

  const removeOverlay = useCallback(() => {
    mapFunctions.overlayFunctions.removeOverlay(currTooltip,setCurrTooltip)
  },[mapFunctions.overlayFunctions, setCurrTooltip, currTooltip])

  const updateOverLay = useCallback((coordinate) => {
    mapFunctions.overlayFunctions.updateOverLay(coordinate,setCurrTooltip)
  },[mapFunctions.overlayFunctions, setCurrTooltip])

  const createMapPoint = mapFunctions.points.createPointOnMap
  const handleShowPointsMode = mapFunctions.points.handleShowPointsMode

  
  const tooltipLogic = useCallback((coordinate) => {

    if(isTooltipExist){
      removeOverlay(coordinate)
    }
    updateOverLay(coordinate)

    }
    ,[
      updateOverLay,
      removeOverlay,
      isTooltipExist,
    ])


  const createPointByClick = useCallback((evt) => {

    createMapPoint(
      layerRef,
      featuresRef,
      evt.coordinate,
      
      )

      dispatch(updatePoint(selectedTODOID, evt.coordinate))
      dispatch(currMapLocation(evt.coordinate))

      if (!showPointsMode) {
        layerRef.current.getSource().clear();
      }

      tooltipLogic(evt.coordinate)
    },
    [
      tooltipLogic,
      selectedTODOID,
      dispatch,
      createMapPoint,
      showPointsMode
    ]
    );

  useEffect(() => {
    if (!mapContainer.current) {
      mapContainer.current = new Map({
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

      mapContainer.current.addLayer(layerRef.current);
    }
  }, []);

  const createTooltipByHover = useCallback((evt) => {

    const wantedPointID = getHoverIDFunction(evt.coordinate)

    if (wantedPointID) {
      removeOverlay()
      updateOverLay(mapPoints[wantedPointID].location)
      setHoverID(wantedPointID)
    }
  },
  [getHoverIDFunction, setHoverID,mapPoints,updateOverLay,removeOverlay])



  useEffect(() => {
    if (mapContainer.current) {
      mapContainer.current.on('pointermove', createTooltipByHover)
      if (PinMode) {
         mapContainer.current.on('click', createPointByClick)
      }

      return () => {
        mapContainer.current.un('pointermove', createTooltipByHover)
        mapContainer.current.un('click', createPointByClick);
      } 
  
    }
  },[createPointByClick,PinMode, createTooltipByHover, mapPoints])


  useEffect(()=> {

    mapContainer.current.getView().setCenter(currViewInfo.center)
    mapContainer.current.getView().setZoom(currViewInfo.zoom)
  
  },[currViewInfo])


  useEffect(() => {
    if (mapContainer.current) {
      if (showPointsMode && Object.keys(mapPoints).length ) {
        handleShowPointsMode()
      }
      else{
        layerRef.current.getSource().clear()
      }

      }
  },
  [handleShowPointsMode,showPointsMode, mapPoints])


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