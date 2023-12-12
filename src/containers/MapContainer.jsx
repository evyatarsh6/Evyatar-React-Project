import { BaseMap } from '../components/Map';
import { PopUp } from '../components/PopUp';
import { useRef } from 'react';

export const MapContainer = () => {
  return (
    <div id='map-container'>
      <BaseMap/>
      {/* <PopUp props = {popUpProps}/> */}
    </div>

    )
}