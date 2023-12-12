const initialState = {}

export const mapPointsReducer = ( state = initialState , action) => {
    
    switch (action.type) {
        case "createNewPoint": {
            return {...state,
                [action.TODOID]:
                {
                    ['isVisible']:true,
                    ['Long']: action.Long,
                    ['Lat']: action.Lat, 
                }
            }
        }
        case "cancelPoint": {
            return {...state,
                [action.TODOID]: null
            }
            
        }
        default:
            return state
     }
    }