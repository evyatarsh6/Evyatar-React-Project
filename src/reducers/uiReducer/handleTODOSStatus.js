// const initialState  = {
//     addTODO: false,
//     editTODO: {status: false, id: null},
//     editAllTODOS: false
// }



// export const TODOSStatus = ( state = initialState , action) => {
//     if(action.type === "addTODOStatus"){
//         const TODOListStatus = {
//             ...state, ['addTODO']: action.currStatus
//         }
//         return TODOListStatus
//         }

//     else if(action.type ==="editTODO"){
//             const TODOListStatus = {
//                 ...state, ['editTODO']: {
//                     status: action.props.currStatus,
//                     id: action.props.id,
//                 } 
//             }
//         return TODOListStatus
//     }

//     else if(action.type === "editAllTODOS"){
//         const TODOListStatus = {
//             ...state, ['editAllTODOS']: action.props.currStatus
//         }

//         return TODOListStatus
//     }
//     else{
//         return state
//     }
// }