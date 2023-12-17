import { useDispatch, useSelector } from "react-redux"
import { GetFilterKind } from "../../selectors"
import {Button} from '@mui/material';
import { changeFilterKind } from "../../actions/actions";
import { choosenFilterKind, normalFilterKind } from "../../constans/cardConstans";


export const ChoosenTODOSBtn = ({style}) => {

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
        id = {`show-choosen-items-btn`}
        className= 'show-choosen-items-btn'
        onClick={clickWantedFilterKindBtn(choosenFilterKind)}
        style={style}>
        {`${filterKindBtnStatus(choosenFilterKind)} show choosen items`}
        </Button>
    )
}