const initialState  = null

export const map = ( state = initialState , action) => {
    switch (action.type) {
        case 'updateMap':
            // return updateMap(action.info)
            return null
        case 'removeMap':
            // const updateMap = null
            // return updateMap
            return null
        default:
            return state;
    }
}