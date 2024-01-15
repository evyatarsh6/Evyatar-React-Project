import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetMapPoints } from "../../selectors";
import { IconButton } from '@mui/material';
import { activeMapPinTODOMode, cancelMapPinTODOMode, updateTooltipStatus} from '../../actions/actions';
import PushPinIcon from '@mui/icons-material/PushPin';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import { useFetchTODOS } from '../../api/hooks/useFetchTODOS';

export const CardPinBtn = ({info}) => {

    const dispatch = useDispatch();
    const {fetchUpdateWantedTODO, fetchUpdateAllTODOS, updateTODOList} = useFetchTODOS()
    const  mapPoints = useSelector(GetMapPoints)
    const [isPinActive, setIsPinActive] = useState(info.isPinBtnDisable);
   

    const clickPinBtn = async () => {

        try {
            await fetchUpdateAllTODOS('isPinBtnDisable', true)
            updateTODOList();     
        } catch (error) {
            console.error(`Error updating TODOs: ${error.message}`);
        }
        
        setIsPinActive(true)
        dispatch(activeMapPinTODOMode(info._id))


    }
    const clickCancelPin = async () => {
        
        setIsPinActive(false)

        try {
            await fetchUpdateAllTODOS('isPinBtnDisable', false)
            updateTODOList();     
        } catch (error) {
            console.error(`Error updating TODOs: ${error.message}`);
        }

        dispatch(cancelMapPinTODOMode())
        dispatch(updateTooltipStatus(false))

    }

    const clickSavePin = async () => {
        clickCancelPin()

        try {
            await fetchUpdateWantedTODO(info._id, 'location', mapPoints[info._id].location)
            updateTODOList();     
        } catch (error) {
            console.error(`Error updating TODOs: ${error.message}`);
        }
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
                onClick={clickPinBtn} disabled={info.isPinBtnDisable}>
                    <PushPinIcon/>
                </IconButton>
            </div>
        )
)
}