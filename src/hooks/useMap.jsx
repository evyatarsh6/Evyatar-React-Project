import Feature from 'ol/Feature';
import { Point } from "ol/geom";
import { useSelector } from "react-redux";
import React, { useCallback, useEffect, useMemo, useRef} from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useDispatch } from "react-redux";
import { GetMapShowPointsMode, GetMapPinMode, GetMapPoints, GetCurrViewInfo, GetTooltipStatus, GetMapTooltip} from '../selectors';
import { currMapLocation, updatePoint, updateTooltip, updateTooltipStatus}  from '../actions/actions';
import Overlay from 'ol/Overlay.js';

export const useMap = ({ PopUpRef, setHoverID}) => {

  const mapRef = useRef();
  const mapContainer = useRef();
  const featuresRef = useRef();
  const layerRef = useRef()

  const mapPoints = useSelector(GetMapPoints)

  const pinModeStatus = useSelector(GetMapPinMode)
  const selectedTODOID = pinModeStatus.activeTODOID
  const PinMode = pinModeStatus.PinMode

  const isTooltipExist = useSelector(GetTooltipStatus)
  const currViewInfo = useSelector(GetCurrViewInfo)
  const showPointsMode = useSelector(GetMapShowPointsMode)
  const currTooltip =useSelector(GetMapTooltip)

  const dispatch = useDispatch();


  const iconStyle = useMemo(() => new Style({
    image: new Icon({
      src: LocationPin,
      anchor: [0.5, 1],
    }),
  }), []);

  
  const createPoint = useCallback((layerRef,featuresRef, coordinate, style) => {

    featuresRef.current  = new Feature({
        geometry: new Point(coordinate),
    });
    featuresRef.current.setStyle(style);
    layerRef.current.getSource().addFeature(featuresRef.current);
},[])

const getHoverID = useCallback((coordinate) => {
    const TODOSIDS =  Object.keys(mapPoints)
    

    const findTODOConditinal = (ID) => {

        const xvalue = Math.abs(mapPoints[ID].location[0] ) - Math.abs(coordinate[0])
        const yvalue = Math.abs(mapPoints[ID].location[1] )- Math.abs(coordinate[1])
        const xvalueContidinal = Math.abs(xvalue)<500000
        const yvalueContidinal = Math.abs(yvalue)<500000
        
          return (
            xvalueContidinal && yvalueContidinal
        )
    }

    const wantedPointID = TODOSIDS.find(findTODOConditinal)
    
    return wantedPointID
    
}
,[mapPoints])


  const popUpOverlay = useCallback((coordinate) => {

    return new Overlay({
      element: PopUpRef.current,
      position: coordinate,
      offset:[0,-40]
      
    });

  }, [PopUpRef]);


  const removeOverlay = useCallback(() => {

    mapContainer.current.removeOverlay(currTooltip)
    dispatch(updateTooltip(null))
    dispatch(updateTooltipStatus(false))

  }, [dispatch,currTooltip])

  const updateOverLay = useCallback((coordinate) => {

    const newTooltip = popUpOverlay(coordinate) 
    mapContainer.current.addOverlay(newTooltip);
    dispatch(updateTooltipStatus(newTooltip))
    dispatch(updateTooltipStatus(true))

  }, [popUpOverlay, dispatch])


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

    createPoint(
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
      createPoint,
      showPointsMode
    ]
    );


    const handleShowPointsMode = useCallback(() => {
      layerRef.current.getSource().clear();
      Object.values(mapPoints).forEach(coordinateObj => {
        createPoint(
        layerRef,
        featuresRef,
        coordinateObj.location,
        iconStyle
        )
      });  
    },
    [
      iconStyle,
      createPoint,
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

    const wantedPointID = getHoverID(evt.coordinate)

    if (wantedPointID) {
      removeOverlay()
      updateOverLay(mapPoints[wantedPointID].location)
      setHoverID(wantedPointID)
    }
  },
  [getHoverID, setHoverID,mapPoints,updateOverLay,removeOverlay])



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