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

  const mapPoints = useSelector(GetMapPoints)

  const pinModeStatus = useSelector(GetMapPinMode)
  const selectedTODOID = pinModeStatus.activeTODOID
  const PinMode = pinModeStatus.PinMode

  const getHoverIDFunction  =  useMap().getHoverID

  const isTooltipExist = useSelector(GetTooltipStatus)
  const currViewInfo = useSelector(GetCurrViewInfo)
  const showPointsMode = useSelector(GetMapShowPointsMode)

  const dispatch = useDispatch();


  const iconStyle = useMemo(() => new Style({
    image: new Icon({
      src: LocationPin,
      anchor: [0.5, 1],
    }),
  }), []);

  const createMapPoint = useMap().createPointOnMap


  const popUpOverlay = useCallback((coordinate) => {

    return new Overlay({
      element: PopUpRef.current,
      position: coordinate,
      offset:[0,-40]
      
    });

  }, [PopUpRef]);


  const removeOverlay = useCallback(() => {

    mapContainer.current.removeOverlay(currTooltip)
    setCurrTooltip(null)
    dispatch(updateTooltipStatus(false))

  }, [currTooltip, setCurrTooltip,dispatch])

  const updateOverLay = useCallback((coordinate) => {

    const newTooltip = popUpOverlay(coordinate) 
    mapContainer.current.addOverlay(newTooltip);
    setCurrTooltip(newTooltip)
    dispatch(updateTooltipStatus(true))

  }, [popUpOverlay, dispatch, setCurrTooltip])


  const tooltipLogic = useCallback((coordinate) => {

    if(isTooltipExist){
      removeOverlay()
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
      iconStyle
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
      iconStyle,
      selectedTODOID,
      dispatch,
      createMapPoint,
      showPointsMode
    ]
    );


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
  }, [iconStyle]);

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