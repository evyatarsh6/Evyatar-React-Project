export const addTODO = (inputValue, cardID) => {
    return {type:  'addTODO', value: inputValue,  id: cardID}
} 

export const editTODO = (props) => {
    return {type: "editTODO", props}
} 

export const editAllTODOS = (props) => {
    return {
        type: "editAllTODOS",
        fieldUpdateValue: props.fieldUpdateValue,
        fieldKey: props.fieldKey
    } 
}


export const changeFilterKind = (filterKind) => {
    return {type:"switchFilterKind", updateStatus: filterKind }
} 

export const activeMapPinTODOMode = (pinMode, id) => {
    return {type:"activeMapPinTODOMode", pinMode: pinMode, activeTODOID: id}
}

export const activeMapShowPointsMode = () => {
    return {type:"activeMapShowPointsMode"}
}


export const updatePoint = (TODOID, Long,Lat) => {
    
    return {
        type:"updatePoint",
        TODOID:TODOID,
        location: {
            Long: Long,
            Lat: Lat
        }
    }
}

export const DeletePoint = TODOID => {

    return {
        [TODOID]: {
            type:"cancelPoint"
        }
    }
}