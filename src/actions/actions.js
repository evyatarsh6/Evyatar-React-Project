export const addTODO = (inputValue, cardID) => {
    return {
        type:  'addTODO',
        value: inputValue,
        id: cardID
    }
} 

export const editTODO = (props) => {
    return {
        type: "editTODO",
        props
    }
} 

export const editAllTODOS = (props) => {
    return {
        type: "editAllTODOS",
        fieldUpdateValue: props.fieldUpdateValue,
        fieldKey: props.fieldKey
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

export const focusWantedTODO = (location) => {
    
    return {
        type:"focusWantedTODO",
        location: location
    }
}

