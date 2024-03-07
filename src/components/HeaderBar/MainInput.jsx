import React from 'react'
import { bergerPhotos } from '../../shared/photos'
import { Autocomplete, TextField } from '@mui/material'

import { constants } from '../../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { handleInputType } from '../../actions/actions'
import { GetMainInput } from '../../selectors'

export const MainInput = () => {
  const dispatch = useDispatch()
  const { inputValue } = useSelector(GetMainInput)

  const options = Object.keys(bergerPhotos)

  const InputType = (e, newValue) => {
    dispatch(handleInputType(newValue))
  }

  return (
    <Autocomplete
      disablePortal
      id='main-react-select-field'
      options={options}
      onInputChange={(event, newInputValue) => InputType(event, newInputValue)}
      inputValue={inputValue}
      sx={{ width: '60%', margin: 5 }}
      renderInput={params => <TextField {...params} label={constants.mainInputPlaceHolder}
      />}
    >
    </Autocomplete>
  )
}
