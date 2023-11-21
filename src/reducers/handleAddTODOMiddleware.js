
// export const generatingTODOID = storeAPI => next => action => {
        
//     if (action.type  ==='addTODO') {

//         const cardID = Date.now()
//         const actionAdd = {type:  'addTODO', id: cardID }
//         storeAPI.dispatch(actionAdd)            
//     }
//     else {
//         next(action)
//     }


// }

// export const updateTODOStatus = storeAPI => next => action => {
        
//     if (action.type  ==='editTODO') {
//         const actionEdit = {
//             type:  'addTODO',
//             id: action.id,
//             isChoosen: action.isChoosen,
//             isDeleted: action.isDeleted,
//             description: action.description
//         }
//         storeAPI.dispatch(actionEdit)            
//     }
//     else {
//         next(action)
//     }


// }
  