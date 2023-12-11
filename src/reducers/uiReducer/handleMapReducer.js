const initialState  = null

export const mapTODOActions = ( state = initialState , action) => {
    switch (action.type) {
        case 'pin-TODO':
            // return updateMap(action.info)
            return null
        case 'focus-TODO':
            // const updateMap = null
            return null
        default:
            return state;
    }
}