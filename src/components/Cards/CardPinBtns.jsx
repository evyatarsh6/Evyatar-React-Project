import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetMapPoints, GetTodoList } from "../../selectors";
import { IconButton } from '@mui/material';
import { activeMapPinTODOMode, editTODO, editAllTODOS, activeClearMapPointsMode} from '../../actions/actions';
import PushPinIcon from '@mui/icons-material/PushPin';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

export const CardPinBtn = ({id}) => {

    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const mapPoints = useSelector(GetMapPoints)
    const currCardInfo = TODOList[id]

    const [isPinActive, setIsPinActive] = useState(currCardInfo.isPinBtnDisable);
   

    const clickPinBtn = () => {
        setIsPinActive(true)
        dispatch(activeMapPinTODOMode(currCardInfo.id))
        dispatch(editAllTODOS(
            {
                fieldKey: 'isPinBtnDisable',
                fieldUpdateValue: true
            }
        ))

    }
    const clickCancelPin = () => {
        setIsPinActive(!isPinActive)
        dispatch(editAllTODOS(
                {
                    fieldKey: 'isPinBtnDisable',
                    fieldUpdateValue: false
                }
        ))

    }

    const clickSavePin = () => {
        clickCancelPin()
        dispatch(editTODO(
            {
            id : currCardInfo.id,
            fieldKey : 'location',
            fieldUpdateValue: mapPoints[currCardInfo.id].location
            }
        ))
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