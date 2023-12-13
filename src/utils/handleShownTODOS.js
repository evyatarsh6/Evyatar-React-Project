// import { TODOS } from "../reducers/uiReducer/handleTODOSReducer"
// import { filterKind } from "../reducers/uiReducer/handleFilterKindReducer"

// const allTODOS  = TODOS.getState()
// const currFilterKind = filterKind.getState()

// export const ShownTODOS = () => {
//             switch(currFilterKind){
//                 case "normal":
//                     return Object.values(allTODOS).filter( TODO  => !TODO.isDeleted)
//                 case "delete":
//                     return Object.values(allTODOS).filter( TODO  => TODO.isDeleted)
//                 case "choosen":
//                     return Object.values(allTODOS).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted))
//                 default:
//                     return allTODOS
//                 }

//     }