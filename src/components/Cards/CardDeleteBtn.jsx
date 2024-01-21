import React, { useCallback, useState, } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useMutateSingle } from '../../hooks/useMutateTODOS';
import { addIDToSetChanges, editTODO } from '../../actions/actions';


export const CardDeleteBtn = ({info}) => {

    const isDeleted = info.isDeleted
    const mutateSingleUpdateDeleteStatus = 
    useMutateSingle(info._id, 'isDeleted', !isDeleted)

    const clickDeleteRestoreBtn = useCallback( async (event) => {
        event.preventDefault()
        mutateSingleUpdateDeleteStatus.mutate()
        
    },[mutateSingleUpdateDeleteStatus])
    
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)
        dispatch(editTODO(
            {
            id : currCardInfo.id,
            fieldKey : 'isDeleted',
            fieldUpdateValue: newDeleteStatus 
            }
        ))
        dispatch(addIDToSetChanges(currCardInfo.id))
    }
    return (
        <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
        {
            isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
        }
        </IconButton>


    )
}