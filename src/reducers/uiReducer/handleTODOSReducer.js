
const initialState  = { 
    id : null,
    description : 'avi berger is a god',
    kind :null,
    isChoosen : false,
    isDeleted : false
}

export const filterTODOListReducer = ( state = initialState , action) => {

    const backToStateObj = (TODOListArr = [{id :null}]) => {
    let newStateObj = {}
        TODOListArr.forEach(TODO => {
            newStateObj[TODO.id] = TODO  
        })
        return newStateObj
    }

    switch(action.type) {
        case "choosenTODOS":
           return backToStateObj(Object.values({...state}).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted)))
        case "deleteTODOS":
            return backToStateObj(Object.values({...state}).filter( TODO  => TODO.isDeleted))
        case "normalTODOS":
            return backToStateObj(Object.values({...state}).filter( TODO  => !TODO.isDeleted))
        default:
            return backToStateObj(Object.values({...state}))
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
                description : initialState.description, 
                kind: action.value,
                isChoosen: initialState.isChoosen,
                isDeleted:initialState.isDeleted
                }
            }
            return (newTODOList)
        default:
            return {...state}
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