import { BaseMap } from '../components/Map';
import { PopUp } from '../components/PopUp';
import { useRef } from 'react';

export const MapContainer = () => {
  const container = useRef(null);
  const content = useRef(null);
  const closer = useRef(null);
  
  const popUpProps = {container: container, content: content, closer: closer}

  return (
    <div id='map-container'>
      <BaseMap props = {popUpProps}/>
      <PopUp props = {popUpProps}/>
    </div>

    )
}