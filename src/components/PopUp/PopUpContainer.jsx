import { PopUpContent } from "./PopUpContent"

export const PopUp = ({ PopUpRef, currTooltip, setCurrTooltip}) => {

    if(!currTooltip){
        return
    }

    const handleCloseTooltip = () => {
        setCurrTooltip(null)
    }

        return (
            <div id="popup" className="ol-popup" ref={PopUpRef}>
                <a href="#" id="popup-closer" className="ol-popup-closer" onClick={handleCloseTooltip}/>
                  <PopUpContent/>
            </div>
        )
}