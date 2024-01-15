import { useState} from 'react';
import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useFetchTODOS } from '../../api/hooks/useFetchTODOS';
import { useMutation } from "react-query";



export const CardChooseBtn = ({info}) => {
    
    const [isChecked, setIsChecked] = useState(info.isChoosen)
    const {fetchUpdateWantedTODO, updateTODOList} = useFetchTODOS()

    const mutation = useMutation( async (updateStatus) => 
    await fetchUpdateWantedTODO(info._id, 'isChoosen', updateStatus));


    const checkChoosenCheckbox = async () => {
        const newCheckedtatus = !isChecked 
        setIsChecked(newCheckedtatus)

        mutation.mutate(newCheckedtatus)

        if (mutation.isLoading) {
            return <span>Choosing...</span>;
        }
        
        if (mutation.isError) {
        console.error(`Error updating TODOs: ${mutation.error}`)
        }
        
        if (mutation.isSuccess) {
            updateTODOList()
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