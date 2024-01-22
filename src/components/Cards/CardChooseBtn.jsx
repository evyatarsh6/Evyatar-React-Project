import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useMutateFieldSingle } from '../../hooks/useMutateTODOS';
import {  addIDToSetChanges, editTODO} from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';



export const CardChooseBtn = ({info}) => {
    
    const dispatch = useDispatch()
    const [isChecked,setIsChecked] = useState(info.isChoosen)


    const mutateSingleUpdateChoosenStatus = 
    useMutateFieldSingle(info._id, 'isChoosen', !isChecked)
      
    const checkChoosenCheckbox = useCallback(() => {
        
        mutateSingleUpdateChoosenStatus.mutate()

        const newCheckedtatus = !isChecked 
        setIsChecked(newCheckedtatus)
        dispatch(editTODO(
            {
            _id : info._id,
            fieldKey : 'isChoosen',
            fieldUpdateValue: newCheckedtatus 
            }
        ))
        dispatch(addIDToSetChanges(info._id))

    },[dispatch,info._id,isChecked,mutateSingleUpdateChoosenStatus])

    return (

        <IconButton 
        style={{scale:"1.5"}} 
        onClick={checkChoosenCheckbox}>
                {
                isChecked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>
                }
        </IconButton>
            


    )
}