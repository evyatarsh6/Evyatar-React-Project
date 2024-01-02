import { BaseMap } from '../components/Map/Map';
import { useRef, useState } from 'react'
import { PopUp } from '../components/PopUp/PopUpContainer';

export const MapContainer = () => {

  const PopUpRef = useRef()
  const [hoverID, setHoverID] = useState(null)

    return (
      <div id='map-container'>
        <BaseMap
        PopUpRef={PopUpRef}
        setHoverID={setHoverID}
        />

        <PopUp
        PopUpRef={PopUpRef}
        hoverID={hoverID}
        />
      </div>
  
      )
}