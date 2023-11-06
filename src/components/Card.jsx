import React, { useId, useState, useRef } from 'react';
import {bergerPhotos} from '../shared/photos';


export const Card = ({name ="calling his mother", status = false}) => {
   
    const cardID = useId()
    const currInputValue = useRef(null)
    const [isChecked, setIsChecked] = useState(false)
    const [isEmpty,setIsEmpty] = useState(true)
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

    const handleInputType = event => {

        currInputValue.current = event.target.value;

        if ( isEmpty && currInputValue.current !== null) {
          setIsEmpty(false)
        }
        else if (!isEmpty && currInputValue.current === '') {
          setIsEmpty(true)
        }

        return event.target.value;
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
                <input className="card-description" type="text" placeholder='card description' /*value={handleInputType}*/ onChange={handleInputType} style={{
                    margin:30,
                }}
            />
                <input type="checkbox" id ={`${cardID}-${isChecked}-checkbox`} onChange={handleCheck}
                style={{
                    margin:10,
                }}
            /> 

            
            </div>
        </div>
    )
}