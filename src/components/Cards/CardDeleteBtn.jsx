import React, { useCallback, useState, } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useMutation, useQuery } from 'react-query';
import { useMutateTODOS } from '../../hooks/useMutateTODOS';
import { useShownTODOSQuery } from '../../hooks/useShownTODOSQuery';


export const CardDeleteBtn = ({info}) => {

    const [isDeleted,setIsDeleted ] = useState(info.isDeleted)
    const {mutateWantedTODO} = useMutateTODOS()
    
    const {refetch} = useShownTODOSQuery() 

    const mutation = useMutation({
        mutationfn: async (updateStatus) => {
        await mutateWantedTODO(info._id, 'isDeleted', updateStatus);  
        },
        onError: () => {
            console.error(`Error updating TODOs: ${mutation.error}`)
        },
        onSuccess: () => {
            refetch() 
        }
    })

    const clickDeleteRestoreBtn = useCallback( async (event) => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)

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