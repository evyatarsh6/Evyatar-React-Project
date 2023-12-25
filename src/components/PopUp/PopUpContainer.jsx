import { updateTooltip } from "../../actions/actions"
import { GetTooltipExist } from "../../selectors"
import { PopUpContent } from "./PopUpContent"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export const PopUp = ({PopUpRef}) => {

    const tooltipInfo = useSelector(GetTooltipExist)
    const dispatch = useDispatch()

    const tooltipExist = Object.values(tooltipInfo)

    const handleCloseTooltip = () => {
        dispatch(updateTooltip({}))
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