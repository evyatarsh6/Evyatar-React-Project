import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetMapPoints } from "../../selectors";
import { IconButton } from '@mui/material';
import { TODOListActions, MapActions, updateTooltipStatus} from '../../actions/actions';

// activeMapPinTODOMode, editTODO, editAllTODOS, cancelMapPinTODOMode, updateTooltipStatus
import PushPinIcon from '@mui/icons-material/PushPin';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import { useMutateFieldSingle } from '../../hooks/useMutateTODOS';
import { useCallback } from 'react';

export const CardPinBtn = ({info}) => {

    const dispatch = useDispatch();
    
    const  mapPoints = useSelector(GetMapPoints)
    const mutateSingleUpdateLocation = useMutateFieldSingle()

    const [isPinActive, setIsPinActive] = useState(info.isPinBtnDisable);

    const UpdateTODOSAfterClickPinBtn = () => {

        dispatch(TODOListActions.editAllTODOS(
            {
            fieldKey : 'isPinBtnDisable',
            fieldUpdateValue: true 
            }
        ))
        
        dispatch(TODOListActions.editTODO(
            {
            _id : info._id,
            fieldKey : 'isPinBtnDisable',
            fieldUpdateValue: false 
            }
        ))

    }

    const clickPinBtn = async () => {
        UpdateTODOSAfterClickPinBtn()

        setIsPinActive(true)
        dispatch(MapActions.mapPinTODOMode.activeMode(info._id))


    }
    const clickCancelPin = useCallback( async () => {

        setIsPinActive(false)

        dispatch(MapActions.mapPinTODOMode.cancelMode())
        dispatch(updateTooltipStatus(false))
      
        dispatch(TODOListActions.editAllTODOS(
                {
                    fieldKey: 'isPinBtnDisable',
                    fieldUpdateValue: false
                }
        ))


    },[dispatch])

    const clickSavePin = useCallback( async () => {
        clickCancelPin()

        mutateSingleUpdateLocation.mutate(
            {
                wantedID : info._id ,
                wantedField : 'location',
                wantedFieldUpdateVal :  mapPoints[info._id]?.location || []
            }
        )

        dispatch(TODOListActions.editTODO(
            {
            _id : info._id,
            fieldKey : 'location',
            fieldUpdateValue: mapPoints[info._id].location
            }
        ))

    },[clickCancelPin, dispatch, info._id, mapPoints,  mutateSingleUpdateLocation])

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