const initialState = {}

export const mapPoints = ( state = initialState , action) => {
    
    switch (action.type) {
        case "updatePoint": {
            return {...state,
                [action.TODOID]:
                {
                    ['Long']: action.location.Long,
                    ['Lat']: action.location.Lat, 
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