import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useFetchTODOS } from '../../api/hooks/useFetchTODOS';
import { updateTODOListStatus } from '../../actions/actions';


export const CardDeleteBtn = ({info}) => {
    
    const dispatch = useDispatch()

    const [isDeleted,setIsDeleted ] = useState(info.isDeleted)
    const {fetchUpdateWanted} = useFetchTODOS()

    
    const clickDeleteRestoreBtn = async (event) => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)
        await fetchUpdateWanted(info._id, 'isDeleted', newDeleteStatus)
        dispatch(updateTODOListStatus(true));
    }
    return (
        <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
        {
            isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
        }
        </IconButton>


    )
}