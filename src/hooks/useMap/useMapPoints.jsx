import { useCallback, useMemo } from 'react'
import { GetMapPoints, GetMapShowPointsMode, GetMapPinModeData, GetTODOList, GetFilterKind } from '../../selectors'
import 'ol/ol.css'
import Feature from 'ol/Feature'
import { Point } from 'ol/geom'
import { Icon, Style } from 'ol/style'
import LocationPin from '../../../../Evyatar-React-Project/src/assets/marker-icon.png'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { MapActions } from '../../actions/actions'
import { isShownTODO } from '../../utils/generalUtils'
import { useMapFeatures } from './useMapGeneric/useMapFeatures'
import { useMapHover } from './useMapHover'
import { useDispatch } from 'react-redux'

export const useMapPoints = (mapContainer, layerRef, featuresRef, PopUpRef) => {
  const mapPoints = useSelector(GetMapPoints)
  const showPointsMode = useSelector(GetMapShowPointsMode)
  const TODOS = useSelector(GetTODOList)
  const filterKind = useSelector(GetFilterKind)
  const dispatch = useDispatch()

  const pinModeStatus = useSelector(GetMapPinModeData)
  const selectedTODOID = pinModeStatus.activeTODOID

  const { createFeature, removeFeature } = useMapFeatures()
  const { tooltipLogic } = useMapHover(mapContainer, PopUpRef)

  const { updatePoint } = MapActions

  const iconStyle = useMemo(() => new Style({
    image: new Icon({
      src: LocationPin,
      anchor: [0.5, 1]
    })
  }), [])

  const pointTemplate = useCallback(coordinate => {
    const newFeature = new Feature({
      geometry: new Point(coordinate)
    })

    newFeature.setStyle(iconStyle)

    return newFeature
  }, [iconStyle])

  const createPoint = useCallback((layerRef, featuresRef, ID, coordinate) => {
    const newFeature = pointTemplate(coordinate)
    createFeature(layerRef, featuresRef, ID, newFeature)
  }, [pointTemplate, createFeature])

  const removePoint = useCallback((layerRef, featuresRef, ID) => {
    removeFeature(layerRef, featuresRef, ID)
  }, [removeFeature])

  const createPointByClick = useCallback((evt, currTooltip, setCurrTooltip, ID) => {
    removePoint(layerRef, featuresRef, ID)
    createPoint(
      layerRef,
      featuresRef,
      ID,
      evt.coordinate
    )
    dispatch(updatePoint(selectedTODOID, evt.coordinate))

    if (!showPointsMode) {
      layerRef.current.getSource().clear()
    } else {
      tooltipLogic(evt, currTooltip, setCurrTooltip)
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
      selectedTODOID
    ]
  )

  const filterShownTODOSPoints = useCallback(() => {
    const shownPoints = {}
    const allMapPointsIDS = Object.keys(mapPoints)
    allMapPointsIDS.forEach(pointID => {
      if (isShownTODO(TODOS[pointID], filterKind)) {
        shownPoints[pointID] = TODOS[pointID].location
      }
    })
    return shownPoints
  }, [TODOS, filterKind, mapPoints])

  const getShownTODOSPoints = filterShownTODOSPoints()

  const handleShowPointsMode = useCallback(() => {
    if (!selectedTODOID) {
      layerRef.current.getSource().clear()
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
  )

  const pointsOnMap = useCallback(() => {
    if (showPointsMode) {
      handleShowPointsMode()
    } else {
      layerRef.current.getSource().clear()
    }
  }, [handleShowPointsMode, layerRef, showPointsMode])

  return (
    {
      createPointOnMap: createPoint,
      removePoint,
      createPointByClick,
      handleShowPointsMode,
      pointsOnMap
    }
  )
}
