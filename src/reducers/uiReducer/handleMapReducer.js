const initialState  =  {
    action: 'regular',
    id: null

}

export const mapTODOActions = ( state = initialState , action) => {
    switch (action.type) {
        case 'pinTODO':
            return {
                action: 'pin',
                id: action.id

            }

        case 'focusTODO':
            return {
                action: 'focus',
                id: action.id
            }
            
        default:
            return state;
    }
}