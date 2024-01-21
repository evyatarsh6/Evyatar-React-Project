import { useDispatch, useSelector } from "react-redux"
import { GetMainInput} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef } from "react";
import { addIDToSetChanges, addTODO } from "../../actions/actions";


export const AddTODOBtn = ({style}) => {

    const dispatch = useDispatch()
    const {inputValue, isEmpty } = useSelector(GetMainInput)
    const inputRef = useRef(inputValue)
    
    useEffect(() => {
      inputRef.current = inputValue
    },[inputValue])

    const handleAddTODO=  useCallback( async () => {
        
        const cardID = Date.now()
        dispatch(addTODO(inputValue,cardID))
        dispatch(addIDToSetChanges(cardID))
      },
      [dispatch,inputValue])
    
    return (
        <Button variant="contained"
        className='save-btn'
        onClick={handleAddTODO}
        disabled = {isEmpty}
        style={style}>
        save Avi Berger
        </Button>
    )
}