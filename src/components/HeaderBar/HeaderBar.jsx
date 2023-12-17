import React, {useEffect, useMemo, useState } from 'react';
import { generateChangeValueLogs } from '../../constans/generalLogs';
import { GetFilterKind, GetMainInputValue } from '../../selectors';
import { MainInput } from './MainInput';
import { ButtonsContainer } from './ButtonsContainer';
import { useSelector } from 'react-redux';


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