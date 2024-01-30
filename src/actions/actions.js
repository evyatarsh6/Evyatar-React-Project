export const openForm = (_id,TODOKind) => {
    return {
        type: 'openForm',
        TODOID: _id,
        TODOKind: TODOKind 
    }
}

export const udpateForm = (field,fieldUpdateValue) => {
    if (field!== 'TODOID' && field!== 'TODOKind' ) {
        return {
            type: 'UpdateForm',
            field: field,
            fieldUpdateValue: fieldUpdateValue
        }
        
    }
}

export const closeForm = () => {
    return {
        type: 'closeForm'
    }
}


export const submitForm = props => {
    return {
        type: 'closeForm',
        props:props
    }
}





export const addTODO = (inputValue, cardID) => {
    return {
        type:  'addTODOMenual',
        value: inputValue,
        _id: cardID
    }
}

export const addTODOFromDB = TODO => {
    return {
        type:  'addTODOFromDB',
        TODO: TODO
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

