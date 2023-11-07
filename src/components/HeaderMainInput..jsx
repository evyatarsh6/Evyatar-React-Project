import React, {useRef, useState } from 'react';
import { bergerPhotos } from '../shared/photos';
import {InputLabel} from '@mui/material';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import {FormControl} from '@mui/material';


const headerStyles = {
    display: 'flex',
    textAlign: 'center',
    alignItems : 'center',
    justifyContent: 'center'

}

const buttonContainerStyle = {}

export const HeaderBar = ({setAppState}) => {

    const [isMark,setIsMark] = useState(true)
    const [isEmpty, setIsEmpty] = useState(true)
    const [inputValue, setInputValue] = useState('')
    // const options = createOptions(bergerPhotos)
    const options = Object.keys(bergerPhotos)


    const handleMark= () => {
      if(isMark==='active'){
        setIsMark('not-active')
      }
      else{
        setIsMark('active')
      }
      
    }

    const handleChangeSelect = (e) => {
      setInputValue(e.target.value)
    }

    return (
      <FormControl style={ headerStyles}>
          <InputLabel>choose Avi Berger</InputLabel>
          <Select
                id = 'main-react-select-field'
                style={
                  {
                    borderBlockColor: 'black',
                    borderWidth: 10,
                    minWidth : 500,
                    backgroundColor: 'white',
                    marginRight: 50
                  }
                }
                value={inputValue}
                onChange={handleChangeSelect}>
                  {options.map(option => (
                      <MenuItem value={option} key={option}>
                       {option}
                      </MenuItem>
                  ))

                }
                
        </Select>

            <div className='buttonContainer' style={ buttonContainerStyle}>
              <button
              className='save-btn'
              onClick={ () => setAppState({type: 'addTODO'})}
              disabled = {isEmpty}>
                save Avi Berger
              </button>

                <button
                id = {`show-choosen-items-btn`}
                className= 'mark-choosen-items-btn'
                onClick={ ()=> setAppState({type: 'filterChoosenTODOS'})}
                >
                    {` show choosen items - ${isMark}`}
                </button>

                <button
                id = {`delete-choosen-items-btn`}
                className= 'mark-choosen-items-btn'
                onClick = { ()=> setAppState({type: 'filterDeleteTODOS'})}
                >
                    {` delete choosen items - ${isMark}`}
                </button>

            </div>

            </FormControl>
    )
      }