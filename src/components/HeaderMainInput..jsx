import React, {useRef, useState } from 'react';
import ReactSelect from "react-select"
import { bergerPhotos } from '../shared/photos';
import { createOptions } from '../actions/createSelectOptions';

export const HeaderInput = () => {

    const [isMark,setIsMark] = useState(true)
    const [isEmpty, setIsEmpty] = useState(true)
    const currInputValue = useRef(null)

    const handleInputChange = event => {

        currInputValue.current = event.target.value;

        if ( isEmpty && currInputValue.current !== null) {
          setIsEmpty(false)
        }
        else if (!isEmpty && currInputValue.current === '') {
          setIsEmpty(true)
        }

        return event.target.value;
      }

    const handleChooseInputOption = () => {
      // setChoosenValue(event.target.value)
    }





    
    const handleClick = () => {
      
      console.log(currInputValue.current );

  
    }

    const handleMark= () => {
      if(isMark==='active'){
        setIsMark('not-active')
      }
      else{
        setIsMark('active')
      }
      
    }

    return (

        <div style={{
          display: 'flex',
          textAlign: 'center',
          alignItems : 'center',
          justifyContent: 'center'
        }}>

          <ReactSelect
            options={createOptions(bergerPhotos)}
            id = 'main-react-select-field'
            // value={value}
            // onChange={selected => value = selected}
            placeholder = 'Bergers` Actions in the Office'
                >
          </ReactSelect>

            <div className='buttonContainer'>
          <button
          className='save-btn'
          onClick ={handleClick} 
          disabled = {isEmpty}>
            save Avi Berger
          </button>

            <button
            id = {`show-choosen-items-btn`}
            className= 'mark-choosen-items-btn'
            onClick={handleMark}
            >
                {` show choosen items - ${isMark}`}
            </button>

            <button
            id = {`delete-choosen-items-btn`}
            className= 'mark-choosen-items-btn'
            // onClick={handleMark}
            >
                {` delete choosen items - ${isMark}`}
            </button>

            </div>

            </div>
    )
      }