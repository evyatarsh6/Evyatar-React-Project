import React, { useCallback, useEffect, useMemo, useRef, useState} from "react";
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

export const BaseMap = ({PopUpRef}) => {

  const mapRef = useRef();
  const mapInstance = useRef();
  const featuresRef = useRef();
  const layerRef = useRef()

  const mapPoints = useSelector(GetMapPoints)

  const pinModeStatus = useSelector(GetMapPinMode)
  const selectedTODOID = pinModeStatus.activeTODOID
  const PinMode = pinModeStatus.PinMode

  const isTooltipExist = useSelector(GetTooltipStatus)

  const currViewInfo = useSelector(GetCurrViewInfo)

  const showPointsMode = useSelector(GetMapShowPointsMode)
  const dispatch = useDispatch();

  const [currTooltip,setCurrTooltip] = useState(null)

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
      position: coordinate
      
    });

  }, [PopUpRef]);

  const tooltipLogic = useCallback((coordinate) => {

    if(isTooltipExist){
      mapInstance.current.removeOverlay(currTooltip)
      dispatch(updateTooltipStatus(false))
    }

    const newTooltip = popUpOverlay(coordinate) 
    mapInstance.current.addOverlay(newTooltip);
    setCurrTooltip(newTooltip)
    dispatch(updateTooltipStatus(true))

    }
    ,[
      isTooltipExist,
      currTooltip,
      popUpOverlay,
      dispatch,
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
      if (PinMode) {
         mapInstance.current.on('click', createPointByClick)
      }

      return () => mapInstance.current.un('click', createPointByClick);
  
    }
  },[createPointByClick,PinMode])


  useEffect(()=> {

    mapInstance.current.getView().setCenter(currViewInfo.center)
    mapInstance.current.getView().setZoom(currViewInfo.zoom)
  
  },[currViewInfo])


  useEffect(() => {
    if (mapInstance.current) {
      if (showPointsMode && Object.keys(mapPoints).length ) {
        handleShowPointsMode()
      }
      else{
        layerRef.current.getSource().clear()
      }

      }
  },
  [handleShowPointsMode,showPointsMode, mapPoints])

  useEffect(() => {
    return () => {
      mapInstance.current.removeOverlay(popUpOverlay);
    };
  }, [popUpOverlay]);
  



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