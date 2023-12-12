const initialState  = {}

export const TODOS = ( state = initialState , action) => {

    if(action.type === "addTODO"){
        const TODOList = {
            ...state,
            [action.id]: {
            id: action.id,
            description : "Avi Berger is a god", 
            kind: action.value,
            isChoosen: false,
            isDeleted:false, 
            location: null,
            isPinBtnDisable : false
            }
        }
        return TODOList
    }

    else if(action.type ==="editTODO"){
        const TODOList = {
            ...state,
            [action.props.id] : {
                ...state[action.props.id],
                id: action.props.id,
                isChoosen: action.props.isChoosen,
                isDeleted: action.props.isDeleted,
                description: action.props.description,
                location: action.props.location,
                isPinBtnDisable : action.props.isPinBtnDisable,
            }
            
        }

        return TODOList
    }

    else if(action.type === "editAllTODOS"){
        
        const TODOListIDS = Object.keys(state)

        const relavantAttrName = action.attr.name
        const relavantAttrValue = action.attr.value

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