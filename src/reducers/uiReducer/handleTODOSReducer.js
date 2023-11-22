const initialState  = {}

let backUpState = {} 

export const TODOS = ( state = initialState , action) => {
    
    let shownTODOS = {}
    let TODOListObj = {}
    

    const backToStateObj = (TODOListArr = []) => {
        let updateStateObj = {}
        TODOListArr.forEach(TODO => {
            updateStateObj[TODO.id] = TODO  
        })
        return updateStateObj
    }
    
    if(action.type.includes("TODOS") && action.filterKind ==='normal'){
        return backToStateObj(Object.values(backUpState).filter( TODO  => !TODO.isDeleted))
    }
    
    else if(action.type.includes("TODOS") && action.filterKind ==='choosen'){
        return backToStateObj(Object.values(backUpState).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted)))
    }

    else if(action.type.includes("TODOS") && action.filterKind ==='delete'){
        return backToStateObj(Object.values(backUpState).filter( TODO  => TODO.isDeleted))
    }

    else if(action.type === "addTODO"){
        shownTODOS = {
            ...state,
            [action.id]: {
            id: action.id,
            description : initialState.description, 
            kind: action.value,
            isChoosen: initialState.isChoosen,
            isDeleted:initialState.isDeleted
            }
        }
        TODOListObj = {
            ...backUpState,
            [action.id]: {
            id: action.id,
            description : initialState.description, 
            kind: action.value,
            isChoosen: initialState.isChoosen,
            isDeleted:initialState.isDeleted
            }
        }
        backUpState = TODOListObj
        return shownTODOS
    }
    else if(action.type ==="editTODO"){
        shownTODOS = {
            ...state,
            [action.id] : {
                ...state[action.id],
                isChoosen: action.isChoosen,
                isDeleted: action.isDeleted,
                description: action.description
                }
                
        }
        TODOListObj = {
            ...backUpState,
            [action.id] : {
                ...backUpState[action.id],
                isChoosen: action.isChoosen,
                isDeleted: action.isDeleted,
                description: action.description
                }
                
        }
        backUpState = TODOListObj
        return shownTODOS
    }
    else{
        return state
    }
}

    //     switch(action.type) {
    //         case "choosenTODOS":
    //             return backToStateObj(Object.values(backUpState).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted)))

    //         case "deleteTODOS":
    //             return backToStateObj(Object.values(backUpState).filter( TODO  => TODO.isDeleted))

    //         case "normalTODOS":
    //             return backToStateObj(Object.values(backUpState).filter( TODO  => !TODO.isDeleted))

    //         case "addTODO":
    //             shownTODOS = {
    //                 ...state,
    //                 [action.id]: {
    //                 id: action.id,
    //                 description : initialState.description, 
    //                 kind: action.value,
    //                 isChoosen: initialState.isChoosen,
    //                 isDeleted:initialState.isDeleted
    //                 }
    //             }
    //             TODOListObj = {
    //                 ...backUpState,
    //                 [action.id]: {
    //                 id: action.id,
    //                 description : initialState.description, 
    //                 kind: action.value,
    //                 isChoosen: initialState.isChoosen,
    //                 isDeleted:initialState.isDeleted
    //                 }
    //             }
    //             backUpState = TODOListObj
    //             return shownTODOS

    //         case "editTODO": 
    //             shownTODOS = {
    //                     ...state,
    //                     [action.id] : {
    //                         ...state[action.id],
    //                         isChoosen: action.isChoosen,
    //                         isDeleted: action.isDeleted,
    //                         description: action.description
    //                         }
                            
    //                 }
    //                 TODOListObj = {
    //                     ...backUpState,
    //                     [action.id] : {
    //                         ...backUpState[action.id],
    //                         isChoosen: action.isChoosen,
    //                         isDeleted: action.isDeleted,
    //                         description: action.description
    //                         }
                            
    //                 }
    //             backUpState = TODOListObj
    //             return shownTODOS
    // }

    // return state

// }

