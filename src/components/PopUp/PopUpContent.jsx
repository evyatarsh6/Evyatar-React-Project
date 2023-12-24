import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { GetMapPinMode, GetTodoList } from '../../selectors';


export const PopUpContent = () => {

    const pinModeStatus = useSelector(GetMapPinMode)
    const selectedTODOID = pinModeStatus.activeTODOID

    const TODOList = useSelector(GetTodoList)
    const currCardInfo = TODOList[selectedTODOID]

    const locationValues = Object.values(currCardInfo.location)
    const locationLong = locationValues[0]
    const locationLat =  locationValues[1]

    return (
              <div id="popup-content">
                <h1 id = "popup-TODO-kind">
                TODO type: {currCardInfo.kind}
                </h1>
                <h2 id = "popup-TODO-description">
                description: {currCardInfo.description}
                </h2>
                <h2 id = "popup-TODO-location">
                location: {` ${locationLong}: ${locationLat} `}
                </h2>
              </div>
    )
}