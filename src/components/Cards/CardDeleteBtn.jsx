import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';


export const CardDeleteBtn = ({info}) => {

    // const dispatch = useDispatch();
    const [isDeleted,setIsDeleted ] = useState(info.isDeleted)

    
    const clickDeleteRestoreBtn = event => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)
    }
    return (
        <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
        {
            isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
        }
        </IconButton>


    )
}