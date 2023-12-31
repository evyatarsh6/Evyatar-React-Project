import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { GetMapPinMode, GetTodoList, GetMapLocation} from '../../selectors';
import useMap from "../../hooks/useMap";


export const PopUpContent = ({id}) => {

    const pinModeStatus = useSelector(GetMapPinMode)
    const TODOList = useSelector(GetTodoList)
    const currLocation = useSelector(GetMapLocation).location
    const locationLong = currLocation[0]
    const locationLat =  currLocation[1]
    let selectedTODOID = id

    if (pinModeStatus.PinMode && !id) {
        selectedTODOID = pinModeStatus.activeTODOID
    }

    const currCardInfo = TODOList[selectedTODOID]

    if (currLocation.length &&currCardInfo) {

        return (
            <div id="popup-content">
            <div id = "popup-TODO-kind">
            TODO type: {currCardInfo.kind}
            </div>
            <div id = "popup-TODO-description">
            description: {currCardInfo.description}
            </div>
            <div id = "popup-TODO-location">
            location:
                <div>
                {` ${locationLong}: ${locationLat} `}
                </div>
            </div>
            </div>
        )
    }
}