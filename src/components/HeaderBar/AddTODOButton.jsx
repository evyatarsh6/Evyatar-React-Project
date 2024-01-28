import { useDispatch, useSelector } from "react-redux"
import { GetMainInput} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef, useState } from "react";
import { addTODO, openForm } from "../../actions/actions";
import { useAddSingleTODO } from '../../hooks/useMutateTODOS';
import {bergerPhotos} from '../../shared/photos';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export const AddTODOBtn = ({style}) => {
  
  const dispatch = useDispatch()
  const {inputValue, isEmpty } = useSelector(GetMainInput)
  const inputRef = useRef(inputValue)

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    inputRef.current = inputValue
  },[inputValue])


  const handleAddTODO = useCallback(async () => {
    const validateInputVal = () => Object.keys(bergerPhotos).some(option => option === inputRef.current);
    const isValid = validateInputVal();  
    if (isValid) {
      const cardID = Date.now();
      setOpen(true);
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
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const TODODescription = formJson.TODODescription;
            console.log(TODODescription);
            handleClose();
          },
        }}
      >
        <DialogTitle>new TODO</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add new Avi Berger to this list, please enter the wanted init info about the task here.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="TODODescription"
            name="TODODescription"
            label="TODO description"
            type="text"
            fullWidth
            variant="standard"
          />
          <Checkbox
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="TODO description"
            type="text"
            fullWidth
            variant="standard"
            />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    )
}