
import React, { useCallback, useMemo} from "react";
import { GetMapPoints, GetMapShowPointsMode, GetMapPinModeData, GetTooltipStatus, GetTODOList, GetFilterKind, GetCurrViewInfo} from "../../selectors";
import "ol/ol.css";
import Feature from 'ol/Feature';
import { Point } from "ol/geom";
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import Overlay from 'ol/Overlay.js';
import { MapActions, updateTooltipStatus } from '../../actions/actions';
import { isShownTODO } from "../../utils/generalUtils";
import { useMapTooltip } from "./useMapTooltip";



export const useMapLogic = (mapContainer, layerRef, featuresRef, PopUpRef) => {


    const mapPoints = useSelector(GetMapPoints)
    const showPointsMode = useSelector(GetMapShowPointsMode)
    const isTooltipExist = useSelector(GetTooltipStatus)
    const TODOS = useSelector(GetTODOList)
    const filterKind = useSelector(GetFilterKind)
    const currMapViewInfo = useSelector(GetCurrViewInfo)

    const pinModeStatus = useSelector(GetMapPinModeData)
    const selectedTODOID = pinModeStatus.activeTODOID

    const {createTooltip, removeTooltip} = useMapTooltip()



    const getHoverID = useCallback((coordinate) => {

        const getDistance = (pointA, pointB ) => {
  
          const [x1, y1]= pointA
          const [x2,y2] = pointB
  
          const a = x1 - x2
          const b = y1 - y2
          const c = Math.sqrt( a*a + b*b )
  
          return c
        }

        
      const findTODOConditinal = (ID) => {

        const currDistance = getDistance(getShownTODOSPoints[ID], coordinate)
        const distanceView = currDistance * Math.pow( currMapViewInfo.zoom,  currMapViewInfo.zoom)
        if (distanceView<= 500000 ) {
          return true
        }
        return false
      }

      const wantedPointID = shownTODOSPointsIDS.find(findTODOConditinal)
      
      return wantedPointID
      
  }
  ,[getShownTODOSPoints, shownTODOSPointsIDS, currMapViewInfo.zoom])



  const tooltipLogic = useCallback((coordinate, currTooltip,setCurrTooltip) => {

    if(isTooltipExist){
      removeTooltip(currTooltip, setCurrTooltip)
    }
    createTooltip(coordinate, setCurrTooltip)

    }
    ,[
      updateOverLay,
      removeOverlay,
      isTooltipExist,
    ])



    return (
    {
        getHoverID: getHoverID,
        tooltipLogic:tooltipLogic
    }
    )
}