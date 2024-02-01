import {Button} from '@mui/material';
import {choosenFilterKind} from "../../constans/constans";
import useFilterKind from "../../hooks/useFilterKind";


export const ChoosenTODOSBtn = ({style}) => {

    const {updateFilterKind,filterKindBtnStatus} = useFilterKind()




    return (

        <Button
        variant="contained"
        id = {`show-choosen-items-btn`}
        className= 'show-choosen-items-btn'
        onClick={() => updateFilterKind(choosenFilterKind)}
        style={style}>
        {`${filterKindBtnStatus(choosenFilterKind)} show choosen items`}
        </Button>
    )
}