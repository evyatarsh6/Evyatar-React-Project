import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetTodoList } from "../selectors";
import { CardPinBtn } from './CardPinBtns';
import { CardFocusBtn } from './CardFocusBtn';

export const CardMapBtns = ({id}) => {
    return (
        <div className='map-btns'> 
            <CardPinBtn id={id}/>
            <CardFocusBtn id= {id}/>
        </div>


    )
}