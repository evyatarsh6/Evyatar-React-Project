
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



export const useMapHover = (mapContainer, layerRef, featuresRef, PopUpRef) => {


    const mapPoints = useSelector(GetMapPoints)
    const showPointsMode = useSelector(GetMapShowPointsMode)
    const isTooltipExist = useSelector(GetTooltipStatus)
    const TODOS = useSelector(GetTODOList)
    const filterKind = useSelector(GetFilterKind)
    const currMapViewInfo = useSelector(GetCurrViewInfo)

    const pinModeStatus = useSelector(GetMapPinModeData)
    const selectedTODOID = pinModeStatus.activeTODOID


  const createTooltipByHover = useCallback((evt, setHoverID, currTooltip,setCurrTooltip) => {
    if (showPointsMode) {
      const wantedPointID = getHoverID(evt.coordinate)

      if (wantedPointID) {
        removeOverlay(currTooltip,setCurrTooltip)
        updateOverLay(getShownTODOSPoints[wantedPointID], setCurrTooltip)
        setHoverID(wantedPointID)
      }
      else{
        removeOverlay(currTooltip,setCurrTooltip)
        setHoverID(null)
      }
    }
  }, [getHoverID,getShownTODOSPoints,updateOverLay,removeOverlay, showPointsMode])




    return (
    {
        createTooltipByHover:createTooltipByHover,
        tooltipLogic:tooltipLogic
    }
    )
}