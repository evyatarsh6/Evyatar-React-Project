import { updateTooltipStatus } from "../../actions/actions"
import { PopUpContent } from "./PopUpContent"
import { useDispatch } from "react-redux"

export const PopUp = ({PopUpRef}) => {

    const dispatch = useDispatch()

    const handleCloseTooltip = () => dispatch(updateTooltipStatus(false))
    
    
        return (
            <div id="popup" className="ol-popup" ref={PopUpRef}>
                <a href="#" id="popup-closer" className="ol-popup-closer" onClick={handleCloseTooltip}/>
                  <PopUpContent/>
            </div>
        )
}