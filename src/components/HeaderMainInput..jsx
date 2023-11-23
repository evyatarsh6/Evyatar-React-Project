/* eslint-disable no-unexpected-multiline */
import React, {useEffect, useState } from 'react';
import { bergerPhotos } from '../shared/photos';
import {Autocomplete} from '@mui/material';
import {FormControl} from '@mui/material';
import {TextField} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTODO, changeFilterKind } from '../actions/actions';
import { choosenFilterKind, deleteFilterKind, mainInputPlaceHolder, normalFilterKind } from '../constans/cardConstans';
import { generateChangeValueLogs } from '../constans/generalLogs';
import { GetFilterKind } from '../selectors';



const headerStyles = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',

}

export const HeaderBar = () => {

  const [isEmpty, setIsEmpty] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch();
  const filterKind = useSelector(GetFilterKind);

  const options = Object.keys(bergerPhotos)

    // const handleInputType= (e, newValue) => {
    //   (newValue !== '') ? setIsEmpty(false) : setIsEmpty(true)
    //   setInputValue(newValue)
    // }
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
      <FormControl style={headerStyles}>
        <Autocomplete
        disablePortal
        id='main-react-select-field'
        options={options}
        onInputChange={(event, newInputValue) => handleInputType(event, newInputValue)}
        inputValue={inputValue}
        sx={{ width: '100%', margin: 5}}
        renderInput={(params) => <TextField {...params} label= {mainInputPlaceHolder}
        />}
        >
        </Autocomplete>
        
          <div className='buttonContainer' style={{
            justifyContent: 'space-evenly',
            width: '100%'
          }}>
            <button
            className='save-btn'
            onClick={handleAddTODO}
            disabled = {isEmpty}>
              save Avi Berger
            </button>

              <button
              id = {`show-choosen-items-btn`}
              className= 'show-choosen-items-btn'
              onClick={clickWantedFilterKindBtn(choosenFilterKind)}
              >
                 {`${filterKindBtnStatus(choosenFilterKind)} show choosen items`}
              </button>

              <button
              id = {`show-delete-items-btn`}
              className= 'show-delete-items-btn'
              onClick={clickWantedFilterKindBtn(deleteFilterKind)}
              >
                  {`${filterKindBtnStatus(deleteFilterKind)} show delete items`}
              </button>

          </div>

           </FormControl>
    )
      }