import React, { useId, useState, useRef } from 'react';
import {bergerPhotos} from '../shared/photos';


export const Card = ({name ="calling his mother", status = false}) => {
   
    const cardID = useId()
    const currInputValue = useRef(null)
    const [isChecked, setIsChecked] = useState(false)
    const [isEmpty,setIsEmpty] = useState(true)
    const [isFreezeMode,setIsFreezeMode] = useState(true)

    const [isDeleted,setIsDeleted ] = useState(false)
    const [isSelected, setIsSelected] = useState(false)

    const handleCheck = () => {
        if (isChecked) {
            setIsChecked(false)
        }
        else {
            setIsChecked(true)
        }
    }

    const handleInputType =  event => {

        currInputValue.current = event.target.value;

        if (isEmpty) {

            if (currInputValue.current !== '') {
              setIsEmpty(false)
              return currInputValue.current
            }
            else {
                return ''
            }
        }
        else {
            if (currInputValue.current === '') {
                setIsEmpty(true)
                return ''
            }
            return currInputValue.current

        }
      }

    const clickFreezeBtn =  event => {
        event.preventDefault()
        isFreezeMode ? setIsFreezeMode(false): setIsFreezeMode(true)
    } 
    const FreezeBtnStatus = () => isFreezeMode ? 'edit' : 'save' 


    return (
                
        <div className="card" style={ {
            borderColor : 'black',
            borderStyle : 'solid',
            display: 'block',
            padding: 20,
            width : 450,
            height :450,
        }}>
            <h3 className="card-title">{name}</h3>
            <div className="card-body" id={cardID} style={{
                position: 'relative'
            }}>
                <img
                    src={bergerPhotos[name]}
                    // alt='first image'
                    className="card-image"
                    style= {
                        {
                            width : "40%" ,
                            height :"40%",
                            position: 'relative',
                            display : 'center',
                            padding: 20,
                        }
                    }

                />
            <div style={{display: 'flex'}}>
                <input ref = {currInputValue} defaultValue={'avi berger is a god'}
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
                <input type="checkbox" id ={`${cardID}-${isChecked}-checkbox`} onChange={handleCheck}
                /> 

            
            </div>
        </div>
    )
}; 