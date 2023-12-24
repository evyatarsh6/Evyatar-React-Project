import { PopUpContent } from "./PopUpContent"

export const PopUp = () => {
    const avi = true
    if (!avi) {
        return (
            <div id="popup" className="ol-popup">
                <a href="#" id="popup-closer" className="ol-popup-closer"/>
                  <PopUpContent/>
            </div>
        )
    }
}