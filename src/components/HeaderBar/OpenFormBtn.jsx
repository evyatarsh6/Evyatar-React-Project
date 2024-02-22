import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMainInputIsEmpty, GetMainInputValue } from '../../selectors'
import { Button } from '@mui/material'
import { FormActions } from '../../actions/actions'
import { bergerPhotos } from '../../shared/photos'
import { TODOForm } from '../Form/TODOForm'
import { CustomAlert } from '../Form/CustomAlert'
import { genID } from '../../utils/generalUtils'
import { useDeleteAllWantedCollection } from '../../hooks/useMutateData'

export const OpenFormBtn = ({ style }) => {
  const [alertMessage, setAlertMessage] = useState('')

  const dispatch = useDispatch()
  const inputValue = useSelector(GetMainInputValue)
  const isEmpty = useSelector(GetMainInputIsEmpty)
  const inputRef = useRef(inputValue)
  const { openForm } = FormActions

  useEffect(() => {
    inputRef.current = inputValue
  }, [inputValue])

  const validateInputVal = useCallback(() => Object.keys(bergerPhotos).some(option => option === inputRef.current), [])

  const handleAddTODO = useCallback(() => {
    const isValid = validateInputVal()
    if (isValid) {
      const cardID = genID()
      dispatch(openForm(cardID, inputRef.current))
    }
  }, [inputRef, dispatch])

  const isOpen = alertMessage.length > 0

  return (
    <>
      <Button variant="contained"
        className='save-btn'
        onClick={handleAddTODO}
        disabled={isEmpty}
        style={style}>
        save Avi Berger
      </Button>
      <TODOForm setAlertMessage={setAlertMessage} />
      <CustomAlert isOpen={isOpen} message={alertMessage} setMessage={setAlertMessage} />
    </>
  )
}
