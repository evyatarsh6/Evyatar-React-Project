import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetMainInput, GetMainInputIsEmpty, GetMainInputValue} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef} from "react";
import { FormActions } from "../../actions/actions";
import {bergerPhotos} from '../../shared/photos';
import { TODOForm } from "../Form/TODOForm";
import { Fragment } from "react";
import { CustomAlert } from "../Form/CustomAlert";


export const OpenFormBtn = ({style}) => {

  const [alertMessage, setAlertMessage] = useState(null)

  const dispatch = useDispatch()
  const inputValue = useSelector(GetMainInputValue)
  const isEmpty = useSelector(GetMainInputIsEmpty)
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
        <TODOForm setAlertMessage = {setAlertMessage}/>
        <CustomAlert message ={alertMessage} setMessage = {setAlertMessage}/>
     </Fragment>
    )
}