import { updateTooltipStatus } from "../../actions/actions"
import { GetTooltipStatus } from "../../selectors"
// import { GetTooltipCurrLocat } from "../../selectors"
import { PopUpContent } from "./PopUpContent"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export const PopUp = ({PopUpRef}) => {

    const dispatch = useDispatch()
    const isTooltipExist = useSelector(GetTooltipStatus)

    const handleCloseTooltip = () => {
        
        dispatch(updateTooltipStatus(false))
    }
    
    if (isTooltipExist) {
        return (
            <div id="popup" className="ol-popup" ref={PopUpRef}>
                <a href="#" id="popup-closer" className="ol-popup-closer" onClick={handleCloseTooltip}/>
                  <PopUpContent/>
            </div>
        )
    }
}