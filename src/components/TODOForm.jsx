
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { GetFormDetails } from '../selectors';
import { addTODOFromDB, closeForm, updateForm } from '../actions/actions';
import { useForm, Controller } from "react-hook-form"
import { useAddSingleTODO } from '../hooks/useMutateTODOS';
import { Checkbox, Container, FormControlLabel } from '@mui/material';
import {Autocomplete} from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment, useState } from 'react';

export const TODOForm = () => {

  const FormDetails = useSelector(GetFormDetails)
  const dispatch = useDispatch()

  const TODOKind  = FormDetails.TODOKind
  const TODOID = FormDetails.TODOID
  
  const { handleSubmit, reset, control, formState, resetField, watch, setValue } = useForm({
      defaultValues: {
        descriptionField: 'Avi Berger is a god !!!!',     
        isChoosenCheckbox: false,  
        isDeleteCheckbox: false,  
      }
    });

    const descriptionFieldValue = watch("descriptionField")
    const isChoosenCheckboxValue = watch("isChoosenCheckbox")
    const isDeleteCheckboxValue = watch("isDeleteCheckbox")

    const updateDescriptionFieldValue = (e) => setValue("descriptionField",  e.target.value)
    const updateIsChoosenCheckboxValue = () => setValue("isChoosenCheckbox", !isChoosenCheckboxValue)
    const updateIsDeleteCheckboxValue = () => setValue("isDeleteCheckbox",  !isDeleteCheckboxValue )

    const postSingleTODO = useAddSingleTODO()
  
    const clickResetBtn = () => {
      reset({
        descriptionField: 'even if you want, you cant get rid of Avi',     
        isChoosenCheckbox: false,  
        isDeleteCheckbox: false,           
      },
        {
        keepDirtyValues: true,
        keepDefaultValues: true,
      })
  }

    const handleClose = (event) => {
      resetField("descriptionField", {defaultValue:  ''})
      event.preventDefault()
      dispatch(closeForm())
    };

  const onSubmit = (event) => {

    const TODO = {
      _id: TODOID,
      description: descriptionFieldValue,  
      kind: TODOKind,
      isChoosen: isChoosenCheckboxValue,
      isDeleted:isDeleteCheckboxValue, 
      location: {},
      isPinBtnDisable : false
    }

    dispatch(addTODOFromDB(TODO))

    postSingleTODO.mutate(TODO)

    event.preventDefault()
    dispatch(closeForm())

  }

  return (
    <Fragment>
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
        name="descriptionField"
        rules={{
          pattern : /AVI/
        }}
        render= {() => (
          <TextField
          value={descriptionFieldValue}
          onChange={updateDescriptionFieldValue}
          margin="dense"
          id="description-field"
          label="description"
          type="text"
          fullWidth
          variant="standard"
          />
        )
        }
        >

        </Controller>

        <Controller
        name="isChoosenCheckbox"
        control={control}
        render={() => (
          <FormControlLabel
          sx={{
            marginTop: 3 
          }}
          control={
            <Checkbox
            onChange={updateIsChoosenCheckboxValue}
  
            checked={isChoosenCheckboxValue}
            id="isChoosen-field"
            />
          }
          label="isChoosen field"
          />
        )}
        />

        
        <Controller
        name="isDeleteCheckbox"
        control={control}
        render={() => (
          <FormControlLabel
          sx={{
            display: 'block',
            marginTop:2,
            marginBottom: 2
          }}
          control={
            <Checkbox
            onChange={updateIsDeleteCheckboxValue}
            checked={isDeleteCheckboxValue}
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
    </Fragment>
  );
}