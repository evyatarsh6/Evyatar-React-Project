import React, { useState, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {bergerPhotos} from '../shared/photos';
import { IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import RecyclingIcon from '@mui/icons-material/Recycling';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export const Card = ({
    id ,
    title,
    description,
    isCheckedProp = false,
    isDeletedProp = false, 
}) => {


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
    const [isChecked, setIsChecked] = useState(isCheckedProp)
    const [isDeleted,setIsDeleted ] = useState(isDeletedProp)
    const [isFreezeMode,setIsFreezeMode] = useState(true)
    const [message, setMessage] = useState(description);


    const handleInputType =  event => {

        setMessage(event.target.value);
        
      }

    const clickFreezeBtn =  event => {
        event.preventDefault()
        if (isFreezeMode) {
            setIsFreezeMode(false)
        }
        else {

            setIsFreezeMode(!isFreezeMode)
            dispatch({type: "editTODO",
                    isChoosen : isChecked
                    ,isDeleted: isDeleted,
                    description: message
                    ,id: id
            })
        }
    }

    const clickDeleteRestoreBtn = event => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)
        dispatch({type: "editTODO",
        isChoosen : isChecked
        ,isDeleted: newDeleteStatus,
        description: message
        ,id: id
        })
        

    }
    const checkChoosenCheckbox= () => {

        const newCheckedtatus = !isChecked 
        setIsChecked(newCheckedtatus)
        dispatch({type: "editTODO",
        isChoosen : newCheckedtatus
        ,isDeleted: isDeleted,
        description: message
        ,id: id
        })
    }
    const FreezeBtnStatus = () => isFreezeMode ? 'edit' : 'save' 
    const deleteRestoreBtnStatus = () => isDeleted ? 'restore': 'delete' 


    return (
            
        <div className ={`card`} id={id} style={cardStyle}>
            <h3 className="card-title">{title}</h3>
            <img
                src={bergerPhotos[title]}
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
                
            <IconButton id ={`${id}-${deleteRestoreBtnStatus()}`} style={{scale:"1.5"}} 
            onClick={checkChoosenCheckbox}>
                    {
                    isChecked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>
                    }
                </IconButton>
                
            </div>
        </div>
    )
}; 