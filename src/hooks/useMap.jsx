
import Feature from 'ol/Feature';
import { Point } from "ol/geom";
import { GetMapPoints, GetTooltipStatus, GetCurrViewInfo } from "../selectors";
import React, { useCallback, useEffect, useMemo, useRef} from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import Overlay from 'ol/Overlay.js';
import { updateTooltipStatus } from '../actions/actions';



const useMap = (mapContainer, layerRef, featuresRef, PopUpRef) => {

    const mapPoints = useSelector(GetMapPoints)
    const currViewInfo = useSelector(GetCurrViewInfo)

    const dispatch = useDispatch()

    const iconStyle = useMemo(() => new Style({
        image: new Icon({
          src: LocationPin,
          anchor: [0.5, 1],
        }),
      }), []);
    
      const popUpOverlay = useCallback((coordinate) => {
        return new Overlay({
          element: PopUpRef.current,
          position: coordinate,
          offset:[0,-40]
          
        });
    
      }, [PopUpRef]);

      const removeOverlay = useCallback((currTooltip, setCurrTooltip) => {

        mapContainer.current.removeOverlay(currTooltip)
        setCurrTooltip(null)
        dispatch(updateTooltipStatus(false))

      }, [mapContainer, dispatch])
    
      const updateOverLay = useCallback((coordinate, setCurrTooltip) => {
    
        const newTooltip = popUpOverlay(coordinate) 
        mapContainer.current.addOverlay(newTooltip);
        setCurrTooltip(newTooltip)
        dispatch(updateTooltipStatus(true))
    
      }, [mapContainer, popUpOverlay, dispatch])



    const createPoint = useCallback((layerRef,featuresRef, coordinate) => {

        featuresRef.current  = new Feature({
            geometry: new Point(coordinate),
        });
        featuresRef.current.setStyle(iconStyle);
        layerRef.current.getSource().addFeature(featuresRef.current);
    },[iconStyle])

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


    const createTooltipByHover = useCallback((evt, setHoverID, currTooltip,setCurrTooltip) => {

        const wantedPointID = getHoverID(evt.coordinate)
    
        if (wantedPointID) {
          removeOverlay(currTooltip,setCurrTooltip)
          updateOverLay(mapPoints[wantedPointID].location, setCurrTooltip)
          setHoverID(wantedPointID)
        }
      },
      [getHoverID,mapPoints,updateOverLay,removeOverlay])
    

    
    const handleShowPointsMode = useCallback(() => {
        layerRef.current.getSource().clear();
        Object.values(mapPoints).forEach(coordinateObj => {
          createPoint(
          layerRef,
          featuresRef,
          coordinateObj.location,
          
          )
        });  
      },
      [
        createPoint,
        layerRef,
        featuresRef,
        mapPoints
      ]
      );

    
    return (
        {
            points: {
                createPointOnMap: createPoint,
                handleShowPointsMode: handleShowPointsMode
            },

            hover: {
                getHoverID:getHoverID,
                createTooltipByHover: createTooltipByHover
            },

            overlayFunctions: {
                updateOverLay: updateOverLay,
                removeOverlay: removeOverlay
            },
        }
    )
}

export default useMap
