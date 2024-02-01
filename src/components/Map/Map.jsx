import React, { useCallback, useEffect, useRef} from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { GetMapPinMode, GetCurrViewInfo } from '../../selectors';
import useMap from "../../hooks/useMap";

export const BaseMap = ({ PopUpRef, currTooltip, setCurrTooltip, setHoverID}) => {

  const mapRef = useRef();
  const mapContainer = useRef();
  const featuresRef = useRef({});
  const layerRef = useRef()
  
  const currViewInfo = useSelector(GetCurrViewInfo)
  const pinModeStatus = useSelector(GetMapPinMode)
  const PinMode = pinModeStatus.PinMode
  const activeTODOID =pinModeStatus.activeTODOID
  
  const mapFunctions = useMap(mapContainer, layerRef,featuresRef, PopUpRef) 

  const createPointByClick = useCallback((evt) => 
    mapFunctions.points.createPointByClick(evt,currTooltip,setCurrTooltip,activeTODOID)
    ,[mapFunctions.points, currTooltip,setCurrTooltip, activeTODOID]);

  const createTooltipByHover  =
  useCallback((evt) => mapFunctions.hover.
  createTooltipByHover(evt,setHoverID,currTooltip,setCurrTooltip)
  ,[mapFunctions.hover, setHoverID,currTooltip, setCurrTooltip]) 

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

  useEffect(() => {
    if (mapContainer.current) {
      mapContainer.current.on('pointermove', createTooltipByHover)
      
      if (PinMode&& activeTODOID) {
         mapContainer.current.on('click', createPointByClick)
        }
        
        return () => {
          mapContainer.current.un('pointermove', createTooltipByHover)
          mapContainer.current.un('click', createPointByClick);
          
      } 
  
    }
  },[createPointByClick,PinMode, createTooltipByHover, activeTODOID])


  useEffect(()=> {

    if (mapContainer.current) {
      mapContainer.current.getView().setCenter(currViewInfo.center)
      mapContainer.current.getView().setZoom(currViewInfo.zoom)
    }

  
  },[currViewInfo])


  useEffect(() => {
    if (mapContainer.current) {
      mapFunctions.points.pointsOnMap()
    }
  },
  [mapFunctions.points])


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