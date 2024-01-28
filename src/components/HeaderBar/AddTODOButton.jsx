import { useDispatch, useSelector } from "react-redux"
import { GetMainInput} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef } from "react";
import { addIDToSetChanges, addTODO } from "../../actions/actions";
import { useAddSingleTODO, useDeleteAllWantedCollection } from '../../hooks/useMutateTODOS';
import {bergerPhotos} from '../../shared/photos';



export const AddTODOBtn = ({style}) => {
  
  const dispatch = useDispatch()
  const {inputValue, isEmpty } = useSelector(GetMainInput)
  const inputRef = useRef(inputValue)

  const postSingleTODO = useAddSingleTODO()
  // const deleteAllCollectionByName = useDeleteAllWantedCollection()

  useEffect(() => {
    inputRef.current = inputValue
  },[inputValue])


  const handleAddTODO = useCallback(async () => {
    const validateInputVal = () => Object.keys(bergerPhotos).some(option => option === inputRef.current);
    const isValid = validateInputVal();  
    if (isValid) {
      const cardID = Date.now();
      dispatch(addTODO(inputRef.current, cardID));
      //dispatch(addIDToSetChanges(cardID));

      postSingleTODO.mutate(
        {TODOKind: inputRef.current, wantedID: cardID})
              
    }}, [inputRef, dispatch, postSingleTODO]);

  // const handleAddTODO = () => {
  //   deleteAllCollectionByName.mutate('changeLog') 
  // } 

    
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