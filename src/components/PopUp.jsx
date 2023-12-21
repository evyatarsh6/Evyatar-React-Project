import { useEffect } from "react";

export const PopUp = (props) => {

    return (
        <div ref = {props.container} id="popup" className="ol-popup">
            <a href="#" ref = {props.closer} id="popup-closer" className="ol-popup-closer"/>
            <div id="popup-content" ref ={props.content}/>
        </div>
    )
}