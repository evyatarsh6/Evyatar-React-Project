import { hideTooltip } from "../../actions/actions"
import { GetTooltipExist } from "../../selectors"
import { PopUpContent } from "./PopUpContent"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export const PopUp = () => {

    const tooltipExist = useSelector(GetTooltipExist)
    const dispatch = useDispatch()

    const handleCloseTooltip = () => {
        dispatch(hideTooltip())
    }

    if (tooltipExist) {
        return (
            <div id="popup" className="ol-popup">
                <a href="#" id="popup-closer" className="ol-popup-closer" onClick={handleCloseTooltip}/>
                  <PopUpContent/>
            </div>
        )
    }
}