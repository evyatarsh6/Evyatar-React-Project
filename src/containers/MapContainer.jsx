import { BaseMap } from '../components/Map/Map';
import { useRef, useState } from 'react'
import { PopUp } from '../components/PopUp/PopUpContainer';

export const MapContainer = () => {

  const PopUpRef = useRef()
  const [currTooltip, setCurrTooltip] = useState(null)


    return (
      <div id='map-container'>
        <BaseMap PopUpRef={PopUpRef} currTooltip={currTooltip} setCurrTooltip={setCurrTooltip}/>
        <PopUp PopUpRef={PopUpRef} setCurrTooltip={setCurrTooltip}/>
      </div>
  
      )
}