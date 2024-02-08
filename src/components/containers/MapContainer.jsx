import { BaseMap } from '../Map/Map'
import { useRef, useState } from 'react'
import { PopUp } from '../PopUp/PopUpContainer'

export const MapContainer = () => {

  const PopUpRef = useRef()
  const [currTooltip, setCurrTooltip] = useState(null)
  const [hoverID, setHoverID] = useState(null)

  return (
    <div id='map-container'>
      <BaseMap
        PopUpRef={PopUpRef}
        currTooltip={currTooltip}
        setCurrTooltip={setCurrTooltip}
        setHoverID={setHoverID}
      />

      <PopUp
        PopUpRef={PopUpRef}
        hoverID={hoverID}
      />
    </div>

  )
}
