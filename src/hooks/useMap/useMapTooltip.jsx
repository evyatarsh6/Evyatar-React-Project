import React, { useCallback } from "react"
import { updateTooltipStatus } from '../../actions/actions'
import { useMapOverlay } from "./useMapOverlay"
import { useDispatch } from "react-redux"

export const useMapTooltip = mapContainer => {
  
  const dispatch = useDispatch()
  const { addOverlay, createNewOverlay, removeOverlay } = useMapOverlay()

  const createTooltip = useCallback((PopUpRef, coordinate, setCurrTooltip) => {
    const overlay = createNewOverlay(PopUpRef, coordinate)
    const newTooltip = addOverlay(mapContainer, overlay)
    setCurrTooltip(newTooltip)
    dispatch(updateTooltipStatus(true))

  }, [mapContainer, dispatch, addOverlay, createNewOverlay])


  const removeTooltip = useCallback((currTooltip, setCurrTooltip) => {
    removeOverlay(mapContainer, currTooltip)
    setCurrTooltip(null)
    dispatch(updateTooltipStatus(false))

  }, [mapContainer, dispatch, removeOverlay])



  return (
    {
      createTooltip: createTooltip,
      removeTooltip: removeTooltip
    }
  )
}
