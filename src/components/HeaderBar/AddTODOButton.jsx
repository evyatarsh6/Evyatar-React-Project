import { useDispatch, useSelector } from "react-redux"
import { GetMainInput} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef } from "react";
import { addIDToSetChanges, addTODO } from "../../actions/actions";
import { useAddSingleTODO } from '../../hooks/useMutateTODOS';
import {bergerPhotos} from '../../shared/photos';



export const AddTODOBtn = ({style}) => {
  
  const dispatch = useDispatch()
  const {inputValue, isEmpty } = useSelector(GetMainInput)
  const inputRef = useRef(inputValue)

  const postSingleTODO = useAddSingleTODO()

  useEffect(() => {
    inputRef.current = inputValue
  },[inputValue])

  const validateInputVal = useCallback(() => {
    Object.keys(bergerPhotos).some(option => option === inputRef.current);
  },[])
  
  const handleAddTODO = useCallback( async () => {

      const isValid = validateInputVal()  
      if (isValid) {
          const cardID = Date.now()
          dispatch(addTODO(inputRef.current,cardID))
          dispatch(addIDToSetChanges(cardID))
          postSingleTODO.mutate(inputRef.current, cardID)
          
        }
      },
      [dispatch, postSingleTODO, validateInputVal])
    
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