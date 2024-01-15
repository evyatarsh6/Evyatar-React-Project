import React, { useState, useRef, useEffect } from 'react';
import { CardPinBtn } from './CardPinBtns';
import { CardFocusBtn } from './CardFocusBtn';

export const CardMapBtns = ({info}) => {
    return (
        <div className='map-btns'> 
            <CardPinBtn info={info}/>
            <CardFocusBtn info= {info}/>
        </div>


    )
}