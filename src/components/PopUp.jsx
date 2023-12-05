
export const PopUp = () => {

    return (
        <div id="popup" className="ol-popup" style={
            {display: "none"}
            }>
            <a href="#" id="popup-closer" className="ol-popup-closer" style={
            {display: "none"}
            }>

            </a>
            <div id="popup-content" style={
            {display: "none"}
            }>

            </div>
        </div>
    )
}