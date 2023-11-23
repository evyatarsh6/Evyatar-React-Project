
import { ReorderRounded } from "@mui/icons-material"
import { useDispatch } from "react-redux"


export const addTODO = (inputValue, cardID) => {
    
    return {type:  'addTODO', value: inputValue,  id: cardID }
} 

export const editTODO = (inputValue, cardID) => {
    
    return {type: "editTODO", props: {
        isChoosen : isChecked
        ,isDeleted: newDeleteStatus,
        description: message
        ,id:  props.id
    }
}
} 