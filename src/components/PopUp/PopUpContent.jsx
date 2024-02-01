import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { GetMapPinModeActiveTODOID, GetMapPinModeData, GetMapPinModeIsActive, GetMapPoints, GetTODOList} from '../../selectors';



//need an update
export const PopUpContent = ({id}) => {

    const TODOList = useSelector(GetTODOList)
    const mapPoints = useSelector(GetMapPoints)
    const isPinModeActive = useSelector(GetMapPinModeIsActive)
    const activeTODOID = useSelector(GetMapPinModeActiveTODOID)

    let selectedTODOID = id || ''

    if (isPinModeActive && !id) {
        selectedTODOID = activeTODOID
    }
    
    const currCardInfo = TODOList[selectedTODOID]

    const locationLong = mapPoints[selectedTODOID]?.location[0]
    const locationLat =  mapPoints[selectedTODOID]?.location[1]

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