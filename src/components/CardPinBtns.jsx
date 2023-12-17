import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetTodoList } from "../selectors";
import { IconButton } from '@mui/material';
import { changeMapPinMode, editTODO, editAllTODOS} from '../actions/actions';
import PushPinIcon from '@mui/icons-material/PushPin';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

export const CardPinBtn = ({id}) => {

    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const currCardInfo = TODOList[id]

    const [isPinActive, setIsPinActive] = useState(currCardInfo.isPinBtnDisable);
   

    const clickPinBtn = () => {
        setIsPinActive(true)
        dispatch(changeMapPinMode(true, currCardInfo.id))
        dispatch(editAllTODOS({name: 'isPinBtnDisable', value: true}))

    }
    const clickCancelPin = () => {
        setIsPinActive(!isPinActive)
        dispatch(changeMapPinMode(false, currCardInfo.id))
        dispatch(editAllTODOS({name: 'isPinBtnDisable', value: false}))

    }

    const clickSavePin = () => {
        clickCancelPin()
        dispatch(editTODO(
            {
            id : currCardInfo.id,
            fieldKey : 'isPinBtnDisable',
            fieldUpdateValue: false
            }
        ))
        // dispatch(editTODO( {...currCardInfo, isPinBtnDisable: false, location: {Long: 'avi', Lat: 'berger'}} ))
    }

       return (  
        isPinActive ? (
            <div className='handle-pin-btns'>
                <IconButton className='clear-pin-btn' style={{ scale: "1.5" }} 
                onClick={clickCancelPin}
                >
                    <ClearIcon />
                </IconButton>

                <IconButton className='save-pin-btn' style={{ scale: "1.5" }} 
                onClick={clickSavePin}
                >
                    <SaveIcon />
                </IconButton>
            </div>
        )
        :
        (
            <div className='handle-pin-btns'>
                <IconButton className= 'pin-btn' style={{scale:"1.5"}}
                onClick={clickPinBtn} disabled={currCardInfo.isPinBtnDisable}>
                    <PushPinIcon/>
                </IconButton>
            </div>
        )
)
}