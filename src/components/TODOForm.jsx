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
import { addTODO, closeForm, updateForm } from '../actions/actions';
import { useForm, Controller } from "react-hook-form"
import { useAddSingleTODO } from '../hooks/useMutateTODOS';
import { Checkbox } from '@mui/material';
import {Autocomplete} from '@mui/material';

export const TODOForm = () => {
    const FormDetails = useSelector(GetFormDetails)
    const dispatch = useDispatch()
    const isChoosenStatus = FormDetails.isChoosen
    const isDeleteStatus = FormDetails.isDelete
    const TODOKind  = FormDetails.TODOKind


    const { handleSubmit, reset, control } = useForm();
    const postSingleTODO = useAddSingleTODO()

  const handleClose = (event) => {
    event.preventDefault()
    dispatch(closeForm)
  };

  const onSubmit = () => {
    console.log('avi')
    // dispatch(addTODO(inputRef.current, cardID));
    // postSingleTODO.mutate(
    //   {TODOKind: inputRef.current, wantedID: cardID})

  }

  return (
    <React.Fragment>
      <Dialog
        open={FormDetails.isFormVisble}
        onClose={handleClose}
        // PaperProps={{
        //   component: 'form',
        //   onSubmit: (event) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries(formData.entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        // },
    // }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>create new Avi Berger</DialogTitle>
        <DialogContent>
          <DialogContentText margin={1}>
            To create new Avi Berger TODO to this website, enter the wanted info .
          </DialogContentText>

          <DialogContentText marginTop={5} marginBottom={0.5}>
            TODO kind 
          </DialogContentText>

          <Autocomplete
          margin={5}
          disabled
          disablePortal
          inputValue={TODOKind}
          renderInput={(params) => <TextField {...params}
          />}
          >
          </Autocomplete>

            <Controller 
            control={control}
            name="description-field"
            render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  autoFocus
                  required
                  margin="dense"
                  id="description-field"
                  label="description"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              )}
            >
            </Controller>



            <DialogContentText marginTop={5}>
            isChoosen field
            </DialogContentText>
            <Controller 
            control={control}
            name="isChoosenField"
            render={({ field: { onBlur, onChange} }) => (
                <Checkbox
                onChange={(e) => {
                    onChange(e.target.checked);
                    dispatch(updateForm('isChoosen', !isChoosenStatus));
                  }}
                onBlur={onBlur}
                checked={isChoosenStatus}
                autoFocus
                required
                margin="dense"
                id="isChoosen-field"
                />
              )}
            >
            </Controller>




            <DialogContentText marginTop={5}>
            isDelete field
            </DialogContentText>
            <Controller 
            control={control}
            name="isChoosenField"
            render={({ field: { onBlur ,onChange } }) => (
                <Checkbox
                onChange={(e) => {
                    onChange(e.target.checked);
                    dispatch(updateForm('isDelete', !isDeleteStatus));
                  }}
                onBlur={onBlur}
                checked={isDeleteStatus}
                autoFocus
                required
                margin="dense"
                id="isChoosen-field"
                />
              )}
            >
            </Controller>
            
            <Button
            size='large'
            sx = {{
              backgroundColor : 'rgba(25, 118, 210, 0.04)',
              alignContent: 'flex-end'
            }}
            >
              submit Button
            </Button>
            </DialogContent>


        {/* <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <input type="submit" />
        <button onClick={handleClose}> </button>
        <DialogTitle>create new Avi Berger</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create new Avi Berger TODO to this website, please enter the wanted info here.
          </DialogContentText>
          <TextField
          {...register("firstName", { required: true, maxLength: 20 })} 
            autoFocus
            required
            margin="dense"
            id="description-field"
            name="description"
            label="description"
            type="text"
            fullWidth
            variant="standard"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions> */}
        </form>
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
