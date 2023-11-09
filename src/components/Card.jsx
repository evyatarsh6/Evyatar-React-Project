import React, { useId, useState, useRef } from 'react';
import {bergerPhotos} from '../shared/photos';


export const Card = ({title ="calling his mother", isCheckedProp = false}) => {
   
const cardStyle =  {
    borderColor : 'black',
    borderStyle : 'solid',
    display: 'block',
    padding: 20,
    width : 450,
    height :450,
}

const imgStyle = {
    width : "40%" ,
    height :"40%",
    position: 'relative',
    display : 'center',
    borderColor : 'black',
    borderStyle : 'solid',
    backgroundColor: 'black'
}

    const cardID = useId()
    const currInputValue = useRef(null)
    const [isChecked, setIsChecked] = useState(isCheckedProp)
    const [isFreezeMode,setIsFreezeMode] = useState(true)
    const [message, setMessage] = useState('avi berger is a god');
    const [isDeleted,setIsDeleted ] = useState(false)


    const handleInputType =  event => {

        setMessage(event.target.value);
        
      }

    const clickFreezeBtn =  event => {
        event.preventDefault()
        isFreezeMode ? setIsFreezeMode(false): setIsFreezeMode(true)
    } 
    const FreezeBtnStatus = () => isFreezeMode ? 'edit' : 'save' 


    return (
                
        <div className ={`card-selected-${isChecked}`} id={cardID} style={cardStyle}>
            <h3 className="card-title">{title}</h3>
                <img
                    src={bergerPhotos[title]}
                    className="card-image"
                    style= { imgStyle }

                />

            <div style={{display: 'flex'}}>
                <input ref = {currInputValue} value={message}
                className="card-description" type="text" placeholder='card description'
                onChange={handleInputType} disabled = {isFreezeMode}
                style={{
                    textAlign: "center",
                    margin:30,
                    width: "150%",
                    height: "60%"
                }}
            />

                <button className= { `${FreezeBtnStatus()}- btn`}
                onClick ={clickFreezeBtn}
                style ={{
                    display: 'flex',
                    margin: "auto"
                    
                }}>
                    {`${FreezeBtnStatus()}- btn`}
                </button>

            </div>
                <input type="checkbox" id ={`${cardID}-${isChecked}-checkbox`} onChange={ () => setIsChecked(!isChecked)}/> 
        
        </div>
    )
}; 