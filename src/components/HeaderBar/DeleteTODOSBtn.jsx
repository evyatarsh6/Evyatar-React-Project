import {Button} from '@mui/material';
import { deleteFilterKind } from "../../constans/cardConstans";
import useFilterKind from "../../hooks/useFilterKind";

export const DeleteTODOSBtn = ({style}) => {

    const {updateFilterKind,filterKindBtnStatus} = useFilterKind()
    // const updateFilterDeleteTODOS = updateFilterKind(deleteFilterKind)
    // const filterDeleteTODOSStatus = filterKindBtnStatus(deleteFilterKind)


    return (

        <Button
        variant="contained"
        id = {`show-delete-items-btn`}
        className= 'show-delete-items-btn'
        onClick={() => updateFilterKind(deleteFilterKind)}
        // {updateFilterDeleteTODOS}
        style={style}
        >
        {`${filterKindBtnStatus(deleteFilterKind)} show delete items`}
        </Button>
    )
}