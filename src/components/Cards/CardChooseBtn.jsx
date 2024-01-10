import React, { useState, useRef, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import {  editTODO} from '../../actions/actions';


export const CardChooseBtn = ({info}) => {

    // const dispatch = useDispatch();

    const [isChecked, setIsChecked] = useState(info.isChoosen)
    const [isDeleted,setIsDeleted ] = useState(info.isDeleted)

    const checkChoosenCheckbox= () => {
        const newCheckedtatus = !isChecked 
        setIsChecked(newCheckedtatus)
        // dispatch(editTODO(
        //     {
        //     id : info._id,
        //     fieldKey : 'isChoosen',
        //     fieldUpdateValue: newCheckedtatus 
        //     }
        // ))
    }

    const deleteRestoreBtnStatus = () => isDeleted ? 'restore': 'delete' 

    return (

        <IconButton id ={`${info._id}-${deleteRestoreBtnStatus()}`} style={{scale:"1.5"}} 
        onClick={checkChoosenCheckbox}>
                {
                isChecked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>
                }
            </IconButton>
            


    )
}