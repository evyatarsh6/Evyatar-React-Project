import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetTodoList } from "../../selectors";
import { IconButton } from '@mui/material';
import ParaglidingIcon from '@mui/icons-material/Paragliding';
import { isLocationExist } from '../../utils/generalUtils';
import { focusWantedTODO } from '../../actions/actions';

export const CardFocusBtn = ({info}) => {

    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const currCardInfo = info

    const clickFocusBtn = () => dispatch(focusWantedTODO(currCardInfo.location))
    

       return (  
        <div className= 'handle-focus-btns'>
                    <IconButton className= 'focus-btn' style={{scale:"1.5"}}
                    onClick={clickFocusBtn} 
                    disabled = {!isLocationExist(currCardInfo.location)}
                    >
                        <ParaglidingIcon/>
                    </IconButton>
                    
                </div>
)
}