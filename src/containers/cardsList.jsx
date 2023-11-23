import { Card } from "../components/Card"
import { useSelector } from "react-redux"


export const CardList = () => { 

    const TODOList = useSelector((state) => state.UI.TODOList);
    const filterKind = useSelector((state) => state.UI.filterKind);

    const FilterdArr = () => {
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
    }

    const shownTODOS = FilterdArr()

    return (

        <>
            <ul className="flex-container">
            {
                shownTODOS.map( TODO => (
                          
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