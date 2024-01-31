import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { GetMapPinMode, GetTODOList} from '../../selectors';



//need an update
export const PopUpContent = ({id}) => {

    const TODOList = useSelector(GetTODOList)
    const pinModeStatus = useSelector(GetMapPinMode)

    let selectedTODOID = id || ''

    if (pinModeStatus.PinMode && !id) {
        selectedTODOID = pinModeStatus.activeTODOID
    }
    
    const currCardInfo = TODOList[selectedTODOID]

    const locationLong = currCardInfo?.location[0]
    const locationLat =  currCardInfo?.location[1]

    if (currCardInfo) {
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