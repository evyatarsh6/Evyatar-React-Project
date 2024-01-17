import {Button} from '@mui/material';
import {choosenFilterKind} from "../../constans/cardConstans";
import useFilterKind from "../../hooks/useFilterKind";


export const ChoosenTODOSBtn = ({style}) => {

    const {updateFilterKind,filterKindBtnStatus} = useFilterKind()
    // const updateFilterChoosenTODOS = updateFilterKind(choosenFilterKind)
    // const filterChoosenTODOSStatus = filterKindBtnStatus(choosenFilterKind)




    return (

        <Button
        variant="contained"
        id = {`show-choosen-items-btn`}
        className= 'show-choosen-items-btn'
        onClick={() => updateFilterKind(choosenFilterKind)}
        // {updateFilterChoosenTODOS}
        style={style}>
        {`${filterKindBtnStatus(choosenFilterKind)} show choosen items`}
        </Button>
    )
}