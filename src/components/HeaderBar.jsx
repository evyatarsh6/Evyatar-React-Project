/* eslint-disable no-unexpected-multiline */
import React, {useEffect, useState } from 'react';
import { bergerPhotos } from '../shared/photos';
import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTODO, changeFilterKind } from '../actions/actions';
import { choosenFilterKind, deleteFilterKind, mainInputPlaceHolder, normalFilterKind } from '../constans/cardConstans';
import { generateChangeValueLogs } from '../constans/generalLogs';
import { GetFilterKind } from '../selectors';
import {Button} from '@mui/material';


export const HeaderBar = () => {

  const muiButtonStyle = {
    margin: 10,
    width:200
  }
  const [isEmpty, setIsEmpty] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch();
  const filterKind = useSelector(GetFilterKind);

  const options = Object.keys(bergerPhotos)

    const handleInputType= (e, newValue) => {
      setInputValue(newValue)
      if (newValue !== '') {
        setIsEmpty(false)
        console.log(newValue)
      }
      else {
        setIsEmpty(true)
      }
    }


    const handleAddTODO = () => {
      const cardID = Date.now()
      dispatch(addTODO(inputValue,cardID))
    }

    const SwitchFilterKind = filterKind => dispatch(changeFilterKind(filterKind))

    const clickWantedFilterKindBtn = wantedFilterKind => () =>  {

      (filterKind!== wantedFilterKind) ? SwitchFilterKind(wantedFilterKind) : SwitchFilterKind(normalFilterKind)
    }
    
    const filterKindBtnStatus = wantedFilterKind  => (filterKind !== wantedFilterKind)? 'turn on': 'turn off'
 

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
          <Autocomplete
          disablePortal
          id='main-react-select-field'
          options={options}
          onInputChange={(event, newInputValue) => handleInputType(event, newInputValue)}
          inputValue={inputValue}
          sx={{ width: '60%', margin:5}}
          renderInput={(params) => <TextField {...params} label= {mainInputPlaceHolder}
          />}
          >
          </Autocomplete>
          <div className='buttonContainer'>
            <Button variant="contained"
                    className='save-btn'
                    onClick={handleAddTODO}
                    disabled = {isEmpty}
                    style={{
                      margin: 10
                    }}>
                    save Avi Berger
            </Button>
            <Button variant="contained"
                    id = {`show-choosen-items-btn`}
                    className= 'show-choosen-items-btn'
                    onClick={clickWantedFilterKindBtn(choosenFilterKind)}
                    style={muiButtonStyle}>
                    {`${filterKindBtnStatus(choosenFilterKind)} show choosen items`}
            </Button>

            <Button variant="contained"
                    id = {`show-delete-items-btn`}
                    className= 'show-delete-items-btn'
                    onClick={clickWantedFilterKindBtn(deleteFilterKind)}
                    style={muiButtonStyle}
                    >
                    {`${filterKindBtnStatus(deleteFilterKind)} show delete items`}
            </Button>
          </div>
        </div>
      </div>
    )
      }