import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useFetchTODOS } from '../../api/hooks/useFetchTODOS';
import { updateTODOListStatus } from '../../actions/actions';



export const CardChooseBtn = ({info}) => {

    const dispatch = useDispatch()
    const [isChecked, setIsChecked] = useState(info.isChoosen)
    const {fetchUpdateWanted} = useFetchTODOS()

    const checkChoosenCheckbox = async () => {
        const newCheckedtatus = !isChecked 
        setIsChecked(newCheckedtatus)
        await fetchUpdateWanted(info._id, 'isChoosen', newCheckedtatus)
        dispatch(updateTODOListStatus(true));
    }

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