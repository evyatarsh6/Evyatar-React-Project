const initialState = {}

export const points = (state = initialState, action) => {

    switch (action.type) {
        case "updatePoint": {
            return {
                ...state,
                [action.TODOID]:
                {
                    location: action.location
                }
            }
        }
        default:
            return state
    }
}
