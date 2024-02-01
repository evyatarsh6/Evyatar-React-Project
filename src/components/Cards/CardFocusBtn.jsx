import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import ParaglidingIcon from '@mui/icons-material/Paragliding';
import { isLocationExist } from '../../utils/generalUtils';
import { MapActions } from '../../actions/actions';

export const CardFocusBtn = ({location}) => {

    const dispatch = useDispatch();

    const clickFocusBtn = () => dispatch(  MapActions.focusWantedTODO(location))
    

       return (  
        <div className= 'handle-focus-btns'>
                    <IconButton className= 'focus-btn' style={{scale:"1.5"}}
                    onClick={clickFocusBtn} 
                    disabled = {!isLocationExist(location)}
                    >
                        <ParaglidingIcon/>
                    </IconButton>
                    
                </div>
)
}