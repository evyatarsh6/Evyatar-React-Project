import { updateTooltipLocation } from "../../actions/actions"
import { GetTooltipExist } from "../../selectors"
import { PopUpContent } from "./PopUpContent"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export const PopUp = ({PopUpRef}) => {

    const tooltipLocat = useSelector(GetTooltipExist)
    const dispatch = useDispatch()

    const tooltipCurrLocat = ( tooltipLocat || tooltipLocat.length !==0 )

    const handleCloseTooltip = () => {
        console.log(tooltipLocat)
        dispatch(updateTooltipLocation(null))
    }
    
    if (tooltipCurrLocat) {
        return (
            <div id="popup" className="ol-popup" ref={PopUpRef}>
                <a href="#" id="popup-closer" className="ol-popup-closer" onClick={handleCloseTooltip}/>
                  <PopUpContent/>
            </div>
        )
    }
}