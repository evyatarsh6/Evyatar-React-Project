import { useDispatch, useSelector } from 'react-redux'
import { GetFilterKind } from '../selectors'
import { changeFilterKind } from '../actions/actions'
import { constants } from '../constants/constants'

const useFilterKind = () => {
    const dispatch = useDispatch()
    const filterKind = useSelector(GetFilterKind)

    const SwitchFilterKind = wantedFilterKind => dispatch(changeFilterKind(wantedFilterKind))

    const updateFilterKind = wantedFilterKind => (filterKind !== wantedFilterKind) ? SwitchFilterKind(wantedFilterKind) : SwitchFilterKind(constants.normalFilterKind)

    const filterKindBtnStatus = wantedFilterKind => (filterKind !== wantedFilterKind) ? 'turn on' : 'turn off'

    return (
        {
            updateFilterKind,
            filterKindBtnStatus
        }

    )
}

export default useFilterKind
