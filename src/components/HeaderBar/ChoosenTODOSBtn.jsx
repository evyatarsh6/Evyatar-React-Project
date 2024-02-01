import {Button} from '@mui/material';
import { constans } from '../../constans/constans';
import useFilterKind from "../../hooks/useFilterKind";


export const ChoosenTODOSBtn = ({style}) => {

    const {updateFilterKind,filterKindBtnStatus} = useFilterKind()
    
    return (

        <Button
        variant="contained"
        id = {`show-choosen-items-btn`}
        className= 'show-choosen-items-btn'
        onClick={() => updateFilterKind(constans.choosenFilterKind)}
        style={style}>
        {`${filterKindBtnStatus(constans.choosenFilterKind)} show choosen items`}
        </Button>
    )
}