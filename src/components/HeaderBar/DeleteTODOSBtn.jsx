import {Button} from '@mui/material';
import { deleteFilterKind } from "../../constans/cardConstans";
import useFilterKind from "../../hooks/useFilterKind";

export const DeleteTODOSBtn = ({style}) => {

    const updateFilterDeleteTODOS = useFilterKind(deleteFilterKind).updateFilterKind
    const filterDeleteTODOSStatus = useFilterKind(deleteFilterKind).filterKindStatus

    return (

        <Button
        variant="contained"
        id = {`show-delete-items-btn`}
        className= 'show-delete-items-btn'
        onClick={updateFilterDeleteTODOS}
        style={style}
        >
        {`${filterDeleteTODOSStatus} show delete items`}
        </Button>
    )
}