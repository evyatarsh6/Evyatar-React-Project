import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetTodoList } from "../../selectors";
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { addIDToSetChanges, editTODO } from '../../actions/actions';
import { generateChangeValueLogs } from '../../constans/generalLogs';




export const CardDescriptionField = ({id}) => {

    const currInputValue = useRef(null)

    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const currCardInfo = TODOList[id]

    const [isFreezeMode,setIsFreezeMode] = useState(true)
    const [message, setMessage] = useState(currCardInfo.description)
    const handleInputType =  event => setMessage(event.target.value);

    const FreezeBtnStatus = () => isFreezeMode ? 'edit' : 'save' 
    
    const clickFreezeBtn =  event => {
        event.preventDefault()
        
        if (isFreezeMode) {
            setIsFreezeMode(false)
        }
        else {

            setIsFreezeMode(!isFreezeMode)
            dispatch(editTODO(
                {
                id : currCardInfo.id,
                fieldKey : 'description',
                fieldUpdateValue: message
                }
            ))
        }
        dispatch(addIDToSetChanges(currCardInfo.id))
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