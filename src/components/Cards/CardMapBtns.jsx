import React, { useState, useRef, useEffect } from 'react';
import { CardPinBtn } from './CardPinBtns';
import { CardFocusBtn } from './CardFocusBtn';

export const CardMapBtns = ({info}) => {
    return (
        <div className='map-btns'> 
            <CardPinBtn _id={info._id} isPinBtnDisable={info.isPinBtnDisable}/>
            <CardFocusBtn location= {info.location}/>
        </div>


    )
}