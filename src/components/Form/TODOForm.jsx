import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { GetFormDetails, GetFormTODOID, GetFormTODOKind } from '../../selectors'
import { FormActions, TODOListActions } from '../../actions/actions'
import { useForm, FormProvider, useWatch } from 'react-hook-form'
import { useAddSingleTODO } from '../../hooks/useMutateData'
import { Container, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'
import { constants } from '../../constants/constants'
import { FormStaticFields } from '../Form/FormSpecificFields/FormStaticFields'
import { FormDescriptionField } from './FormSpecificFields/FormDescriptionField'
import { FormIsChoosenCheckBoxField } from './FormSpecificFields/FormIsChoosenCheckBoxField'
import { FormIsDeleteCheckBoxField } from './FormSpecificFields/FormIsDeleteCheckBoxField'
import { FormSubmitBtn } from './FormSpecificFields/FormSubmitBtn'
import { FormResetBtn } from './FormSpecificFields/FormResetBtn'

export const TODOForm = ({ setAlertMessage }) => {
  const FormDetails = useSelector(GetFormDetails)
  const dispatch = useDispatch()
  const TODOKind = useSelector(GetFormTODOKind)
  const TODOID = useSelector(GetFormTODOID)
  const { addTODO } = TODOListActions
  const { closeForm } = FormActions

  const { defaultFormFieldsValues } = constants

  const methods = useForm({
    defaultValues: defaultFormFieldsValues
  })

  const { handleSubmit, reset, control, getValues } = methods

  const descriptionFieldValue = useWatch({
    control,
    name: 'descriptionField',
    defaultValue: defaultFormFieldsValues.descriptionField
  })

  const isChoosenCheckboxValue = useWatch({
    control,
    name: 'isChoosenCheckbox',
    defaultValue: defaultFormFieldsValues.isChoosenCheckbox
  })

  const isDeleteCheckboxValue = useWatch({
    control,
    name: 'isDeleteCheckbox',
    defaultValue: defaultFormFieldsValues.isDeleteCheckbox
  })

  const postSingleTODO = useAddSingleTODO()

  const returnFieldsToDefualt = () => reset(defaultFormFieldsValues)

  const handleClose = event => {
    dispatch(closeForm())
    returnFieldsToDefualt()
    event.preventDefault()
  }

  const onError = errors => {
    // the only field with certion validation
    setAlertMessage(errors.descriptionField.message)
  }

  const onSubmit = () => {
    // also an optional approch - using getValues instead of useWatch

    // const descriptionFieldValue = getValues('descriptionField')
    // const isChoosenCheckboxValue = getValues('isChoosenCheckbox')
    // const isDeleteCheckboxValue = getValues('isDeleteCheckbox')

    const TODO = {
      _id: TODOID,
      description: descriptionFieldValue,
      kind: TODOKind,
      isChoosen: isChoosenCheckboxValue,
      isDeleted: isDeleteCheckboxValue,
      location: [],
      isPinBtnDisable: false
    }

    dispatch(addTODO(TODO))
    postSingleTODO.mutate(TODO)
    dispatch(closeForm())
    returnFieldsToDefualt()
  }

  return (
    <>
      <Dialog
        open={FormDetails.isFormVisble}
        onClose={handleClose}
        sx={{
          position: 'fixed',
          alignItems: 'flex-start'
        }}
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit, onError)}>

            <IconButton onClick={handleClose} style={{ scale: '1.5' }}>
              <CloseIcon />
            </IconButton>

            <DialogTitle>CREATE NEW AVI BERGER</DialogTitle>
            <DialogContent>
              <FormStaticFields />
              <FormDescriptionField control={control} />
              <FormIsChoosenCheckBoxField control={control} />
              <FormIsDeleteCheckBoxField control={control} />

              <Container sx={{
                flexDirection: 'row',
                textAlign: 'center',
                justifyContent: 'end',
                justifyItems: 'flex-end'

              }}>
                <FormSubmitBtn control={control} name={'submit-btn'} />
                <FormResetBtn control={control} name={'reset-btn'} />
              </Container>
            </DialogContent>
          </form>
        </FormProvider>
      </Dialog>
    </>
  )
}
