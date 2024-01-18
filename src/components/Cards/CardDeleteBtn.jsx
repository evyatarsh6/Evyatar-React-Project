import React, { useCallback, useState, } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useMutation, useQuery } from 'react-query';
import { useUpdateDB } from '../../hooks/useUpdateDB';
import { useShownTODOSQuery } from '../../hooks/useShownTODOSQuery';
import { useMutateSingle } from '../../hooks/useMutateTODOS';


export const CardDeleteBtn = ({info}) => {

    const isDeleted = info.isDeleted
    const mutateSingleUpdateDeleteStatus = 
    useMutateSingle(info._id, 'isDeleted', !isDeleted)

    const clickDeleteRestoreBtn = useCallback( async (event) => {
        event.preventDefault()
        mutateSingleUpdateDeleteStatus.mutate()
        
    },[mutateSingleUpdateDeleteStatus])
    
    return (
        <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
        {
            isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
        }
        </IconButton>


    )
}