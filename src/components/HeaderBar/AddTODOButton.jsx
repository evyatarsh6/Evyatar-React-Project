import { useDispatch, useSelector } from "react-redux"
import { GetMainInput} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef } from "react";
import { addIDToSetChanges, addTODO } from "../../actions/actions";
import { useAddSingleTODO } from '../../hooks/useMutateTODOS';



export const AddTODOBtn = ({style}) => {

  const dispatch = useDispatch()
  const {inputValue, isEmpty } = useSelector(GetMainInput)
  const inputRef = useRef(inputValue)

  const postSingleTODO = useAddSingleTODO(inputRef.current)
    
    useEffect(() => {
      inputRef.current = inputValue
    },[inputValue])

    const handleAddTODO=  useCallback( async () => {
        
        const cardID = Date.now()
        dispatch(addTODO(inputRef.current,cardID))
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