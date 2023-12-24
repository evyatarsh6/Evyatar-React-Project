import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { GetMapPinMode, GetTodoList, GetMapLocation} from '../../selectors';


export const PopUpContent = () => {
    const pinModeStatus = useSelector(GetMapPinMode)
    const TODOList = useSelector(GetTodoList)
    const currLocation = useSelector(GetMapLocation).location

    if (pinModeStatus.PinMode) {
        const selectedTODOID = pinModeStatus.activeTODOID
        const currCardInfo = TODOList[selectedTODOID]

        if (currLocation.length) {

            const locationLong = currLocation[0]
            const locationLat =  currLocation[1]
        
            return (
                <div id="popup-content">
                <div id = "popup-TODO-kind">
                TODO type: {currCardInfo.kind}
                </div>
                <div id = "popup-TODO-description">
                description: {currCardInfo.description}
                </div>
                <div id = "popup-TODO-location">
                location: {` ${locationLong}: ${locationLat} `}
                </div>
                </div>
            )
        }
    }
}