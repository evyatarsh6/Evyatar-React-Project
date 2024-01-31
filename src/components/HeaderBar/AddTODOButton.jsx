import { useDispatch, useSelector } from "react-redux"
import { GetMainInput} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef, useState } from "react";
import { addTODO, openForm } from "../../actions/actions";
import { useAddSingleTODO, useDeleteAllWantedCollection } from '../../hooks/useMutateTODOS';
import {bergerPhotos} from '../../shared/photos';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TODOForm } from "../TODOForm";



export const AddTODOBtn = ({style}) => {

  const dispatch = useDispatch()
  const {inputValue, isEmpty } = useSelector(GetMainInput)
  const inputRef = useRef(inputValue)

  useEffect(() => {
    inputRef.current = inputValue
  },[inputValue])

  const handleAddTODO = useCallback(async () => {
    const validateInputVal = () => Object.keys(bergerPhotos).some(option => option === inputRef.current);
    const isValid = validateInputVal();  
    if (isValid) {
      const cardID = Date.now();
      dispatch(openForm(cardID,inputRef.current))

    }}, [inputRef, dispatch]);

    
    return (
      <React.Fragment>
        <Button variant="contained"
        className='save-btn'
        onClick={handleAddTODO}
        disabled = {isEmpty}
        style={style}>
        save Avi Berger
        </Button>
        <TODOForm/>
    </React.Fragment>
    )
}