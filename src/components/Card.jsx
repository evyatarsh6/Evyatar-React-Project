import React, { useId, useState, useRef } from 'react';
import {bergerPhotos} from '../shared/photos';

// export const Card = ({appState}) => {
export const Card = ({key =null, title ="calling his mother", isCheckedProp = false, isDeletedProp = false}) => {


const cardStyle =  {
    borderColor : 'black',
    borderStyle : 'solid',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
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
    // position: 'relative',
    // display : 'center',
    borderColor : 'black',
    borderStyle : 'solid',
    backgroundColor: 'black'
}

    const cardID = useId()
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

    const clickDeleteBtn = event => {
        event.preventDefault()
        setIsDeleted(!isDeleted)

    }
    const FreezeBtnStatus = () => isFreezeMode ? 'edit' : 'save' 


    return (
                
        // <div className ={`card-selected-${isChecked}`} id={cardID} style={cardStyle}>
        <div className ={`card`} id={cardID} style={cardStyle}>
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
                <input type="checkbox" id ={`${cardID}-${isChecked}-checkbox`} className='choose-checkbox' 
                    onChange={ () => setIsChecked(!isChecked)}/> 
                <button className='delete-btn' onClick={clickDeleteBtn}>
                    delete TODO 
                </button>
            </div>
        </div>
    )
}; 