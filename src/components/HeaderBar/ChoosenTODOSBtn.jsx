import {Button} from '@mui/material';
import {choosenFilterKind} from "../../constans/cardConstans";
import useFilterKind from "../../hooks/useFilterKind";


export const ChoosenTODOSBtn = ({style}) => {

    const updateFilterChoosenTODOS = useFilterKind(choosenFilterKind).updateFilterKind
    const filterChoosenTODOSStatus = useFilterKind(choosenFilterKind).filterKindStatus

    return (

        <Button
        variant="contained"
        id = {`show-choosen-items-btn`}
        className= 'show-choosen-items-btn'
        onClick={updateFilterChoosenTODOS}
        style={style}>
        {`${filterChoosenTODOSStatus} show choosen items`}
        </Button>
    )
}