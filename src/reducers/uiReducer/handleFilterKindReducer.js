const initialState  =  'normal'

export const FilterKind = ( state = initialState , action) => {

    switch(action.type) {
        
        case 'switchFilterKind':
            state = action.updateStatus
    }

    return state
}