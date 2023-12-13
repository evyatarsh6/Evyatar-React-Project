export const addTODO = (inputValue, cardID) => {
    return {type:  'addTODO', value: inputValue,  id: cardID}
} 

export const editTODO = (props) => {
    return {type: "editTODO", props}
} 

export const editAllTODOS = (props) => {
    return {
        type: "editAllTODOS",
        attr: {
            name: props.name,
            value: props.value
        }
    } 
}


export const changeFilterKind = (filterKind) => {
    return {type:"switchFilterKind", updateStatus: filterKind }
} 

export const changeMapPinMode = (pinMode, id) => {
    return {type:"changeMapPinMode", pinMode: pinMode, activeTODOID: id}
}


export const createNewPoint = (TODOID, Long,Lat) => {
    
    return {
        type:"changeMapPinMode",
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