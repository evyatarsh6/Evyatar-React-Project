import { useDispatch, useSelector } from "react-redux"
import { GetMainInput, GetTodoList} from "../../selectors"
import {Button} from '@mui/material';
import { addTODO } from "../../actions/actions";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { genID } from "../../utils/generalUtils";


export const AddTODOBtn = ({style}) => {

    const dispatch = useDispatch();
    const inputVal = useSelector(GetMainInput).inputValue
    const isEmpty = useSelector(GetMainInput).isEmpty

    const inputRef = useRef(inputVal)


    const handleAddTODO = useCallback(() => {
      axios.post(`http://localhost:3000/addTODO`,
          {
            description : "Avi Berger is a god", 
            kind: inputRef.current,
            isChoosen: false,
            isDeleted:false, 
            location: {},
            isPinBtnDisable : false 
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
      },[])

    
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