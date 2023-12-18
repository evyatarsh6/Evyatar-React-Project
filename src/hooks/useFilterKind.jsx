import { useDispatch, useSelector } from "react-redux"
import { GetFilterKind } from "../selectors";
import { changeFilterKind } from "../actions/actions";
import { normalFilterKind } from "../constans/cardConstans";


const useFilterKind = wantedFilterKind => {

    const dispatch = useDispatch();
    const filterKind = useSelector(GetFilterKind);

    const SwitchFilterKind = wantedFilterKind => dispatch(changeFilterKind(wantedFilterKind))

    const clickWantedFilterKindBtn = wantedFilterKind => () =>  {
        (filterKind!== wantedFilterKind) ? SwitchFilterKind(wantedFilterKind) : SwitchFilterKind(normalFilterKind)
    }

    const filterKindBtnStatus = wantedFilterKind  => (filterKind !== wantedFilterKind)? 'turn on': 'turn off'


    return (
        {
           updateFilterKind: clickWantedFilterKindBtn(wantedFilterKind),
           filterKindStatus: filterKindBtnStatus(wantedFilterKind)
       }

    )

}

export default useFilterKind