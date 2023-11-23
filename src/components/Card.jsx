import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {bergerPhotos} from '../shared/photos';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import RecyclingIcon from '@mui/icons-material/Recycling';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { editTODO } from '../actions/actions';
import { generateChangeValueLogs, generateUpdateCardLogs } from '../constans/generalLogs';

export const Card = ({ props }) => {


const cardStyle =  {
    borderColor : 'black',
    borderStyle : 'solid',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    width : 450,
    height :450,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: 16,   
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    border:" 1px solid rgba(255, 255, 255, 0.3)",
    
}

const imgStyle = {
    width : "50%" ,
    height :"50%",
    borderColor : 'black',
    borderStyle : 'solid',
    backgroundColor: 'black'
}
    const dispatch = useDispatch();
    const currInputValue = useRef(null)
    const [isChecked, setIsChecked] = useState(props.isChoosen)
    const [isDeleted,setIsDeleted ] = useState(props.isDeleted)
    const [isFreezeMode,setIsFreezeMode] = useState(true)
    const [message, setMessage] = useState(props.description);

    
    const handleInputType =  event => setMessage(event.target.value);

    const clickFreezeBtn =  event => {
        event.preventDefault()
        
        // isFreezeMode ? setIsFreezeMode(false) :
        // setIsFreezeMode(!isFreezeMode) &&
        // dispatch(editTODO( {...props, ["description"] : message }))
        
        if (isFreezeMode) {
            setIsFreezeMode(false)
        }
        else {

            setIsFreezeMode(!isFreezeMode)
            dispatch(editTODO( {...props, description : message }))
        }
    }

    const clickDeleteRestoreBtn = event => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)
        dispatch(editTODO( {...props, isDeleted : newDeleteStatus } ))
    }

    const checkChoosenCheckbox= () => {

        const newCheckedtatus = !isChecked 
        setIsChecked(newCheckedtatus)
        dispatch(editTODO( {...props, isChoosen : newCheckedtatus } ))
    }

    const FreezeBtnStatus = () => isFreezeMode ? 'edit' : 'save' 
    const deleteRestoreBtnStatus = () => isDeleted ? 'restore': 'delete' 


    useEffect(() => {
        console.log(generateUpdateCardLogs(props))
    }, [props])

    useEffect(() => {
        console.log(generateChangeValueLogs('the description field' , message))
    }, [message])


    return (
            
        <div className ={`card`} id={props.id} style={cardStyle}>
            <h3 className="card-title">{props.kind}</h3>
            <img
                src={bergerPhotos[props.kind]}
                className="card-image"
                style= { imgStyle }
            />

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

            <div className='chooseDeleteContainer'>
            
            <IconButton onClick={clickDeleteRestoreBtn} style={{scale:"1.5"}}>
                {
                    isDeleted ? <RecyclingIcon/>: <DeleteIcon/>  
                }
            </IconButton>
                
            <IconButton id ={`${props.id}-${deleteRestoreBtnStatus()}`} style={{scale:"1.5"}} 
            onClick={checkChoosenCheckbox}>
                    {
                    isChecked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>
                    }
                </IconButton>
                
            </div>
        </div>
    )
}; 