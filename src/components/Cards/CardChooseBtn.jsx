import { useState} from 'react';
import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useFetchTODOS } from '../../api/hooks/useFetchTODOS';



export const CardChooseBtn = ({info}) => {
    
    const [isChecked, setIsChecked] = useState(info.isChoosen)
    const {fetchUpdateWantedTODO, updateTODOList} = useFetchTODOS()

    const checkChoosenCheckbox = async () => {
        const newCheckedtatus = !isChecked 
        setIsChecked(newCheckedtatus)
        try {
            await fetchUpdateWantedTODO(info._id, 'isChoosen', newCheckedtatus)
            updateTODOList();     
        } catch (error) {
            console.error(`Error updating TODOs: ${error.message}`);
        }
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