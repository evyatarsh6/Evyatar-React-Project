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

        let updateLocation = {}
        let isHasPoint = false
        const pointsIDS =  Object.keys(GetMapPoints)
        pointsIDS.forEach(ID => {
            if (ID ===action.props.id) {
                isHasPoint = true
            }
        })

        if (isHasPoint) { 
            updateLocation =  {
                Long: GetMapPoints[action.props.id].Long,
                Lat: GetMapPoints[action.props.id].Lat
            }
        }

        const TODOList = {
            ...state,
            [action.props.id] : {
                ...state[action.props.id],
                id: action.props.id,
                isChoosen: action.props.isChoosen,
                isDeleted: action.props.isDeleted,
                description: action.props.description,
                location: updateLocation,
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