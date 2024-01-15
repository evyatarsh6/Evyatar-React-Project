import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetMapPoints, GetTodoList } from "../../selectors";
import { IconButton } from '@mui/material';
import { activeMapPinTODOMode, cancelMapPinTODOMode, updateTODOListStatus, updateTooltipStatus} from '../../actions/actions';
import PushPinIcon from '@mui/icons-material/PushPin';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import { useFetchTODOS } from '../../api/hooks/useFetchTODOS';

export const CardPinBtn = ({info}) => {

    const dispatch = useDispatch();
    const {fetchUpdateWantedTODO} = useFetchTODOS()
    const currCardInfo = info

    const [isPinActive, setIsPinActive] = useState(currCardInfo.isPinBtnDisable);
   

    const clickPinBtn = async () => {
        try {
            await fetchUpdateWantedTODO(info._id, 'isPinBtnDisable', true)
            dispatch(updateTODOListStatus(true));     
        } catch (error) {
            console.error(`Error updating TODOs: ${error.message}`);
        }

        dispatch(activeMapPinTODOMode(currCardInfo._id))

    }
    const clickCancelPin = async () => {

        try {
            await fetchUpdateWantedTODO(info._id, 'isPinBtnDisable', false)
            dispatch(updateTODOListStatus(true));     
        } catch (error) {
            console.error(`Error updating TODOs: ${error.message}`);
        }

        dispatch(cancelMapPinTODOMode())
        dispatch(updateTooltipStatus(false))

    }

    const clickSavePin = () => {
        clickCancelPin()
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