import React, { useId, useState } from 'react';

export const Item = ({name}) => {
   
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

        <>
        <div
        className = "item"
        >
            {name}

            <input
            type= 'checkbox'
            id = {`${itemID}-choose-item-checkbox`}
            className= 'choose-item-checkbox'
            onClick={handleCheck}
            >
            </input>
        </div>

      </>
 
    )
}