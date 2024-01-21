import React, { useCallback, useState, } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { addIDToSetChanges, editTODO } from '../../actions/actions';
import { useDispatch } from 'react-redux';


export const CardDeleteBtn = ({info}) => {

    const dispatch = useDispatch()
    const [isDeleted, setIsDeleted] = useState(info.isDeleted)

    const clickDeleteRestoreBtn = useCallback( async (event) => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)
        dispatch(editTODO(
            {
            id : info._id,
            fieldKey : 'isDeleted',
            fieldUpdateValue: newDeleteStatus 
            }
        ))
        
        dispatch(addIDToSetChanges(info._id))
        
        },[dispatch, info._id, isDeleted])
    
        return (
            <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
            {
                isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
            }
            </IconButton>
    
    
        )
    }