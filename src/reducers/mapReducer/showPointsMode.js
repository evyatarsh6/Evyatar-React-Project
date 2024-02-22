const initialState = true

export const showPointsMode = (state = initialState, action) => {
    switch (action.type) {
        case 'activeShowMapPointsMode':
            return true

        case 'activeClearMapPointsMode':
            return false

        default:
            return state
    }
}
