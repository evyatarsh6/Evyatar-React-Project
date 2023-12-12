export const addTODO = (inputValue, cardID) => {
    return {type:  'addTODO', value: inputValue,  id: cardID}
} 

export const editTODO = (props) => {
    return {type: "editTODO", props}
} 

export const changeFilterKind = (filterKind) => {
    return {type:"switchFilterKind", updateStatus: filterKind }
} 

export const changeMapMode = (pinMode) => {
    return {type:"changeMapMode", updateStatus: pinMode }
}

export const createPoint = (Long,Lat) => {
    return {type:"createPoint", Long: Long, Lat: Lat  }
}

export const cancelPoint = () => {
    return {type:"cancelPoint"}
}