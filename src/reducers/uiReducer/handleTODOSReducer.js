import { GetMapPoints } from "../../selectors"
import { mapPoints } from "./mapReducer/mapPoints"

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
            location: {},
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
                [action.props.fieldKey] : action.props.fieldUpdateValue, 
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