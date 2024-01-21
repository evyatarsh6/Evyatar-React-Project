import { useMemo} from "react";
import { Card } from "../components/Cards/Card";
import { GetFilterKind, GetTODOList } from "../selectors";
import { useSelector } from "react-redux";

export const CardList = () => {


    const TODOList = useSelector(GetTODOList)
    const filterKind = useSelector(GetFilterKind)

    const FilterdArr = useMemo(() => {
        switch(filterKind){
            case "normal":
                return Object.values(TODOList).filter( TODO  => !TODO.isDeleted)
            case "delete":
                return Object.values(TODOList).filter( TODO  => TODO.isDeleted)
            case "choosen":
                return Object.values(TODOList).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted))
            default:
                return []
        }

    },[ filterKind, TODOList])

    return (

            <ul className="flex-container">
            {
                FilterdArr.map( TODO => (
                    
                    <Card
                    info = {TODO}
                    key={TODO._id}
                    />
                    ))
                }
            
            </ul>


    )
    
}