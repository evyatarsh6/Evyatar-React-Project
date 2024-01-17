import { useState} from 'react';
import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useMutation } from "react-query";
import { useMutateTODOS } from '../../hooks/useMutateTODOS';



export const CardChooseBtn = ({info}) => {
    
    const [isChecked, setIsChecked] = useState(info.isChoosen)
    const {mutateWantedTODO} = useMutateTODOS()


    const mutation = useMutation({
        mutationFn : async (updateStatus) => {
        await mutateWantedTODO(info._id, 'isChoosen', updateStatus);  
        },
        onError: () => {
            console.error(`Error updating TODOs: ${mutation.error}`)
        },
        onSuccess: () => {
            console.log('done updating')
        }
    })

    const checkChoosenCheckbox = async () => {
        const newCheckedtatus = !isChecked 
        setIsChecked(newCheckedtatus)

        mutation.mutate(newCheckedtatus)
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