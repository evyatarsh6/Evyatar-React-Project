import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetMapPoints } from "../../selectors";
import { IconButton } from '@mui/material';
import { activeMapPinTODOMode, editTODO, editAllTODOS, cancelMapPinTODOMode, updateTooltipStatus, addIDToSetChanges}
from '../../actions/actions';
import PushPinIcon from '@mui/icons-material/PushPin';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
// import { useMutateFieldAllDocu, useMutateFieldSingle } from '../../hooks/useMutateTODOS';

export const CardPinBtn = ({info}) => {

    const dispatch = useDispatch();
    
    const  mapPoints = useSelector(GetMapPoints)

    // const mutateAllPinDisable =  useMutateFieldAllDocu('isPinBtnDisable', true)
    // const mutateAllPinEnable =   useMutateFieldAllDocu('isPinBtnDisable', false)
    // const mutateSingleUpdateLocation = useMutateFieldSingle(info._id, 'location', mapPoints[info._id]?.location || [])

    const [isPinActive, setIsPinActive] = useState(info.isPinBtnDisable);

    const UpdateTODOSAfterClickPinBtn = () => {

        dispatch(editAllTODOS(
            {
            fieldKey : 'isPinBtnDisable',
            fieldUpdateValue: true 
            }
        ))
        
        dispatch(editTODO(
            {
            _id : info._id,
            fieldKey : 'isPinBtnDisable',
            fieldUpdateValue: false 
            }
        ))

    }



    const clickPinBtn = async () => {
        // mutateAllPinDisable.mutate()

        UpdateTODOSAfterClickPinBtn()

        setIsPinActive(true)
        dispatch(activeMapPinTODOMode(info._id))


    }
    const clickCancelPin = async () => {

        setIsPinActive(false)
        
        // mutateAllPinEnable.mutate()

        dispatch(cancelMapPinTODOMode())
        dispatch(updateTooltipStatus(false))
      
        dispatch(editAllTODOS(
                {
                    fieldKey: 'isPinBtnDisable',
                    fieldUpdateValue: false
                }
        ))


    }

    const clickSavePin = async () => {
        clickCancelPin()
        // mutateSingleUpdateLocation.mutate()

        dispatch(editTODO(
            {
            _id : info._id,
            fieldKey : 'location',
            fieldUpdateValue: mapPoints[info._id].location
            }
        ))
        dispatch(addIDToSetChanges(info._id))
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