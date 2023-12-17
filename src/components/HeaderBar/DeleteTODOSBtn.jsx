import { useDispatch, useSelector } from "react-redux"
import { GetFilterKind } from "../../selectors"
import {Button} from '@mui/material';
import { changeFilterKind } from "../../actions/actions";
import { deleteFilterKind, normalFilterKind } from "../../constans/cardConstans";


export const DeleteTODOSBtn = ({style}) => {

    const dispatch = useDispatch();
    const filterKind = useSelector(GetFilterKind);


    const SwitchFilterKind = filterKind => dispatch(changeFilterKind(filterKind))

    const clickWantedFilterKindBtn = wantedFilterKind => () =>  {
        (filterKind!== wantedFilterKind) ? SwitchFilterKind(wantedFilterKind) : SwitchFilterKind(normalFilterKind)
    }

    const filterKindBtnStatus = wantedFilterKind  => (filterKind !== wantedFilterKind)? 'turn on': 'turn off'

    
    return (

        <Button
        variant="contained"
        id = {`show-delete-items-btn`}
        className= 'show-delete-items-btn'
        onClick={clickWantedFilterKindBtn(deleteFilterKind)}
        style={style}
        >
        {`${filterKindBtnStatus(deleteFilterKind)} show delete items`}
        </Button>
    )
}