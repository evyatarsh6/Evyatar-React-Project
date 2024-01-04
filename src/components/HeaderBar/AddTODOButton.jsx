import { useDispatch, useSelector } from "react-redux"
import { GetMainInput, GetTodoList} from "../../selectors"
import {Button} from '@mui/material';
import { addTODO } from "../../actions/actions";
import axios from "axios";
import { useEffect, useRef, useState } from "react";


export const AddTODOBtn = ({style}) => {

    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const inputVal = useSelector(GetMainInput).inputValue
    const isEmpty = useSelector(GetMainInput).isEmpty
    
    const inputRef = useRef(inputVal)


    const handleAddTODO = () => {
        const cardID = Date.now()
        dispatch(addTODO(inputVal,cardID))
      }
    
      useEffect(() => {
          const cardID = Date.now()
          axios.post(`http://localhost:3000/addTODO`,
           {
              [cardID]: {
              id: cardID,
              description : "Avi Berger is a god", 
              kind: inputRef.current,
              isChoosen: false,
              isDeleted:false, 
              location: {},
              isPinBtnDisable : false 
              }
            },
            {
              headers: {}
            }
          )
          .then((response) => {
              console.log(response.data)
          })
          .catch((error) => {
            alert(`avi's server had a problam with error message of : ${error.message}`);
          });
      }, [TODOList]);
      

    
    return (
        <Button variant="contained"
        className='save-btn'
        onClick={handleAddTODO}
        disabled = {isEmpty}
        style={style}>
        save Avi Berger
        </Button>
    )
}