import React, { useCallback, useEffect, useMemo, useRef, useState} from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { GetMapShowPointsMode, GetMapPinMode, GetMapPoints, GetCurrViewInfo, GetTooltipCurrLocat } from '../../selectors';
import { currMapLocation, updatePoint, updateTooltipLocation}  from "../../actions/actions";
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

  const tooltipLocat = useSelector(GetTooltipCurrLocat)
  const isTooltipExist = (tooltipLocat.length !== 0 )

  const currViewInfo = useSelector(GetCurrViewInfo)

  const showPointsMode = useSelector(GetMapShowPointsMode)
  const dispatch = useDispatch();

  const [prevTooltip,setPrevTooltip] = useState(null)

  const iconStyle = useMemo(() => new Style({
    image: new Icon({
      src: LocationPin,
      anchor: [0.5, 1],
    }),
  }), []);

  const popUpOverlay = useCallback((coordinate) => {
    return new Overlay({
      element: PopUpRef.current,
      position: coordinate
      
    });

  }, [PopUpRef]);

  
  const createMapPoint = useMap().createPointOnMap


  
  const removeTooltipLogic = useCallback(() =>{

    if(isTooltipExist && prevTooltip){
      mapInstance.current.removeOverlay(prevTooltip)
      dispatch(updateTooltipLocation([]))
    }
  },[isTooltipExist, dispatch, prevTooltip])




  const tooltipLogic = useCallback((coordinate) => {

    removeTooltipLogic()

    const newTooltip = popUpOverlay(coordinate) 
    setPrevTooltip(newTooltip)
    mapInstance.current.addOverlay(newTooltip);
    dispatch(updateTooltipLocation(coordinate))
    console.log(mapInstance.current.getOverlays())

    }
    ,[
      removeTooltipLogic,
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