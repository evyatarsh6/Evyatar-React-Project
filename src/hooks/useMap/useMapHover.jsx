import { useCallback } from 'react'
import { GetMapShowPointsMode, GetTooltipStatus } from '../../selectors'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useMapTooltip } from './useMapTooltip'
import { useMapLogicUtils } from './useMapLogicUtils'

export const useMapHover = (mapContainer, PopUpRef) => {
  const showPointsMode = useSelector(GetMapShowPointsMode)
  const isTooltipExist = useSelector(GetTooltipStatus)

  const { getHoverID } = useMapLogicUtils()
  const { createTooltip, removeTooltip } = useMapTooltip(mapContainer)

  const createTooltipByHover = useCallback((evt, currTooltip, setCurrTooltip, setHoverID) => {
    if (showPointsMode) {
      const wantedCoordinate = evt.coordinate

      const wantedPointID = getHoverID(wantedCoordinate)

      if (wantedPointID) {
        removeTooltip(currTooltip, setCurrTooltip)
        createTooltip(PopUpRef, wantedCoordinate, setCurrTooltip)
        setHoverID(wantedPointID)
      } else {
        removeTooltip(currTooltip, setCurrTooltip)
        setHoverID(null)
      }
    }
  }, [mapContainer, PopUpRef, getHoverID, createTooltip, removeTooltip, showPointsMode])

  const tooltipLogic = useCallback((evt, currTooltip, setCurrTooltip) => {
    const wantedCoordinate = evt.coordinate

    if (isTooltipExist) {
      removeTooltip(currTooltip, setCurrTooltip)
    }
    createTooltip(PopUpRef, wantedCoordinate, setCurrTooltip)
  }
    , [
      PopUpRef,
      isTooltipExist,
      createTooltip,
      removeTooltip
    ])

  return (
    {
      createTooltipByHover,
      tooltipLogic
    }
  )
}
