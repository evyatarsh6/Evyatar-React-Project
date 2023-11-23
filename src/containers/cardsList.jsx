import { useMemo } from "react";
import { Card } from "../components/Card"
import { useSelector } from "react-redux"


export const CardList = () => { 

    // const getTodoList = state => state.UI.todoList

    const TODOList = useSelector((state) => state.UI.TODOList);
    const filterKind = useSelector((state) => state.UI.filterKind);

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
    },[filterKind, TODOList])

    return (

        <>
            <ul className="flex-container">
            {
                FilterdArr.map( TODO => (
                          
                    <Card
                        key={TODO.id}
                        id={TODO.id}
                        description={TODO.description}
                        title={TODO.kind}
                        isCheckedProp={TODO.isChoosen}
                        isDeletedProp = {TODO.isDeleted}
                    />
                ))
            }
            
            </ul>
        </>


    )
    
}