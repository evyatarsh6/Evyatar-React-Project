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
            isDeleted:false
            }
        }
        return TODOList
    }

    else if(action.type ==="editTODO"){
        const TODOS = {
            ...state,
            [action.props.id] : {
                ...state[action.props.id],
                id : action.props.id,
                isChoosen: action.props.isChoosen,
                isDeleted: action.props.isDeleted,
                description: action.props.description
            }
            
        }

        return TODOS
    }

    else{
        return state
    }
}