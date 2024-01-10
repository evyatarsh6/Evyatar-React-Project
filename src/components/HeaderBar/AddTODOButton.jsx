import {useDispatch, useSelector } from "react-redux"
import { GetMainInput, GetTodoListNeedsUpdate} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef } from "react";
import { fetchAddTODO } from "../../api/utils/fetchAddTODO";
import { updateTODOListStatus } from "../../actions/actions";


export const AddTODOBtn = ({style}) => {

    const inputVal = useSelector(GetMainInput).inputValue
    const needsUpdate = useSelector(GetTodoListNeedsUpdate)
    const isEmpty = useSelector(GetMainInput).isEmpty
    const dispatch = useDispatch()
    

    const inputRef = useRef(inputVal)

    useEffect(() => {
      inputRef.current = inputVal
    },[inputVal])

    const handleAddTODO = useCallback(() => {
      fetchAddTODO(inputRef.current)
      dispatch(updateTODOListStatus(needsUpdate))
      },[dispatch, needsUpdate])

    
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