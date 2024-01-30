




import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { GetFormDetails } from '../selectors';
import { closeForm } from '../actions/actions';
import { useForm } from 'react-hook-form';

export const TODOForm = () => {
    const FormDetails = useSelector(GetFormDetails)
    const dispatch = useDispatch()
    const { handleSubmit,register, reset } = useForm();

  const handleClose = () => {
    dispatch(dispatch(closeForm))
  };

  const onSubmit = () => {
    
  }


    <form style = {style} onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <input type="submit" />
        <button onClick={handleClose}> </button>
        Avi
    </form>

  return (
    <React.Fragment>
      <Dialog
        open={FormDetails.isFormVisble}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
        },
    }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
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
  );
}











   {/* <Dialog
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
      </Dialog> */}









            // import React, {useEffect, useMemo, useState } from 'react';
            // import { useDispatch, useSelector } from 'react-redux';
            // import {  useForm } from "react-hook-form"
            // import {Autocomplete} from '@mui/material';
            // import { GetFormDetails } from '../selectors';
            // import { closeForm } from '../actions/actions';
            
            
            // export const TODOForm = ({style}) => {
            //     const { handleSubmit,register, reset } = useForm();
            //       const TODOKind = useSelector(GetFormDetails)
            
            //       const dispatch = useDispatch()
            
            //       const onSubmit = (data) => console.log(data)
            
            //       const handleCloseForm = event => {
            //         event.preventDefault()
            //         dispatch(closeForm())
            //       }
                  
            //       return (
            //         <form style = {style} onSubmit={handleSubmit(onSubmit)}>
            //             <input {...register("firstName", { required: true, maxLength: 20 })} />
            //             <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            //             <input type="number" {...register("age", { min: 18, max: 99 })} />
            //             <input type="submit" />
            //             <button onClick={handleCloseForm}> </button>
            //             Avi
            //         </form>
            //       )
            //     }
