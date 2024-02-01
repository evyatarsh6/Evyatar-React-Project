const initialState  =  'normal'

export const filterKind = ( state = initialState , action) => {

    switch(action.type) {
        case 'switchFilterKind':
            return action.updateStatus
        default:
            return state
    }
}