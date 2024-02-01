const initialState  = {}

export const TODOList = ( state = initialState , action) => {

    if( action.type ==='addTODO'){

        const TODOList = {
            ...state,
            [action.TODO._id]: {
            _id: action.TODO._id,
            description : action.TODO.description,
            kind: action.TODO.kind,
            isChoosen: action.TODO.isChoosen,
            isDeleted:action.TODO.isDeleted, 
            location: action.TODO.location,
            isPinBtnDisable : action.TODO.isPinBtnDisable
            }
        }
        return TODOList
    }

    else if(action.type ==="editTODO"){

        const TODOList = {
            ...state,
            [action.props._id] : {
                ...state[action.props._id],
                [action.props.fieldKey] : action.props.fieldUpdateValue, 
            }
            
        }

        return TODOList
    }

    else if(action.type === "editAllTODOS"){
        
        const TODOListIDS = Object.keys(state)

        const relavantAttrName = action.fieldKey
        const relavantAttrValue = action.fieldUpdateValue

        let TODOList = {...state}

        TODOListIDS.forEach(ID => {
            TODOList = {
                ...TODOList,
                [ID] : {
                    ...TODOList[ID],
                    [relavantAttrName]: relavantAttrValue
                }
            }
        });
    
        return TODOList
    }




    else{
        return state
    }
}