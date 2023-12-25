import { updateTooltipLocation } from "../../actions/actions"
import { GetTooltipExist } from "../../selectors"
import { PopUpContent } from "./PopUpContent"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export const PopUp = ({PopUpRef}) => {

    const tooltipLocat = useSelector(GetTooltipExist)
    const dispatch = useDispatch()

    const tooltipExist = (tooltipLocat.length !==0 )

    const handleCloseTooltip = () => {
        dispatch(updateTooltipLocation(null))
    }
    
    if (tooltipExist) {
        return (
            <div id="popup" className="ol-popup" ref={PopUpRef}>
                <a href="#" id="popup-closer" className="ol-popup-closer" onClick={handleCloseTooltip}/>
                  <PopUpContent/>
            </div>
        )
    }
}