import { useMemo} from "react";
import { Card } from "../components/Cards/Card";
import { GetFilterKind, GetTODOList } from "../selectors";
import { useSelector } from "react-redux";
import { isShownTODO } from "../utils/generalUtils";

export const CardList = () => {


    const TODOList = useSelector(GetTODOList)
    const filterKind = useSelector(GetFilterKind)

    const FilterdArr = useMemo(() => {
        return Object.values(TODOList).filter(TODO => isShownTODO(TODO, filterKind))

    },[ filterKind, TODOList])

    return (

            <ul className="flex-container">
            {
                FilterdArr.map( TODO => (
                    
                    <Card
                    TODO = {TODO}
                    key={TODO['_id']}
                    />
                    ))
                }
            
            </ul>


    )
    
}