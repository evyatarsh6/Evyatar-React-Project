import React, {useRef, useState } from 'react';
import { ItemList } from '../containers/ItemList';


export const HeaderInput = () => {

    const [isEmpty, setIsEmpty] = useState(true)
    const currInputValue = useRef(null)
    const [inputValue, setInputValue] = useState('')

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

    const handleClick = () => {
      
      console.log(currInputValue.current );
      
      // return (
      //   ItemList.list.append()
      // )
  
    }

    // const handleDelete= () => {}


   

    return (

        <>
        <input
        type= 'text'
        id ='new_todo_input'
        className='multySelectInput'
        // value= {inputValue}
        placeholder={`Bergers' actions at the office`}
        onChange={handleInputChange}
        >

        </input>

      <button
      className='save-btn'
       onClick ={handleClick} 
       disabled = {isEmpty}>
        save Avi Berger
      </button>


      <button
        id = {`delete-choosen-items-btn`}
        className= 'delete-choosen-items-btn'
        // onClick={handleDelete}
        >
            Delete Choosen items
        </button>  
      </>
 
    )
}