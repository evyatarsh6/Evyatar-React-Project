import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useMutateFieldSingle } from '../../hooks/useMutateData';
import {  TODOListActions} from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';



export const CardChooseBtn = ({_id, isChoosen}) => {
    
    const dispatch = useDispatch()

    const mutateSingleUpdateChoosenStatus = useMutateFieldSingle()
      
    const checkChoosenCheckbox = useCallback(async () => {
        
        const newCheckedtatus = !isChoosen
        mutateSingleUpdateChoosenStatus.mutate(
            {
                wantedID : _id ,
                wantedField : 'isChoosen',
                wantedFieldUpdateVal : newCheckedtatus
            })
        dispatch(TODOListActions.editTODO(
            {
            _id : _id,
            fieldKey : 'isChoosen',
            fieldUpdateValue: newCheckedtatus 
            }
        ))

    },[dispatch,_id, isChoosen,mutateSingleUpdateChoosenStatus])

    return (

        <IconButton 
        style={{scale:"1.5"}} 
        onClick={checkChoosenCheckbox}>
                {
                isChoosen ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>
                }
        </IconButton>
            


    )
}