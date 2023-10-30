import React, { useId, useState } from 'react';
import ReactSelect from "react-select"
import bergerPhotos from '../shared/photos';


export const Card = ({name, status = 'not-active'}) => {
   
    const itemID = useId()
    const [isChecked, setIsChecked] = useState(false)

    const handleCheck = () => {
        if (isChecked) {
            setIsChecked(false)
        }
        else {
            setIsChecked(true)
        }
    }
    return (
                
        <div className="card">
        <img
            src={bergerPhotos.try}
            alt='first image'
            className="card-image"
        />
        <div className="card-body">
            <h3 className="card-title">Card Title</h3>
            <p className="card-description">
            This is a description of the card. You can add more content here.
            </p>
        </div>
        </div>
    )
}