import React, { useId, useState, useRef } from 'react';
import {bergerPhotos} from '../shared/photos';

// export const Card = ({appState}) => {
export const Card = ({
    id = null,
    key =null,
    title ="calling his mother",
    isCheckedProp = false,
    isDeletedProp = false, 
    TODOUpdateFunc
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
    backgroundColor: "aliceblue",
    
}

const imgStyle = {
    width : "40%" ,
    height :"40%",
    borderColor : 'black',
    borderStyle : 'solid',
    backgroundColor: 'black'
}
    const currInputValue = useRef(null)
    const [isChecked, setIsChecked] = useState(isCheckedProp)
    const [isFreezeMode,setIsFreezeMode] = useState(true)
    const [message, setMessage] = useState('avi berger is a god');
    const [isDeleted,setIsDeleted ] = useState(isDeletedProp)


    const handleInputType =  event => {

        setMessage(event.target.value);
        
      }

    const clickFreezeBtn =  event => {
        event.preventDefault()
        isFreezeMode ? setIsFreezeMode(false): setIsFreezeMode(true)
    }

    const clickDeleteRestoreBtn = event => {
        event.preventDefault()
        const newDeleteStatus = !isDeleted 
        setIsDeleted(newDeleteStatus)
        TODOUpdateFunc(isChecked, newDeleteStatus, id)
        

    }
    const checkChoosenCheckbox= () => {

        const newCheckedtatus = !isChecked 
        setIsChecked(newCheckedtatus)
        TODOUpdateFunc(newCheckedtatus, isDeleted, id)
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
                        width: "150%",
                        height: "60%",
                        
                    }}
                />

                <button className= { `${FreezeBtnStatus()}- btn`}
                    onClick ={clickFreezeBtn}
                    style ={{
                        width: 200
                    }}
                    >
                    {`${FreezeBtnStatus()}- btn`}
                </button>

            </div>
            <div className='chooseDeleteContainer'  >
                <input type="checkbox" id ={`${key}-${isChecked}-checkbox`} className='choose-checkbox' 
                    onChange={checkChoosenCheckbox}/> 
                <button className='delete-restore-btn' onClick={clickDeleteRestoreBtn}>
                {`${deleteRestoreBtnStatus()}- btn`}
                </button>
            </div>
        </div>
    )
}; 