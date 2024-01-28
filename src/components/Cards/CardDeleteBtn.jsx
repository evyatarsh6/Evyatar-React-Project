import React, { useState, } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useFetchTODOS } from '../../api/hooks/useFetchTODOS';



export const CardDeleteBtn = ({info}) => {
    

    const [isDeleted,setIsDeleted ] = useState(info.isDeleted)
    const {fetchUpdateWantedTODO, updateTODOList} = useFetchTODOS()

    
    const clickDeleteRestoreBtn = async (event) => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        try {
            await fetchUpdateWantedTODO(info._id, 'isDeleted', newDeleteStatus)
            updateTODOList();
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