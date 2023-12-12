const initialState = {
    isVisible: false,
    Long: null,
    Lat: null,
    TODOID: null
}

export const mapPinReducer = ( state = initialState , action) => {
    
    switch (action.type) {
        case "createPoint": {
            return {...state,
                ['isVisible']:true,
                ['Long']: action.Long,
                ['Lat']: action.Lat, 
                ['TODOID'] : action.ID
            }
        }
        case "cancelPoint": {
            return initialState
        }
        default:
            return state
     }
    }