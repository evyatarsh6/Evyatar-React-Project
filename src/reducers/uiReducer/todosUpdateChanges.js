const initialState  =  []

export const TODOSIDChanges = ( state = initialState , action) => {
    
    const updateState = [...state]

    switch(action.type) {
        case 'addIDToSetChanges':

            updateState.push(action._id)
            return updateState

        case 'deleteChanges':
            return initialState
            
        default:
            return state
    }
}