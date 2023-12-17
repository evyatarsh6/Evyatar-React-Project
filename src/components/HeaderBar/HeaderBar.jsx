/* eslint-disable no-unexpected-multiline */
import React, {useEffect, useMemo, useState } from 'react';
import { bergerPhotos } from '../../shared/photos';
import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { activeMapShowPointsMode, addTODO, changeFilterKind } from '../../actions/actions';
import { choosenFilterKind, deleteFilterKind, mainInputPlaceHolder, normalFilterKind } from '../../constans/cardConstans';
import { generateChangeValueLogs } from '../../constans/generalLogs';
import { GetFilterKind, GetMainInputIsEmpty, GetMainInputValue, GetMapMode } from '../../selectors';
import {Button} from '@mui/material';
import { MainInput } from './MainInput';
import { ButtonsContainer } from './ButtonsContainer';


export const HeaderBar = () => {

  const inputValue = useSelector(GetMainInputValue)
  const filterKind = useSelector(GetFilterKind)

    useEffect(() => {
      console.log(generateChangeValueLogs('filter kind', filterKind))   
    }, [filterKind])

    useEffect(() => {
      console.log(generateChangeValueLogs('input value', inputValue))
  }, [inputValue])


    return (
      <div style={{
        width: "100%"
      }}>
        <h1> Avi Akiva Berger Presents - My Dear Son</h1>
        <div style={{
        display:"flex",
        flexDirection: 'row',
        textAlign: 'center',

      }}>
          <MainInput/>
          <ButtonsContainer/>
        </div>
      </div>
    )
      }