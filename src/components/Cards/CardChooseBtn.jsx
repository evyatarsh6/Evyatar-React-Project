import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useMutateFieldSingle } from '../../hooks/useMutateTODOS';
import {  addIDToSetChanges, editTODO} from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';



export const CardChooseBtn = ({info}) => {
    
    const dispatch = useDispatch()

    const mutateSingleUpdateChoosenStatus = useMutateFieldSingle()
      
    const checkChoosenCheckbox = useCallback(async () => {
        
        const newCheckedtatus = !info.isChoosen
        mutateSingleUpdateChoosenStatus.mutate(
            {
                wantedID : info._id ,
                wantedField : 'isChoosen',
                wantedFieldUpdateVal : newCheckedtatus
            })
        dispatch(editTODO(
            {
            _id : info._id,
            fieldKey : 'isChoosen',
            fieldUpdateValue: newCheckedtatus 
            }
        ))

    },[dispatch,info._id, info.isChoosen,mutateSingleUpdateChoosenStatus])

    return (

        <IconButton 
        style={{scale:"1.5"}} 
        onClick={checkChoosenCheckbox}>
                {
                info.isChoosen ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>
                }
        </IconButton>
            


    )
}