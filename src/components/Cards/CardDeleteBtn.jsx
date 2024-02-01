import React, { useCallback } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { TODOListActions } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { useMutateFieldSingle } from '../../hooks/useMutateData';


export const CardDeleteBtn = ({_id, isDeleted}) => {

    
    const dispatch = useDispatch()

    const mutateSingleUpdateDeleteStatus = useMutateFieldSingle()

    const clickDeleteRestoreBtn = useCallback( async (event) => {
        event.preventDefault()
        
        const newDeleteStatus = !isDeleted
        mutateSingleUpdateDeleteStatus.mutate(
            {
                wantedID : _id ,
                wantedField : 'isDeleted',
                wantedFieldUpdateVal : newDeleteStatus
            })
            
        dispatch(TODOListActions.editTODO(
            {
            _id : _id,
            fieldKey : 'isDeleted',
            fieldUpdateValue: newDeleteStatus 
            }
        ))
        
        
        },[dispatch, _id, isDeleted, mutateSingleUpdateDeleteStatus])
    
        return (
            <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
            {
                isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
            }
            </IconButton>
    
    
        )
    }