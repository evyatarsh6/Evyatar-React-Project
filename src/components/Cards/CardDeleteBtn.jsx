import React, { useCallback } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { TODOListActions } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { useMutateFieldSingle } from '../../hooks/useMutateTODOS';


export const CardDeleteBtn = ({info}) => {

    
    const dispatch = useDispatch()

    const mutateSingleUpdateDeleteStatus = useMutateFieldSingle()

    const clickDeleteRestoreBtn = useCallback( async (event) => {
        event.preventDefault()
        
        const newDeleteStatus = !info.isDeleted
        mutateSingleUpdateDeleteStatus.mutate(
            {
                wantedID : info._id ,
                wantedField : 'isDeleted',
                wantedFieldUpdateVal : newDeleteStatus
            })
            
        dispatch(TODOListActions.editTODO(
            {
            _id : info._id,
            fieldKey : 'isDeleted',
            fieldUpdateValue: newDeleteStatus 
            }
        ))
        
        
        },[dispatch, info._id, info.isDeleted, mutateSingleUpdateDeleteStatus])
    
        return (
            <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
            {
                info.isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
            }
            </IconButton>
    
    
        )
    }