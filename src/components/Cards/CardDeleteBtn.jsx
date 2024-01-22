import React, { useCallback, useState, } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { addIDToSetChanges, editTODO } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { useMutateFieldSingle } from '../../hooks/useMutateTODOS';


export const CardDeleteBtn = ({info}) => {

    
    const dispatch = useDispatch()
    const [isDeleted, setIsDeleted] = useState(info.isDeleted)

    const mutateSingleUpdateDeleteStatus = useMutateFieldSingle()

    const clickDeleteRestoreBtn = useCallback( async (event) => {
        event.preventDefault()
        
        const newDeleteStatus = !isDeleted
        mutateSingleUpdateDeleteStatus.mutate(info._id, 'isDeleted', newDeleteStatus)
        setIsDeleted(newDeleteStatus)
        dispatch(editTODO(
            {
            _id : info._id,
            fieldKey : 'isDeleted',
            fieldUpdateValue: newDeleteStatus 
            }
        ))
        
        dispatch(addIDToSetChanges(info._id))
        
        },[dispatch, info._id, isDeleted, mutateSingleUpdateDeleteStatus])
    
        return (
            <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
            {
                isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
            }
            </IconButton>
    
    
        )
    }