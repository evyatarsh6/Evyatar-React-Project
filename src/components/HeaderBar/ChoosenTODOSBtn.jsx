import {Button} from '@mui/material';
import {choosenFilterKind} from "../../constans/cardConstans";
import useFilterKind from "../../hooks/useFilterKind";


export const ChoosenTODOSBtn = ({style}) => {

    const currFilterKind = useFilterKind(choosenFilterKind)
    const updateFilterChoosenTODOS = currFilterKind.updateFilterKind
    const filterChoosenTODOSStatus = currFilterKind.filterKindStatus

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