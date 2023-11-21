
const initialState  = { 
    id : 0,
    description : 'avi berger is a god',
    kind :'avi',
    isChoosen : false,
    isDeleted : false
}

let backUpState = {} 

export const TODOS = ( state = initialState , action) => {
    
    let newStateObj = {}
    let newBackUpStateObj = {}
    

    const backToStateObj = (TODOListArr = []) => {
        let updateStateObj = {}
        TODOListArr.forEach(TODO => {
            updateStateObj[TODO.id] = TODO  
        })
        return updateStateObj
    }

        switch(action.type) {
            case "choosenTODOS":
                return backToStateObj(Object.values(backUpState).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted)))

            case "deleteTODOS":
                return backToStateObj(Object.values(backUpState).filter( TODO  => TODO.isDeleted))

            case "normalTODOS":
                return backToStateObj(Object.values(backUpState).filter( TODO  => !TODO.isDeleted))

            case "addTODO":
                newStateObj = {
                    ...state,
                    [action.id]: {
                    id: action.id,
                    description : initialState.description, 
                    kind: action.value,
                    isChoosen: initialState.isChoosen,
                    isDeleted:initialState.isDeleted
                    }
                }
                newBackUpStateObj = {
                    ...backUpState,
                    [action.id]: {
                    id: action.id,
                    description : initialState.description, 
                    kind: action.value,
                    isChoosen: initialState.isChoosen,
                    isDeleted:initialState.isDeleted
                    }
                }
                backUpState = newBackUpStateObj
                return newStateObj

            case "editTODO": 
                newStateObj = {
                        ...state,
                        [action.id] : {
                            ...state[action.id],
                            isChoosen: action.isChoosen,
                            isDeleted: action.isDeleted,
                            description: action.description
                            }
                            
                    }
                    newBackUpStateObj = {
                        ...backUpState,
                        [action.id] : {
                            ...backUpState[action.id],
                            isChoosen: action.isChoosen,
                            isDeleted: action.isDeleted,
                            description: action.description
                            }
                            
                    }
                backUpState = newBackUpStateObj
                return newStateObj
    }

    return state

}













































































// export const filterTODOListReducer = ( state = initialState , action) => {
   
//     let newStateObj = {}

//     const backToStateObj = (TODOListArr = []) => {
//         TODOListArr.forEach(TODO => {
//             newStateObj[TODO.id] = TODO  
//         })
//         return newStateObj
//     }

//     switch(action.type) {
//         case "choosenTODOS":
//            return backToStateObj(Object.values({...state}).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted)))
//         case "deleteTODOS":
//             return backToStateObj(Object.values({...state}).filter( TODO  => TODO.isDeleted))
//         case "normalTODOS":
//             return backToStateObj(Object.values({...state}).filter( TODO  => !TODO.isDeleted))
//         default:
//             return backToStateObj(Object.values({...state}))
//     }
//   }

//   export const addTODO = (state = initialState , action) => {
//     let newStateObj = {}
//     switch(action.type) {
//         case "addTODO":
//             newStateObj = {
//                 ...state ,
//                 [action.id]: {
//                 id: action.id,
//                 description : initialState.description, 
//                 kind: action.value,
//                 isChoosen: initialState.isChoosen,
//                 isDeleted:initialState.isDeleted
//                 }
//             }
//             return (newStateObj)
//         default:
//             return {...state}
//   }
// }




//   export const editTODO = (state = initialState , action) => {
//     let newStateObj = {}
//        switch(action.type) {
//         case "editTODO": 
//             newStateObj = {
//                 ...state,
//                 [action.id] : {
//                     ...state[action.id],
//                     isChoosen: action.isChoosen,
//                     isDeleted: action.isDeleted,
//                     description: action.description
//                   }
                  
//             }
//             return newStateObj

//         default:
//             return state
//        }
//   }