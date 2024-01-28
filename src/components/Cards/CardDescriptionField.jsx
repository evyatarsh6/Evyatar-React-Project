import React, { useState, useRef, useCallback, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { editTODO } from '../../actions/actions';
import { useMutateFieldSingle } from '../../hooks/useMutateTODOS';
import { useDispatch } from 'react-redux';


export const CardDescriptionField = ({info}) => {

    
    const currInputValue = useRef(null)
    
    const dispatch = useDispatch()
    
    const [isFreezeMode,setIsFreezeMode] = useState(true)
    const [message, setMessage] = useState(info.description)

    
    useEffect(() => {
        const timer = setInterval(() => {
            if (isFreezeMode && info.description!== message ) {
                setMessage(info.description)   
            }
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [info.description, isFreezeMode]);


const mutateSingleUpdateDescription = useMutateFieldSingle()
const handleInputType =  event => setMessage(event.target.value);

    const FreezeBtnStatus = () => isFreezeMode ? 'edit' : 'save' 
    
    const clickFreezeBtn =  useCallback( async (event) => {
        event.preventDefault()
        
        if (isFreezeMode) {
            setIsFreezeMode(false)

        }
        else {
            setIsFreezeMode(!isFreezeMode)
            dispatch(editTODO(
                {
                _id : info._id,
                fieldKey : 'description',
                fieldUpdateValue: message 
                }
            ))
            mutateSingleUpdateDescription.mutate(
                {
                    wantedID : info._id ,
                    wantedField : 'description',
                    wantedFieldUpdateVal : message
                }
            )
        }
    },[dispatch, info._id, isFreezeMode, message, mutateSingleUpdateDescription])

    return (
        <div className='description-edit-Btn-container'>
        <input ref = {currInputValue} value={message} defaultValue={info.description}
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
