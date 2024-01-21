import { useSelector } from "react-redux"
import { GetMainInput} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef } from "react";
import { useAddSingle } from "../../hooks/useMutateTODOS";
import { addIDToSetChanges, addTODO } from "../../actions/actions";


export const AddTODOBtn = ({style}) => {

    const inputVal = useSelector(GetMainInput).inputValue
    const isEmpty = useSelector(GetMainInput).isEmpty
    
    const inputRef = useRef(inputVal)
    const addTODO = useAddSingle(inputVal)
    
    useEffect(() => {
      inputRef.current = inputVal
    },[inputVal])
    const handleAddTODO = () => {
        const cardID = Date.now()
        dispatch(addTODO(inputVal,cardID))
        dispatch(addIDToSetChanges(cardID))
      }

    const handleAddTODO=  useCallback( async () => {
      addTODO.mutate()
      },
      [addTODO])
    
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