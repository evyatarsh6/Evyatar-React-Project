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
  const [value, setValue] = useState(options[0]);

  // const [choosenInGreen,setChoosenInGreen] = useState(false)
  
    const handleInputType= (e) => {
      const newValue = e.target.value
      setInputValue( newValue)
      if (newValue !== '') {
        setIsEmpty(false)
        console.log(newValue)
      }
      else {
        setIsEmpty(true)
      }
    }

    const handleInputChange = (e) => {
      const activeOption = document.querySelector("aria-activedescendant").split('-')[-1]
      const optionValue = options[activeOption]
      // const newValue = e.target.value;

      // setInputValue(newValue)
      // console.log(newValue)
    }



    // const handleKeyDown = (e) => {
    //   if (e.key === 'ArrowDown') {
    //     e.preventDefault(); // Prevent the default behavior
    //     if (activeOption === null || activeOption === options.length - 1) {
    //       setActiveOption(0);
    //     } else {
    //       setActiveOption(activeOption + 1);
    //     }
    //   } else if (e.key === 'ArrowUp') {
    //     e.preventDefault(); // Prevent the default behavior
    //     if (activeOption === null || activeOption === 0) {
    //       setActiveOption(options.length - 1);
    //     } else {
    //       setActiveOption(activeOption - 1);
    //     }
    //   }
    // };







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
           <div>
      {/* displaying the state values with template literals */}
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}
      <br />

      {/* Calling the Autocomplete component and updating its state features */}
      <Autocomplete
        // value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          console.log(newInputValue)
        }}
        id="manageable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Manage State" />}
      />
    </div>

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