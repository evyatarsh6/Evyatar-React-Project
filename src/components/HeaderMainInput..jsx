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

  const [isEmpty, setIsEmpty] = useState(true)
  const [inputValue, setInputValue] = useState('')


  // const [value,setValue] = useState(null)

  // const [choosenInGreen,setChoosenInGreen] = useState(false)

    const options = Object.keys(bergerPhotos)
  
    const handleInputChange= (e) => {
      setInputValue( e.target.value)
      if (inputValue !== '') {
        setIsEmpty(false)
        console.log(inputValue)
      }
      else{
        setIsEmpty(true)
      }
    }



    // const handleInputChange= (event, newValue) => {
    //   setValue( newValue)
    //   console.log('Selected Value:', newValue)
    // }

    const handleAddTODO = () => {
      console.log(TODOList)
      setTODOList(
        {...TODOList ,
          [Date.now()]: {
          kind: inputValue,
          isChoosen: false,
          isDeleted: false
        }
        }
    )
    // console.log(TODOList)
      }
    
    const handleFilterTODOS  = () => {
      setFilterKind('choosen')
    }

    const handleDeleteChoosenTODOS = () => {
      setFilterKind('delete')
    }

    useEffect(() => {
      console.log("filter kind has change and now with value:", filterKind);
    }, [filterKind])


    return (
      <FormControl style={headerStyles}>
        <Autocomplete
        disablePortal
        id="main-react-select-field"
        options={options}
        // onInput={e => handleInputChange(e)}
        // onClick= {e => handleInputChange(e)}
        // onKeyUp={e => handleInputChange(e)}
        // onKeyDown = {e => handleInputChange(e)}
        // onChange = {e => handleInputChange(e)}
        // onChange={e => handleInputChange(e)}
        // value={value}
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