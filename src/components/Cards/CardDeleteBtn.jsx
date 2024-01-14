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
    const {fetchUpdateWantedTODO} = useFetchTODOS()

    
    const clickDeleteRestoreBtn = async (event) => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)
        try {
            await fetchUpdateWantedTODO(info._id, 'isDeleted', newDeleteStatus)
            dispatch(updateTODOListStatus(true));
        } catch (error) {
            console.error(`Error updating TODOs: ${error.message}`);
        }
    }
    return (
        <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
        {
            isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
        }
        </IconButton>


    )
}