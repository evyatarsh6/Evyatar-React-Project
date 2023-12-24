import { PopUpContent } from "./PopUpContent"

export const PopUp = () => {

    return (
        <div id="popup" className="ol-popup">
            <a href="#" id="popup-closer" className="ol-popup-closer"/>
              <PopUpContent/>
        </div>
    )
}