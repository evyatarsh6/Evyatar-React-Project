import React, { useState, } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useFetchTODOS } from '../../api/hooks/useFetchTODOS';
import { useMutation } from 'react-query';


export const CardDeleteBtn = ({info}) => {
    

    const [isDeleted,setIsDeleted ] = useState(info.isDeleted)
    const {fetchUpdateWantedTODO, updateTODOList} = useFetchTODOS()
    
    const mutation = useMutation( async (updateStatus) => 
    await fetchUpdateWantedTODO(info._id, 'isDeleted', updateStatus));

    
    const clickDeleteRestoreBtn = async (event) => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)

        mutation.mutate(newDeleteStatus)
    }

    if (mutation.isLoading) {
        return <span>Deleting...</span>;
    }
    
    if (mutation.isError) {
    console.error(`Error updating TODOs: ${mutation.error}`)
    }
    
    if (mutation.isSuccess) {
        updateTODOList()
    }
    
    return (
        <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
        {
            isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
        }
        </IconButton>


    )
}