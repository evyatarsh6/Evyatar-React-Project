import React, {useEffect, useState } from 'react';
import { bergerPhotos } from '../shared/photos';
import {Autocomplete} from '@mui/material';
import {FormControl} from '@mui/material';
import {TextField} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTODO } from '../actions/actions';



const headerStyles = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',

}

export const HeaderBar = () => {

  const [isEmpty, setIsEmpty] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch();
  const filterKind = useSelector((state) => state.UI.filterKind);

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

    const SwitchFilterKind = filterKind => {
      dispatch({type:"switchFilterKind", updateStatus: filterKind })
    }
    
    const clickFilterChoosenTODOS  = () => {
      (filterKind!== 'choosen') ? SwitchFilterKind('choosen') : SwitchFilterKind('normal')
    }

    const clickDeleteChoosenTODOS = () => {
      (filterKind!== 'delete') ? SwitchFilterKind('delete') : SwitchFilterKind('normal')
    }

    const FilterChoosenTODOSStatus = () => (filterKind !== 'choosen') ? 'turn on': 'turn off'
    
    const FilterDeleteTODOSStatus = () => (filterKind !== 'delete')? 'turn on': 'turn off'
 

    useEffect(() => {
      if (filterKind!=='normal') {
        console.log("filter kind has change and now with value:", filterKind);   
      }
    }, [filterKind])


    return (
      <FormControl style={headerStyles}>
        <Autocomplete
        disablePortal
        id="main-react-select-field"
        options={options}
        onInputChange={(event, newInputValue) => handleInputType(event, newInputValue)}
        inputValue={inputValue}
        sx={{ width: "100%", margin: 5}}
        renderInput={(params) => <TextField {...params} label="Bergers' actions in the office"
        />}
        >
        </Autocomplete>
        
          <div className='buttonContainer' style={{
            justifyContent: 'space-evenly',
            width: "100%"
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
              onClick={clickFilterChoosenTODOS}
              >
                 {`${FilterChoosenTODOSStatus()} show choosen items`}
              </button>

              <button
              id = {`show-delete-items-btn`}
              className= 'show-delete-items-btn'
              onClick={clickDeleteChoosenTODOS}
              >
                  {`${FilterDeleteTODOSStatus()} show delete items`}
              </button>

          </div>

           </FormControl>
    )
      }