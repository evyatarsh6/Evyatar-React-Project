
import React, { useCallback, useMemo} from "react";
import { GetMapPoints, GetMapShowPointsMode, GetMapPinModeData, GetTooltipStatus, GetTODOList, GetFilterKind, GetCurrViewInfo} from "../../selectors";
import "ol/ol.css";
import Feature from 'ol/Feature';
import { Point } from "ol/geom";
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { MapActions } from '../../actions/actions';
import { isShownTODO } from "../../utils/generalUtils";
import { useMapFeatures } from "./useMapFeatures";
import { useMapTooltip } from "./useMapTooltip";
import { useMapHover } from "./useMapHover";



export const useMapPoints = (mapContainer, layerRef, featuresRef, PopUpRef) => {


    const mapPoints = useSelector(GetMapPoints)
    const showPointsMode = useSelector(GetMapShowPointsMode)
    const TODOS = useSelector(GetTODOList)
    const filterKind = useSelector(GetFilterKind)


    const pinModeStatus = useSelector(GetMapPinModeData)
    const selectedTODOID = pinModeStatus.activeTODOID

    const { createFeature, removeFeature} = useMapFeatures()
    const { createTooltip,removeTooltip } = useMapTooltip()
    const {tooltipLogic} = useMapHover(mapContainer, PopUpRef)

    const iconStyle = useMemo(() => new Style({
        image: new Icon({
          src: LocationPin,
          anchor: [0.5, 1],
        }),
      }), []);

      const pointTemplate = useCallback((coordinate) => {
        const newFeature = new Feature({
          geometry: new Point(coordinate),
        });
      
        newFeature.setStyle(iconStyle);

        return newFeature
      },[iconStyle])

    
    const createPoint = useCallback((layerRef,featuresRef, ID, coordinate) => {
      
      const newFeature = pointTemplate(coordinate)
      createFeature(layerRef,featuresRef, ID,newFeature)

    },[pointTemplate, createFeature])

    const removePoint = useCallback((layerRef,featuresRef, ID) => {
      removeFeature(layerRef,featuresRef, ID)
    },[])


    const createPointByClick = useCallback((evt,currTooltip,setCurrTooltip,ID) => {
      removePoint(layerRef,featuresRef, ID)
      createPoint(
        layerRef,
        featuresRef,
        ID,
        evt.coordinate,
      )
      dispatch(MapActions.updatePoint(selectedTODOID, evt.coordinate))

        if (!showPointsMode) {
          layerRef.current.getSource().clear();
        }
        else{
          tooltipLogic(evt, currTooltip,setCurrTooltip)
        }
      },
      [
        removePoint,
        createPoint,
        layerRef,
        featuresRef,
        dispatch,
        showPointsMode,
        tooltipLogic,
        selectedTODOID,
      ]
      );
      



      const shownTODOSPointsFunc = useCallback(() => {
        return filterShownTODOSPoints()
      }, [filterShownTODOSPoints])

      const getShownTODOSPoints = shownTODOSPointsFunc()

      const handleShowPointsMode = useCallback(() => {
        if (!selectedTODOID) {
          layerRef.current.getSource().clear();
          Object.keys(getShownTODOSPoints).forEach(pointID => {
            createPoint(
              layerRef,
              featuresRef,
              pointID,
              getShownTODOSPoints[pointID]
              )          
            })
        }
      },
      [
        createPoint,
        layerRef,
        featuresRef,
        getShownTODOSPoints,
        selectedTODOID
      ]
      );

      const filterShownTODOSPoints = useCallback(() => {
        const shownPoints = {}
        const allMapPointsIDS =  Object.keys(mapPoints)
        allMapPointsIDS.forEach(pointID => {
           if (isShownTODO(TODOS[pointID], filterKind)) {
            shownPoints[pointID] = TODOS[pointID].location 
           }
        });
        return shownPoints
      },[TODOS, filterKind,mapPoints])



      const shownTODOSPointsIDSFunc = useCallback(() => {
        return Object.keys(getShownTODOSPoints)
      }, [getShownTODOSPoints])

      
      const shownTODOSPointsIDS = shownTODOSPointsIDSFunc()


        

        
        const pointsOnMap = useCallback(() => {
            if (showPointsMode) {
                handleShowPointsMode()
              }
              else{
                layerRef.current.getSource().clear()
              }
          },[handleShowPointsMode, layerRef, showPointsMode])
    



    return (
    {
        createPointOnMap: createPoint,
        removePoint:removePoint,
        createPointByClick: createPointByClick,

        
        handleShowPointsMode: handleShowPointsMode,
        pointsOnMap:pointsOnMap
    }
    )
}