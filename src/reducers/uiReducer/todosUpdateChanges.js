const initialState  =  []

export const todosSetChanges = ( state = initialState , action) => {
    
    const updateState = [...state]

    switch(action.type) {
        case 'addIDToSetChanges':

            updateState.push(action._id)
            console.log(updateState)
            return updateState

        case 'deleteChanges':
            console.log(initialState)
            return initialState
            
        default:
            // console.log(state)
            return state
    }
}