import React, {useEffect, useMemo, useState } from 'react';
import { bergerPhotos } from '../../shared/photos';
import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material'
import { mainInputPlaceHolder } from '../../constans/constans';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputType } from '../../actions/actions';
import { GetMainInput } from '../../selectors';


export const MainInput = () => {
  const dispatch = useDispatch();
  const {inputValue} = useSelector(GetMainInput)

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
        sx={{ width: '60%', margin:5}}
        renderInput={(params) => <TextField {...params} label= {mainInputPlaceHolder}
        />}
        >
        </Autocomplete>
  )
}