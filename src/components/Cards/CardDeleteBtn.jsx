import React, { useCallback, useState, } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useMutation, useQuery } from 'react-query';
import { useUpdateDB } from '../../hooks/useUpdateDB';
import { useShownTODOSQuery } from '../../hooks/useShownTODOSQuery';


export const CardDeleteBtn = ({info}) => {

    const isDeleted = info.isDeleted
    const {updateWantedTODO} = useUpdateDB()
    
    const {refetch} = useShownTODOSQuery() 

    const mutation = useMutation({
        mutationFn : async (updateStatus) => {
        await updateWantedTODO(info._id, 'isDeleted', updateStatus);  
        },
        onError: () => {
            console.error(`Error updating TODOs: ${mutation.error}`)
        },
        onSuccess: () => {
            refetch()
            console.log('done updating') 
        }
    })

    const clickDeleteRestoreBtn = useCallback( async (event) => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 

        mutation.mutate(newDeleteStatus)

    },[isDeleted,mutation])
    
    return (
        <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
        {
            isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
        }
        </IconButton>


    )
}