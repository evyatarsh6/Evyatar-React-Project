import React, { useId, useState } from 'react';
import ReactSelect from "react-select"
import {bergerPhotos} from '../shared/photos';

export const Card = ({name ="calling his mother", status = 'not-active'}) => {
   
    const cardID = useId()
    const [isChecked, setIsChecked] = useState(false)
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
                <input className="card-description" type="text" placeholder='card description' style={{
                    margin:40,
                }}
            />

                <label htmlFor = {`${cardID}-checkbox`}> {`is selected item : ${isSelected}`}</label>

                <input type="checkbox" id ={`${cardID}-checkbox`}  name= {`isCheck : ${isChecked} `} onChange={handleCheck} style={{
             margin:40,    
            }}
            /> 

            
            </div>
        </div>
    )
}