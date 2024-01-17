import React, { useState, } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useMutation, useQuery } from 'react-query';
import { useMutateTODOS } from '../../hooks/useMutateTODOS';
import { useSelector } from 'react-redux';
import { GetFilterKind } from '../../selectors';
import { useFetchTODOS } from '../../hooks/useFetchTODOS';


export const CardDeleteBtn = ({info}) => {

    const filterKind = useSelector(GetFilterKind)
    const [isDeleted,setIsDeleted ] = useState(info.isDeleted)
    const {mutateWantedTODO} = useMutateTODOS()
    const {fetchShownTodos} = useFetchTODOS()
    const {refetch} = useQuery()
    

    const mutation = useMutation( async (updateStatus) => {
        await mutateWantedTODO(info._id, 'isDeleted', updateStatus);
    },{
        onError: () => console.error(`Error updating TODOs: ${mutation.error}`)
    },
    {
        onSuccess: () => refetch({
            queryKey: ['show TODOS of filter', filterKind],
            queryFn: async () => await fetchShownTodos(filterKind)
        })
    })

    const clickDeleteRestoreBtn = async (event) => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)

        mutation.mutate(newDeleteStatus)
    }
    
    return (
        <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
        {
            isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
        }
        </IconButton>


    )
}