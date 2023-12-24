import { PopUpContent } from "./PopUpContent"

export const PopUp = () => {

    return (
        <div
        //  ref = {props.container}
        id="popup" className="ol-popup">
            <a href="#"
            //  ref = {props.closer}
              id="popup-closer" className="ol-popup-closer"/>
              <PopUpContent/>

        </div>
    )
}