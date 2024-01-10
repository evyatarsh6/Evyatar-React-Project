const initialState  = true



export const updateTODOListStatus = ( state = initialState , action) => {
    if (action.type === "updateStatus")  {
        return action.currStatus
    }
    else{
        return state
    }

}