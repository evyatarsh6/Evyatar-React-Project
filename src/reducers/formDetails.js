const initialState  =  {
    isFormVisble:false,
    TODOKind: null,
    TODOID: null,

}

export const formDetails = ( state = initialState , action) => {
    
    if(action.type === "openForm"){
        const updateForm = {
            ...state,
           ['isFormVisble']: true,
           ["TODOKind"]: action.TODOKind,
           ["TODOID"]: action.TODOID 

        }

        return updateForm 
    }

    else if (action.type === "closeForm"){
        return initialState
    }

    else{
        return state
    }
}