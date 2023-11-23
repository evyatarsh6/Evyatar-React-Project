export const addTODO = (inputValue, cardID) => {
    
    return {type:  'addTODO', value: inputValue,  id: cardID}
} 

export const editTODO = (props) => {
    
    return {type: "editTODO", props}
}