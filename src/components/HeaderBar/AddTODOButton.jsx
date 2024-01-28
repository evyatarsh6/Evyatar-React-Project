import { useDispatch, useSelector } from "react-redux"
import { GetMainInput} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef } from "react";
import { addTODO, openForm } from "../../actions/actions";
import { useAddSingleTODO } from '../../hooks/useMutateTODOS';
import {bergerPhotos} from '../../shared/photos';



export const AddTODOBtn = ({style}) => {
  
  const dispatch = useDispatch()
  const {inputValue, isEmpty } = useSelector(GetMainInput)
  const inputRef = useRef(inputValue)

  // const postSingleTODO = useAddSingleTODO()

  // const deleteAllCollectionByName = useDeleteAllWantedCollection()

  useEffect(() => {
    inputRef.current = inputValue
  },[inputValue])


  const handleAddTODO = useCallback(async () => {
    const validateInputVal = () => Object.keys(bergerPhotos).some(option => option === inputRef.current);
    const isValid = validateInputVal();  
    if (isValid) {
      const cardID = Date.now();

      dispatch(openForm(cardID,inputRef.current))

      // const cardID = Date.now();
      // dispatch(addTODO(inputRef.current, cardID));

      // postSingleTODO.mutate(
      //   {TODOKind: inputRef.current, wantedID: cardID})
              
    }}, [inputRef, dispatch]);




    // if (isValid) {

    //   const cardID = Date.now();
    //   dispatch(addTODO(inputRef.current, cardID));

    //   postSingleTODO.mutate(
    //     {TODOKind: inputRef.current, wantedID: cardID})
              
    // }}, [inputRef, dispatch, postSingleTODO]);










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