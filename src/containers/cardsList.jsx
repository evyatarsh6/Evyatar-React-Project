import { useMemo } from "react";
import { Card } from "../components/Card"
import { useSelector } from "react-redux"
import { GetTodoList, GetFilterKind } from "../selectors";



export const CardList = () => { 

    const TODOList = useSelector(GetTodoList)
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
                    props = {TODO}
                    key={TODO.id}
                    />
                    ))
                }
            
            </ul>


    )
    
}