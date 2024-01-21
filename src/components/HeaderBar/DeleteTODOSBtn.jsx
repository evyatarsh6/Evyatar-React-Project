import {Button} from '@mui/material';
import { deleteFilterKind } from "../../constans/cardConstans";
import useFilterKind from "../../hooks/useFilterKind";

export const DeleteTODOSBtn = ({style}) => {

    const {updateFilterKind,filterKindBtnStatus} = useFilterKind()


    return (

        <Button
        variant="contained"
        id = {`show-delete-items-btn`}
        className= 'show-delete-items-btn'
        onClick={() => updateFilterKind(deleteFilterKind)}
        style={style}
        >
        {`${filterKindBtnStatus(deleteFilterKind)} show delete items`}
        </Button>
    )
}