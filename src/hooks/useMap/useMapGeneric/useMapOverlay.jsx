import { useCallback } from 'react'
import Overlay from 'ol/Overlay.js'

export const useMapOverlay = () => {
  const createNewOverlay = useCallback((PopUpRef, coordinate) => new Overlay({
    element: PopUpRef.current,
    position: coordinate,
    offset: [0, -40]

  }), [])

  const addOverlay = useCallback((mapContainer, overlay) => {
    mapContainer.current.addOverlay(overlay)
  }, [])

  const removeOverlay = useCallback((mapContainer, overlay) => {
    mapContainer.current.removeOverlay(overlay)
  }, [])

  return (
    {
      createNewOverlay,
      addOverlay,
      removeOverlay
    }
  )
}
