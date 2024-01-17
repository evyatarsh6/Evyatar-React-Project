import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetMapPoints } from "../../selectors";
import { IconButton } from '@mui/material';
import { activeMapPinTODOMode, cancelMapPinTODOMode, updateTooltipStatus} from '../../actions/actions';
import PushPinIcon from '@mui/icons-material/PushPin';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import { useFetchTODOS } from '../../hooks/useFetchTODOS';
import { useMutateTODOS } from '../../hooks/useMutateTODOS';
import { useMutation } from 'react-query';


export const CardPinBtn = ({info}) => {

    const dispatch = useDispatch();
    const {mutateWantedTODO, mutateAllTODOS} = useMutateTODOS()
    const  mapPoints = useSelector(GetMapPoints)
    const [isPinActive, setIsPinActive] = useState(info.isPinBtnDisable);
   
    const mutationSignle = useMutation({
        mutationFn : async (updateStatus) => {
        await mutateWantedTODO(info._id, 'location', updateStatus);  
        },
        onError: () => {
            console.error(`Error updating TODOs: ${mutationSignle.error}`)
        },
        onSuccess: () => {
            console.log('done updating')
        }
    })

    const mutationAll = useMutation({
        mutationFn : async (updateStatus) => {
        await mutateAllTODOS('location', updateStatus);  
        },
        onError: () => {
            console.error(`Error updating TODOs: ${mutationAll.error}`)
        },
        onSuccess: () => {
            console.log('done updating all')
        }
    })
    

    const clickPinBtn = async () => {
        
        mutationAll.mutate('isPinBtnDisable', true)
        
        setIsPinActive(true)
        dispatch(activeMapPinTODOMode(info._id))


    }
    const clickCancelPin = async () => {

        setIsPinActive(false)
        mutationAll.mutate('isPinBtnDisable', false)
        dispatch(cancelMapPinTODOMode())
        dispatch(updateTooltipStatus(false))

    }

    const clickSavePin = async () => {
        clickCancelPin()
        mutationSignle.mutate(info._id, 'location', mapPoints[info._id].location)
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