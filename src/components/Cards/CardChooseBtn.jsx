import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useMutateSingle } from '../../hooks/useMutateTODOS';
import {  addIDToSetChanges, editTODO} from '../../actions/actions';



export const CardChooseBtn = ({info}) => {
    
    const isChoosen = info.isChoosen

    const mutateSingleUpdateDeleteStatus = 
    useMutateSingle(info._id, 'isChoosen', !isChoosen)
    
    const checkChoosenCheckbox = async () => {
      
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
        dispatch(addIDToSetChanges(currCardInfo.id))
    }

        mutateSingleUpdateDeleteStatus.mutate()
    }

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