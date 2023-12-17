import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetTodoList } from "../selectors";
import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {  editTODO} from '../actions/actions';


export const CardChooseBtn = ({id}) => {

    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const currCardInfo = TODOList[id]

    const [isChecked, setIsChecked] = useState(currCardInfo.isChoosen)
    const [isDeleted,setIsDeleted ] = useState(currCardInfo.isDeleted)

    const checkChoosenCheckbox= () => {
        const newCheckedtatus = !isChecked 
        setIsChecked(newCheckedtatus)
        dispatch(editTODO(
            {
            id : currCardInfo.id,
            fieldKey : 'isChoosen',
            fieldUpdateValue: newCheckedtatus 
            }
        ))
    }

    const deleteRestoreBtnStatus = () => isDeleted ? 'restore': 'delete' 

    return (

        <IconButton id ={`${currCardInfo.id}-${deleteRestoreBtnStatus()}`} style={{scale:"1.5"}} 
        onClick={checkChoosenCheckbox}>
                {
                isChecked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>
                }
            </IconButton>
            


    )
}