import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetTodoList } from "../../selectors";
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { addIDToSetChanges, editTODO } from '../../actions/actions';


export const CardDeleteBtn = ({id}) => {

    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const currCardInfo = TODOList[id]
    const [isDeleted,setIsDeleted ] = useState(currCardInfo.isDeleted)

    
    const clickDeleteRestoreBtn = event => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)
        dispatch(editTODO(
            {
            id : currCardInfo.id,
            fieldKey : 'isDeleted',
            fieldUpdateValue: newDeleteStatus 
            }
        ))
        dispatch(addIDToSetChanges(currCardInfo.id,true))
    }
    return (
        <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
        {
            isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
        }
        </IconButton>


    )
}