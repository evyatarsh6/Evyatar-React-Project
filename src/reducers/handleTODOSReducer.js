
export const filterTODOListReducer = ( state , action) => {

    switch(action.type) {
        case "choosenTODOS":
            return ( Object.values({...state}).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted)))
        case "deleteTODOS":
            return ( Object.values({...state}).filter( TODO  => TODO.isDeleted))
        case "normalTODOS":
            return ( Object.values({...state}).filter( TODO  => !TODO.isDeleted))
        default:
          return (false)
    }
  }

  // export const addTODO = (state , action) => {
    
  //   const newTODOList = {
  //     {...state} ,
  //     [action.id]: {
  //     id: action.id,
  //     description : 'avi berger is a god', 
  //     kind: action.type.inputValue,
  //     isChoosen: false,
  //     isDeleted:false
  //     }
  //   }
  //   return (newTODOList)
  // }