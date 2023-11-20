
const initialState = {}

export const filterTODOListReducer = ( state = initialState , action) => {

    switch(action.type) {
        case "choosenTODOS":
            return ( Object.values({...state}).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted)))
        case "deleteTODOS":
            return ( Object.values({...state}).filter( TODO  => TODO.isDeleted))
        case "normalTODOS":
            return ( Object.values({...state}).filter( TODO  => !TODO.isDeleted))
        default:
          return ([])
    }
  }

  export const addTODO = (state = initialState , action) => {
    let newTODOList = {}
    switch(action.type) {
        case "addTODO":
            newTODOList = {
                ...state ,
                [action.id]: {
                id: action.id,
                description : 'avi berger is a god', 
                kind: action.type.inputValue,
                isChoosen: false,
                isDeleted:false
                }
            }
            return (newTODOList)
            
        default:
            return state
  }
}




  export const editTODO = (state = initialState , action) => {
    let newTODOList = {}
       switch(action.type) {
        case "editTODO": 
            newTODOList = {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    isChoosen: action.isChoosen,
                    isDeleted: action.isDeleted,
                    description: action.description
                  }
                  
            }
            return newTODOList

        default:
            return state
       }
  }