import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { GetFormDetails } from '../selectors';
import { addTODO, closeForm, updateForm } from '../actions/actions';
import { useForm, Controller } from "react-hook-form"
import { useAddSingleTODO } from '../hooks/useMutateTODOS';
import { Checkbox, Container, FormControlLabel } from '@mui/material';
import {Autocomplete} from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const TODOForm = () => {
    const FormDetails = useSelector(GetFormDetails)
    const dispatch = useDispatch()
    const isChoosenStatus = FormDetails.isChoosen
    const isDeleteStatus = FormDetails.isDelete
    const TODOKind  = FormDetails.TODOKind


    const { handleSubmit, reset, control, register, formState  } = useForm();
    const postSingleTODO = useAddSingleTODO()

    const clickResetBtn = () => reset()

    const handleClose = (event) => {
      event.preventDefault()
      dispatch(closeForm())
    };

  const onSubmit = () => {

    console.log(formState.isDirty)
    console.log(formState.touchedFields)
    // console.log(formState.dirtyFields)


    // dispatch(addTODO(inputRef.current, cardID));
    // postSingleTODO.mutate(
    //   {TODOKind: inputRef.current, wantedID: cardID})

    // event.preventDefault()
    // dispatch(closeForm())

  }

  return (
    <React.Fragment>
      <Dialog
        open={FormDetails.isFormVisble}
        onClose={handleClose}
        sx={{
          position:'fixed',
          alignItems: 'flex-start'
        }}
        >
        <form onSubmit={handleSubmit(onSubmit)}>

          <IconButton onClick={handleClose} style={{scale:"1.5"}}>
            <CloseIcon/>
          </IconButton>

          <DialogTitle>CREATE NEW AVI BERGER</DialogTitle>
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
        name="descriptionFieldController"
        render={({ field: { onChange, onBlur, value } }) => (
            <TextField
            {...register("descriptionField", {
                maxLength: 20,
              required: false
            })}
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
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

        <Controller
        name="myCheckbox"
        control={control}
        defaultValue={true}
        render={() => (
          <FormControlLabel
          sx={{
            marginTop: 3 
          }}
          control={
            <Checkbox
            onChange={() => dispatch(updateForm('isChoosen', !isChoosenStatus))}
            checked={isChoosenStatus}
            id="isChoosen-field"
            />
          }
          label="isChoosen field"
          />
        )}
        />

        
        <Controller
        name="myCheckbox"
        control={control}
        defaultValue={true}
        render={() => (
          <FormControlLabel
          sx={{
            display: 'block',
            marginTop:2,
            marginBottom: 2
          }}
          control={
            <Checkbox
            onChange={() => dispatch(updateForm('isDelete', !isDeleteStatus))}
            checked={isDeleteStatus}
            id="isDelete-field"
            />
          }
          label="isDelete field"
          />
        )}
        />

        

          <Container sx={{
              flexDirection: 'row',
              textAlign: 'center',
              justifyContent: 'end',
              justifyItems:  'flex-end'

          }}>
            <Controller 
            control={control}
            name="submit-btn"
              render={() => (
            <Button
            type="submit"
            size='large'
            sx = {{
              marginRight: 3,
              backgroundColor : 'rgba(25, 118, 210, 0.04)',
            }}
            >
              submit Button
            </Button>
              )}
            >

          </Controller>


          <Controller 
            control={control}
            name="reset-btn"
              render={({ field: { onBlur ,onChange } }) => (
            <Button
            onClick={clickResetBtn}
            onBlur = {onBlur}
            onChange = {onChange}
            size='large'
            sx = {{
              marginRight: 3,
              backgroundColor : 'rgba(25, 118, 210, 0.04)',
            }}
            >
              reset Button
            </Button>
              )}
            >

          </Controller>
          </Container>
        </DialogContent>
        </form>
      </Dialog>
    </React.Fragment>
  );
}