import { BaseMap } from '../components/Map/Map';
import { PopUp } from '../components/PopUp/PopUpContainer';
import { useRef } from 'react'
import { GetTooltipStatus } from '../selectors';
import { useSelector } from "react-redux"

export const MapContainer = () => {
  const PopUpRef = useRef()
  const isTooltipExist = useSelector(GetTooltipStatus)

    return (
      <div id='map-container'>
        <BaseMap PopUpRef = {PopUpRef}/>
        {
          isTooltipExist &&
            <PopUp PopUpRef = {PopUpRef}/>
        }
      </div>
  
      )
}