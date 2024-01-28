const initialState  =  {
    isFormExist: false,
    formDisplay: 'none', 
    TODOKind: null,
    TODOID: null,
    initIsChoosen: false,
    initIsDelete: false,
    initDescription: "Avi Berger is a god"
}

export const formDetails = ( state = initialState , action) => {
    
    if(action.type === "openForm"){
        const updateForm = {
            ...state,
           ['isFormExist']: true,
           ['formDisplay']: 'block',
           ["TODOKind"]: action.TODOID,
           ["TODOID"]: action.TODOKind,

        }

        return updateForm 
    }
    else if (action.type === "closeForm"){
        const updateForm = {
            ...state,
           ['isFormExist']: false,
           ['formDisplay']: 'none', 
        }

        return updateForm 
    }
    else if (action.type ==="submitForm") {
        
        const updateForm = {
            ...state,
           ['isFormExist']: false,
           ['formDisplay']: 'none', 
           ['TODOKind']: action.props.TODOKind,
           ['initIsChoosen']: action.props.isChoosen,
           ['initIsDelete']: action.props.isDelete,
           ['initDescription']: action.props.description
        }

        return updateForm 
    }
    else{
        return initialState
    }
}