import React, { useId, useState } from 'react';
import ReactSelect from "react-select"
import { bergerPhotos } from '../shared/photos';


export const Item = ({name, status = 'not-active'}) => {
   
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
        <div
        id= {itemID} className='item'
        >

        <div
        className ={`item-checked-${isChecked}-and-${status}`}
        >
            <div id = 'try'>

            <img
            src={ bergerPhotos['calling his mother']}
            >
            </img>
            </div>

        <input
            type= 'checkbox'
            className= 'choose-item-checkbox'
            onClick={handleCheck}
        >
        </input>
        <div
            className = "item-body"
        >
            {name}
        </div>
        <button
            className = "item-delete-btn"
        >
        </button>

      </div>
      </div>
    )
}

//   <div className="card">
    //     <img
    //       src={`${bergerPhotos['calling his mother']}`}
    //       className="card-image"
    //     />
    //     <div className="card-body">
    //       <h3 className="card-title">Card Title</h3>
    //       <p className="card-description">
    //         This is a description of the card. You can add more content here.
    //       </p>
    //     </div>
    //   </div>