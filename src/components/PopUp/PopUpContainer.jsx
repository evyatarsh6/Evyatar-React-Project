import { updateTooltipLocation } from "../../actions/actions"
import { GetTooltipCurrLocat } from "../../selectors"
import { PopUpContent } from "./PopUpContent"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export const PopUp = ({PopUpRef}) => {

    const tooltipLocat = useSelector(GetTooltipCurrLocat)
    const dispatch = useDispatch()

    const tooltipExist = ( tooltipLocat.length !== 0 )

    const handleCloseTooltip = () => {
        console.log(tooltipLocat)
        dispatch(updateTooltipLocation([]))
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