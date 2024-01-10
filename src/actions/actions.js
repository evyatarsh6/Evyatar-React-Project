
export const updateTODOListStatus = currStatus => {
    return {
        type:"updateStatus",
        currStatus: currStatus
    }
}

export const changeFilterKind = (filterKind) => {
    return {
        type:"switchFilterKind",
        updateStatus: filterKind
    }
}

export const handleInputType = updateInputValue => {
    return {
        type:'handleInputType',
        updateInputValue: updateInputValue
    }
}

export const activeMapPinTODOMode = id => {
    return {
        type:"activeMapPinMode",
        activeTODOID: id
    }
}

export const cancelMapPinTODOMode = () => {
    return {
        type:"cancelMapPinMode",
    }
}


export const activeShowMapPointsMode = () => {
    return {
        type:"activeShowMapPointsMode"
    }
}

export const activeClearMapPointsMode = () => {

    return {
        type:"activeClearMapPointsMode"
    }
}


export const updatePoint = (TODOID, location) => {
    
    return {
        type:"updatePoint",
        TODOID:TODOID,
        location: location
    }
}


export const currMapLocation = (location) => {
    return {
        type:"currMapLocation",
        location: location
    }
}

export const focusWantedTODO = (location) => {
    return {
        type:"focusWantedTODO",
        location: location
    }
}

export const updateTooltipStatus= (tooltipStatus) => {
    return {
        type: "updateTooltipStatus",
        isShownStatus: tooltipStatus
    }
}

