import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useMutateSingle } from '../../hooks/useMutateTODOS';



export const CardChooseBtn = ({info}) => {
    
    const isChoosen = info.isChoosen

    const mutateSingleUpdateDeleteStatus = 
    useMutateSingle(info._id, 'isChoosen', !isChoosen)

    const checkChoosenCheckbox = async () => {

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