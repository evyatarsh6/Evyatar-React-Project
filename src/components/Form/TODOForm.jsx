import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { GetFormDetails, GetFormTODOID, GetFormTODOKind } from '../../selectors'
import { FormActions, TODOListActions } from '../../actions/actions'
import { useForm, Controller } from 'react-hook-form'
import { useAddSingleTODO } from '../../hooks/useMutateData'
import { Checkbox, Container, FormControlLabel, Autocomplete, IconButton } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import React, { Fragment } from 'react'
import { constans } from '../../constans/constans'

export const TODOForm = ({ setAlertMessage }) => {
  const FormDetails = useSelector(GetFormDetails)
  const dispatch = useDispatch()
  const TODOKind = useSelector(GetFormTODOKind)
  const TODOID = useSelector(GetFormTODOID)

  const { defaultFormFieldsValues, resetFormFieldsValues } = constans

  const { handleSubmit, reset, control, getValues, setValue } =
    useForm({
      defaultValues: defaultFormFieldsValues
    })

  const descriptionFieldValue = getValues('descriptionField')
  const isChoosenCheckboxValue = getValues('isChoosenCheckbox')
  const isDeleteCheckboxValue = getValues('isDeleteCheckbox')

  const updateFieldValue = (wantedField, updateValue) => setValue(`${wantedField}`, updateValue)

  const updateDescriptionFieldValue = e => updateFieldValue('descriptionField', e.target.value)
  const updateIsChoosenCheckboxValue = () => updateFieldValue('isChoosenCheckbox', !isChoosenCheckboxValue)
  const updateIsDeleteCheckboxValue = () => updateFieldValue('isDeleteCheckbox', !isDeleteCheckboxValue)

  const postSingleTODO = useAddSingleTODO()

  const returnFieldsToDefualt = () => reset(defaultFormFieldsValues)

  const clickResetBtn = () => {
    reset(resetFormFieldsValues,
      {
        keepDirtyValues: true,
        keepDefaultValues: true
      }
    )
  }

  const handleClose = event => {
    dispatch(FormActions.closeForm())
    returnFieldsToDefualt()
    event.preventDefault()
  }

  const onError = errors => {
    // the only field with certion validation
    setAlertMessage(errors.descriptionField.message)
  }

  const onSubmit = () => {
    const TODO = {
      _id: TODOID,
      description: descriptionFieldValue,
      kind: TODOKind,
      isChoosen: isChoosenCheckboxValue,
      isDeleted: isDeleteCheckboxValue,
      location: [],
      isPinBtnDisable: false
    }

    dispatch(TODOListActions.addTODO(TODO))
    postSingleTODO.mutate(TODO)
    dispatch(FormActions.closeForm())
    returnFieldsToDefualt()
  }

  return (
    <Fragment>
      <Dialog
        open={FormDetails.isFormVisble}
        onClose={handleClose}
        sx={{
          position: 'fixed',
          alignItems: 'flex-start'
        }}
      >
        <form onSubmit={handleSubmit(onSubmit, onError)}>

          <IconButton onClick={handleClose} style={{ scale: '1.5' }}>
            <CloseIcon />
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
              renderInput={params => <TextField {...params}
              />}
            >
            </Autocomplete>

            <Controller
              control={control}
              name="descriptionField"
              rules={{
                pattern: {
                  value: /avi/i,
                  message: 'Description must contain AVI'
                }
              }}
              render={() => (
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
                    marginTop: 2,
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
              justifyItems: 'flex-end'

            }}>
              <Controller
                control={control}
                name="submit-btn"
                render={() => (
                  <Button
                    type="submit"
                    size='large'
                    sx={{
                      marginRight: 3,
                      backgroundColor: 'rgba(25, 118, 210, 0.04)'
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
                render={({ field: { onBlur, onChange } }) => (
                  <Button
                    onClick={clickResetBtn}
                    onBlur={onBlur}
                    onChange={onChange}
                    size='large'
                    sx={{
                      marginRight: 3,
                      backgroundColor: 'rgba(25, 118, 210, 0.04)'
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
  )
}
