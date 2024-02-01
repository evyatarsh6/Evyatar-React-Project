const initialState  = {
    inputValue:'',
    isEmpty: true
}

export const mainInput = ( state = initialState , action) => {

    switch(action.type) {
        case 'handleInputType':
            return {
                inputValue:action.updateInputValue,
                isEmpty: action.isEmpty
            }
        default:
            return state
    }
}