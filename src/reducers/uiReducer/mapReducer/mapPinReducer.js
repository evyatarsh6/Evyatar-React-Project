const initialState = {}

export const mapPoint = ( state = initialState , action) => {
    
    switch (action.type) {
        case "createNewPoint": {
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