import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetMapPoints } from "../../selectors";
import { IconButton } from '@mui/material';
import { activeMapPinTODOMode, cancelMapPinTODOMode, updateTooltipStatus} from '../../actions/actions';
import { activeMapPinTODOMode, editTODO, editAllTODOS, cancelMapPinTODOMode, updateTooltipStatus, addIDToSetChanges} from '../../actions/actions';
import PushPinIcon from '@mui/icons-material/PushPin';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import { useFetchTODOS } from '../../hooks/useFetchTODOS';
import { useUpdateDB } from '../../hooks/useUpdateDB';
import { useMutation } from 'react-query';
import { useMutateAll, useMutateSingle } from '../../hooks/useMutateTODOS';
import { useShownTODOSQuery } from '../../hooks/useShownTODOSQuery';


export const CardPinBtn = ({info}) => {

    const dispatch = useDispatch();
    
    const  mapPoints = useSelector(GetMapPoints)

    const mutateAllPinDisable =  useMutateAll('isPinBtnDisable', true)
    const mutateAllPinEnable =   useMutateAll('isPinBtnDisable', false)
    const mutateSingleUpdateLocation = useMutateSingle(info._id, 'location', mapPoints[info._id]?.location || [])

    const [isPinActive, setIsPinActive] = useState(info.isPinBtnDisable);

    const clickPinBtn = async () => {

        mutateAllPinDisable.mutate()

        setIsPinActive(true)
        dispatch(activeMapPinTODOMode(info._id))


    }
    const clickCancelPin = async () => {

        setIsPinActive(false)

        mutateAllPinEnable.mutate()

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
        mutateSingleUpdateLocation.mutate()

        dispatch(editTODO(
            {
            id : currCardInfo.id,
            fieldKey : 'location',
            fieldUpdateValue: mapPoints[currCardInfo.id].location
            }
        ))
        dispatch(addIDToSetChanges(currCardInfo.id))
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