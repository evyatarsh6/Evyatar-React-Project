import { BaseMap } from '../components/Map/Map';
import { useRef, useState } from 'react'
import { PopUp } from '../components/PopUp/PopUpContainer';

export const MapContainer = () => {
  const PopUpRef = useRef()

    return (
      <div id='map-container'>
        <BaseMap PopUpRef={PopUpRef}/>
        {/* <PopUp currTooltip={currTooltip} setCurrTooltip={setCurrTooltip} PopUpRef={PopUpRef}/> */}
      </div>
  
      )
}