


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
import { useMapOverlay } from "./useMapOverlay";



export const useMapTooltip = ( mapContainer, PopUpRef) => {

    const isTooltipExist = useSelector(GetTooltipStatus)

    const {addOverlay, createNewOverlay, removeOverlay} = useMapOverlay()

    const tooltipLogic = useCallback((coordinate, currTooltip,setCurrTooltip) => {

        const overlay = createNewOverlay(PopUpRef, coordinate)
        
        if(isTooltipExist){
          removeOverlay(mapContainer, overlay)
        }

        addOverlay(mapContainer, overlay)
    
        }
        ,[
            PopUpRef,
            addOverlay,
          removeOverlay,
          isTooltipExist,
        ])


    return (
    {
    }
    )
}










    //   const removeOverlay = useCallback((mapContainer, currTooltip, setCurrTooltip) => {
    //     mapContainer.current.removeOverlay(currTooltip)
    //     setCurrTooltip(null)
    //     // dispatch(updateTooltipStatus(false))

    //   }, [])
    // //   }, [dispatch])
    
    const updateOverLay = useCallback((coordinate, setCurrTooltip) => {
    
        const newTooltip = popUpOverlay(coordinate) 
        mapContainer.current.addOverlay(newTooltip);
        setCurrTooltip(newTooltip)
        dispatch(updateTooltipStatus(true))
    
      }, [mapContainer, popUpOverlay, dispatch])


