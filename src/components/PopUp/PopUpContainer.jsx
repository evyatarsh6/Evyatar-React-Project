import { useState } from "react"
import { PopUpContent } from "./PopUpContent"
import { useDispatch, useSelector } from "react-redux"
import { GetTooltipStatus } from "../../selectors"
import { updateTooltipStatus } from "../../actions/actions"
import useMap from "../../hooks/useMap"


export const PopUp = ({ PopUpRef, hoverID}) => {

    const tooltipStatus = useSelector(GetTooltipStatus)

    const dispatch = useDispatch()

    const tooltipVisible = () => {
        if (!tooltipStatus) {
           return 'none' 
        }
        return 'block'
    }

    const handleCloseTooltip = () => {
        dispatch(updateTooltipStatus(false))
    }
        return (
            <div id="popup" className="ol-popup" ref={PopUpRef} style={{
                display: tooltipVisible()
            }}>
                <a href="#" id="popup-closer" className="ol-popup-closer" onClick={handleCloseTooltip}/>
                  {/* <PopUpContent id= {hoverID}/> */}
            </div>
        )
}