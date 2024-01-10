const initialState  = false



export const updateTODOListStatus = ( state = initialState , action) => {
    if (action.type === "updateStatus")  {
        action.currStatus
    }
    else{
        return state
    }

}