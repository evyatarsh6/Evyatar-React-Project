import {useDispatch, useSelector } from "react-redux"
import { GetMainInput, GetTodoListNeedsUpdate} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef } from "react";
import { updateTODOListStatus } from "../../actions/actions";
import { useFetchTODOS } from "../../api/hooks/useFetchTODOS";


export const AddTODOBtn = ({style}) => {

    const inputVal = useSelector(GetMainInput).inputValue
    const needsUpdate = useSelector(GetTodoListNeedsUpdate)
    const isEmpty = useSelector(GetMainInput).isEmpty
    const {fetchAddTODO} = useFetchTODOS()
    const dispatch = useDispatch()

    const inputRef = useRef(inputVal)
    
    useEffect(() => {
      inputRef.current = inputVal
    },[inputVal])

    const handleAddTODO=  useCallback( async () => {
      if (!needsUpdate) {
        dispatch(updateTODOListStatus(true))
      }      
      await fetchAddTODO(inputRef.current)
      },
      [
        dispatch,
        needsUpdate
      ])
    
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