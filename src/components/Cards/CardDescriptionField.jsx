import React, { useState, useRef, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { generateChangeValueLogs } from '../../constans/generalLogs';
import { useFetchTODOS } from '../../hooks/useFetchTODOS';




export const CardDescriptionField = ({info}) => {

    const currInputValue = useRef(null)
    const {mutateWantedTODO, updateTODOList} = useFetchTODOS()

    const [isFreezeMode,setIsFreezeMode] = useState(true)
    const [message, setMessage] = useState(info.description)
    const handleInputType =  event => setMessage(event.target.value);

    const FreezeBtnStatus = () => isFreezeMode ? 'edit' : 'save' 
    
    const clickFreezeBtn =  async (event) => {
        event.preventDefault()
        
        if (isFreezeMode) {
            setIsFreezeMode(false)

        }
        else {
            setIsFreezeMode(!isFreezeMode)

            try {
                await mutateWantedTODO(info._id, 'description', message)
                //updateTODOList     
            } catch (error) {
                console.error(`Error updating TODOs: ${error.message}`);
            }
        }
    }

    useEffect(() => {
        console.log(generateChangeValueLogs('the description field' , message))
    }, [message])

    return (
        <div className='description-edit-Btn-container'>
        <input ref = {currInputValue} value={message}
            className="card-description" type="text" placeholder='card description'
            onChange={handleInputType} disabled = {isFreezeMode}
            style={{
                textAlign: "center",
                width: "80%",
                height: "20%",
                
            }}
        />

        
        <IconButton className= { `${FreezeBtnStatus()}- btn`} style={{scale:"1.5"}}
            onClick ={clickFreezeBtn}>
            <Edit/>
        </IconButton>
    </div>


    )
}