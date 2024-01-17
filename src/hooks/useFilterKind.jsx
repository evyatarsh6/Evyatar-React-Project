import { useDispatch, useSelector } from "react-redux"
import { GetFilterKind } from "../selectors";
import { changeFilterKind } from "../actions/actions";
import { normalFilterKind } from "../constans/cardConstans";
import { updateTODOListStatus } from "../actions/actions";

const useFilterKind = () => {

    const dispatch = useDispatch();
    const filterKind = useSelector(GetFilterKind);

    const SwitchFilterKind = wantedFilterKind => dispatch(changeFilterKind(wantedFilterKind))

    const updateFilterKind = wantedFilterKind  =>  {
        if (filterKind!== wantedFilterKind)  {
            SwitchFilterKind(wantedFilterKind)    
        }
        else{
            SwitchFilterKind(normalFilterKind)
        }
        dispatch(updateTODOListStatus(true));
        
    }

    const filterKindBtnStatus = wantedFilterKind  => (filterKind !== wantedFilterKind)? 'turn on': 'turn off'


    return (
        {
           updateFilterKind: updateFilterKind,
           filterKindBtnStatus: filterKindBtnStatus
       }

    )

}

export default useFilterKind