export const addTODO = (inputValue, cardID) => {
    
    return {type:  'addTODO', value: inputValue,  id: cardID}
} 

export const editTODO = (props) => {
    return {type: "editTODO", props}
} 

export const changeFilterKind = (filterKind) => {

    return {type:"switchFilterKind", updateStatus: filterKind }
} 

export const pinWantedTODO = (ID) => {

    return {type:"pinTODO", TODOID: ID }
}

export const focusWantedTODO = (ID) => {

    return {type:"focusTODO", TODOID: ID }
}

export const jumpILBtn = (ID) => {

    return {type:"jumpILTODO", TODOID: ID }
}