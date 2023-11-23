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
            [action.id] : {
                ...state[action.id],
                isChoosen: action.isChoosen,
                isDeleted: action.isDeleted,
                description: action.description
            }
            
        }

        return TODOS
    }

    else{
        return state
    }
}