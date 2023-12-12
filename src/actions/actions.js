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

export const changeMapPinMode = (pinMode) => {
    return {type:"changeMapPinMode", pinMode: pinMode }
}


export const getPointValues = (Long,Lat, TODOID) => {
    return {
        [TODOID]: {
            type:"createNewPoint",
            Long: Long,
            Lat: Lat,

        }
    }
}

export const cancelPoint = TODOID => {

    return {
        [TODOID]: {
            type:"cancelPoint",
        }
    }
}