const initialState  =  new Set()

export const todosSetChanges = ( state = initialState , action) => {

    switch(action.type) {
        case 'addIDToSetChanges':
            state.add(
                {
                    [action.wantedID]: action.existInDB    
                })
            return state
        case 'deleteChanges':
            return initialState
            
        default:
            return state
    }
}