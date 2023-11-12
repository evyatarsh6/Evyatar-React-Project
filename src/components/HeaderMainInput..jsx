import React, {useEffect, useState } from 'react';
import { bergerPhotos } from '../shared/photos';
import {Autocomplete} from '@mui/material';
import {FormControl} from '@mui/material';
import {TextField} from '@mui/material';



const headerStyles = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',

}

export const HeaderBar = ({appState}) => {

  const filterKind = appState["filterKind"]
  const actionDetails = appState['actionDetails']
  const TODOList = appState["TODOList"]
  const setFilterKind = appState["setFilterKind"]
  const setAction = appState["setAction"]
  const setTODOList = appState["TODOListUpdate"]

  const options = Object.keys(bergerPhotos)

  const [isEmpty, setIsEmpty] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState(null);
  // const [choosenInGreen,setChoosenInGreen] = useState(false)

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
      const newTODOList = {
        ...TODOList ,
        [Date.now()]: {
        kind: inputValue,
        isChoosen: false,
        isDeleted: false
        }
      }
      setTODOList(newTODOList)
      console.log(newTODOList)
      }
    
    const handleFilterTODOS  = () => {
      setFilterKind('choosen')
    }

    const handleDeleteChoosenTODOS = () => {
      setFilterKind('delete')
    }

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
            onClick={() => handleAddTODO()}
            disabled = {isEmpty}>
              save Avi Berger
            </button>

              <button
              id = {`show-choosen-items-btn`}
              className= 'mark-choosen-items-btn'
              onClick={() => handleFilterTODOS()}
              >
                  {` show choosen items in green - ${true}`}
              </button>

              <button
              id = {`delete-choosen-items-btn`}
              className= 'mark-choosen-items-btn'
              onClick={() => handleDeleteChoosenTODOS()}
              >
                  {` show delete TODOS`}
              </button>

          </div>

           </FormControl>
    )
      }