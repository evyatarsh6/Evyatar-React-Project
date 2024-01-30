const initialState  =  {
    isFormVisble: false, 
    TODOKind: null,
    TODOID: null,
    isChoosen: false,
    isDelete: false,
    description: "Avi Berger is a god"
}

export const formDetails = ( state = initialState , action) => {
    
    if(action.type === "openForm"){
        const updateForm = {
            ...state,
           ['isFormVisble']: true,
           ["TODOKind"]: action.TODOID,
           ["TODOID"]: action.TODOKind,

        }

        return updateForm 
    }
    else if (action.type === "closeForm"){
        // const updateForm = {
        //     ...state,
        //    ['isFormVisble']: false,
        // }

        // return updateForm 

        return initialState
    }
    else if (action.type ==="submitForm") {
        
        const updateForm = {
            ...state,
           ['isFormVisble']: false,
           ['TODOKind']: action.props.TODOKind,
           ['initIsChoosen']: action.props.isChoosen,
           ['initIsDelete']: action.props.isDelete,
           ['initDescription']: action.props.description
        }

        return updateForm 
    }
    else{
        return state
    }
}