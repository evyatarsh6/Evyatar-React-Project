import { useDispatch, useSelector } from "react-redux"
import { GetMainInput} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef} from "react";
import { FormActions } from "../../actions/actions";
import {bergerPhotos} from '../../shared/photos';
import { TODOForm } from "../TODOForm";
import { Fragment } from "react";
import { useDeleteAllWantedCollection } from "../../hooks/useMutateTODOS";



export const AddTODOBtn = ({style}) => {

  const dispatch = useDispatch()
  const {inputValue, isEmpty } = useSelector(GetMainInput)
  const inputRef = useRef(inputValue)

  useEffect(() => {
    inputRef.current = inputValue
  },[inputValue])

  const handleAddTODO = useCallback(() => {
    const validateInputVal = () => Object.keys(bergerPhotos).some(option => option === inputRef.current);
    const isValid = validateInputVal();  
    if (isValid) {
      const cardID = Date.now();
      dispatch(FormActions.openForm(cardID,inputRef.current))

    }}, [inputRef, dispatch]);


    
    return (
      <Fragment>
        <Button variant="contained"
        className='save-btn'
        onClick={handleAddTODO}
        disabled = {isEmpty}
        style={style}>
        save Avi Berger
        </Button>
        <TODOForm/>
    </Fragment>
    )
}