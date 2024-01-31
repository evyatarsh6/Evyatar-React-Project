import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import ParaglidingIcon from '@mui/icons-material/Paragliding';
import { isLocationExist } from '../../utils/generalUtils';
import { MapActions } from '../../actions/actions';

export const CardFocusBtn = ({info}) => {

    const dispatch = useDispatch();

    const clickFocusBtn = () => dispatch(  MapActions.focusWantedTODO(info.location))
    

       return (  
        <div className= 'handle-focus-btns'>
                    <IconButton className= 'focus-btn' style={{scale:"1.5"}}
                    onClick={clickFocusBtn} 
                    disabled = {!isLocationExist(info.location)}
                    >
                        <ParaglidingIcon/>
                    </IconButton>
                    
                </div>
)
}