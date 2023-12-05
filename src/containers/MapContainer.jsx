import { BaseMap } from '../components/Map';
import { PopUp } from '../components/PopUp';

export const MapContainer = () => {

  return (
    <div id='map-container'>
      <BaseMap/>
      <PopUp/>
    </div>

    )
}