
import React, { useCallback, useMemo} from "react";
import { GetMapPoints, GetMapShowPointsMode, GetMapPinMode, GetTooltipStatus, GetTODOList, GetFilterKind} from "../selectors";
import "ol/ol.css";
import Feature from 'ol/Feature';
import { Point } from "ol/geom";
import { Icon, Style } from "ol/style";
import LocationPin from "C:/Users/evyas/OneDrive/Documents/GitHub/Evyatar-React-Project/src/assets/marker-icon.png"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import Overlay from 'ol/Overlay.js';
import { MapActions, updateTooltipStatus } from '../actions/actions';
import { isShownTODO } from "../utils/generalUtils";



const useMap = (mapContainer, layerRef, featuresRef, PopUpRef) => {

    const mapPoints = useSelector(GetMapPoints)
    const showPointsMode = useSelector(GetMapShowPointsMode)
    const isTooltipExist = useSelector(GetTooltipStatus)
    const TODOS = useSelector(GetTODOList)
    const filterKind = useSelector(GetFilterKind)

    const pinModeStatus = useSelector(GetMapPinMode)
    const selectedTODOID = pinModeStatus.activeTODOID
  
    const dispatch = useDispatch()

    const iconStyle = useMemo(() => new Style({
        image: new Icon({
          src: LocationPin,
          anchor: [0.5, 1],
        }),
      }), []);

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


      const shownTODOSPointsFunc = useCallback(() => {
        return filterShownTODOSPoints()
      }, [filterShownTODOSPoints])

      const getShownTODOSPoints = shownTODOSPointsFunc()

      const shownTODOSPointsIDSFunc = useCallback(() => {
        return Object.keys(getShownTODOSPoints)
      }, [getShownTODOSPoints])

      
      const shownTODOSPointsIDS = shownTODOSPointsIDSFunc()


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



    const createPoint = useCallback((layerRef,featuresRef, ID, coordinate) => {
        const newFeature = new Feature({
          geometry: new Point(coordinate),
        });
      
        newFeature.setStyle(iconStyle);
      
        featuresRef.current[ID] = newFeature;
        layerRef.current.getSource().addFeature(newFeature);

    },[iconStyle])

    const removePoint = useCallback((layerRef,featuresRef, ID) => {
      const wantedFeature = featuresRef.current[ID] ;
      layerRef.current.getSource().removeFeature(wantedFeature);
    },[])



    const getHoverID = useCallback((coordinate) => {

        const findTODOConditinal = (ID) => {

            const xvalue = Math.abs(getShownTODOSPoints[ID][0] ) - Math.abs(coordinate[0])
            const yvalue = Math.abs(getShownTODOSPoints[ID][1] )- Math.abs(coordinate[1])
            const xvalueContidinal = Math.abs(xvalue)<500000
            const yvalueContidinal = Math.abs(yvalue)<500000
            
              return (
                xvalueContidinal && yvalueContidinal
            )
        }

        const wantedPointID = shownTODOSPointsIDS.find(findTODOConditinal)
        
        return wantedPointID
        
    }
    ,[getShownTODOSPoints, shownTODOSPointsIDS])


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

      const pointsOnMap = useCallback(() => {
        if (showPointsMode) {
            handleShowPointsMode()
          }
          else{
            layerRef.current.getSource().clear()
          }
      },[handleShowPointsMode, layerRef, showPointsMode])

      const tooltipLogic = useCallback((coordinate, currTooltip,setCurrTooltip) => {

        if(isTooltipExist){
          removeOverlay(currTooltip, setCurrTooltip)
        }
        updateOverLay(coordinate, setCurrTooltip)
    
        }
        ,[
          updateOverLay,
          removeOverlay,
          isTooltipExist,
        ])

  const createPointByClick = useCallback((evt,currTooltip,setCurrTooltip,ID) => {
    removePoint(layerRef, featuresRef, ID)

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
      tooltipLogic(evt.coordinate, currTooltip,setCurrTooltip)
    }
  },
  [
    showPointsMode,
    layerRef,
    featuresRef,
    tooltipLogic,
    selectedTODOID,
    dispatch,
    createPoint,
    removePoint
  ]
  );

    
    return (
        {
            points: {
                createPointOnMap: createPoint,
                createPointByClick: createPointByClick,
                handleShowPointsMode: handleShowPointsMode,
                pointsOnMap:pointsOnMap

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
