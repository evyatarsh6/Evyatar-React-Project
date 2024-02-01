import { useDispatch, useSelector } from "react-redux"
import { GetFilterKind } from "../selectors";
import { changeFilterKind } from "../actions/actions";
import { constans } from "../constans/constans";

const useFilterKind = () => {

    const dispatch = useDispatch();
    const filterKind = useSelector(GetFilterKind);

    const SwitchFilterKind = wantedFilterKind => dispatch(changeFilterKind(wantedFilterKind))

    const updateFilterKind = wantedFilterKind  =>  {
        if (filterKind!== wantedFilterKind)  {
            SwitchFilterKind(wantedFilterKind)    
        }
        else{
            SwitchFilterKind(constans.normalFilterKind)
        }
        
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