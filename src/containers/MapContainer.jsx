import { BaseMap } from '../components/Map/Map';
import { PopUp } from '../components/PopUp/PopUpContainer';
import { useRef } from 'react';

export const MapContainer = () => {
  return (
    <div id='map-container'>
      <BaseMap/>
      <PopUp/>
    </div>

    )
}