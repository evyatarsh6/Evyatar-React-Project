import React, { useState, useRef, useCallback, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { TODOListActions } from '../../actions/actions';
import { useMutateFieldSingle } from '../../hooks/useMutateData';
import { useDispatch } from 'react-redux';


export const CardDescriptionField = ({_id, description}) => {

    
    const currInputValue = useRef(null)
    
    const dispatch = useDispatch()
    
    const [isFreezeMode,setIsFreezeMode] = useState(true)
    const [message, setMessage] = useState(description)

    
    useEffect(() => {

        const timer = setTimeout(() => {
            if (isFreezeMode && description!== message ) {
                setMessage(description)   
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
        }

        // const timer = setInterval(() => {
        //     if (isFreezeMode && description!== message ) {
        //         setMessage(description)   
        //     }
        // }, 1000);
        // return () => {
        //     clearInterval(timer);
        // }
    }, [description, message, isFreezeMode]);


const mutateSingleUpdateDescription = useMutateFieldSingle()
const handleInputType =  event => setMessage(event.target.value);

    const FreezeBtnStatus = () => isFreezeMode ? 'edit' : 'save' 
    
    const clickFreezeBtn =  async (event) => {
        event.preventDefault()
        setIsFreezeMode(prevIsFreezeMode => !prevIsFreezeMode)
        if (!isFreezeMode) {
            dispatch(TODOListActions.editTODO(
                {
                _id : _id,
                fieldKey : 'description',
                fieldUpdateValue: message 
                }
            ))
            mutateSingleUpdateDescription.mutate(
                {
                    wantedID : _id ,
                    wantedField : 'description',
                    wantedFieldUpdateVal : message
                }
            )
        }
    }

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
