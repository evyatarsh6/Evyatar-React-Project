const initialState  = ''

export const inputValue = ( state = initialState , action) => {

    switch(action.type) {
        case 'handleInputType':
            return action.updateInputValue    
        default:
            return state
    }
}