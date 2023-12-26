import { BaseMap } from '../components/Map/Map';
import { PopUp } from '../components/PopUp/PopUpContainer';
import { useRef } from 'react';

export const MapContainer = () => {
  const PopUpRef = useRef()

  return (
    <div id='map-container'>
      <BaseMap PopUpRef = {PopUpRef}/>
      <PopUp PopUpRef = {PopUpRef} />
    </div>

    )
}