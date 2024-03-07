import React from 'react';
import { CardPinBtn } from './CardPinBtns';
import { CardFocusBtn } from './CardFocusBtn';

export const CardMapBtns = ({TODO}) => {
    const {_id, isPinBtnDisable, location} = TODO
    return (
        <div className='map-btns'> 
            <CardPinBtn _id={_id} isPinBtnDisable={isPinBtnDisable}/>
            <CardFocusBtn location= {location}/>
        </div>


    )
}