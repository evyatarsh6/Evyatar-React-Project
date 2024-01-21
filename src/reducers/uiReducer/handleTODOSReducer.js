const initialState  = {}

export const TODOS = ( state = initialState , action) => {
    if(action.type === "addTODO"){
        const TODOList = {
            ...state,
            [action._id]: {
            _id: action._id,
            description : "Avi Berger is a god", 
            kind: action.value,
            isChoosen: false,
            isDeleted:false, 
            location: {},
            isPinBtnDisable : false
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