import { Card } from "../components/Card"
export const CardList = ({ appState }) => { 

    const filterKind = appState["filterKind"]
    const TODOList = appState["TODOList"]
    const setFilterKind = appState["setFilterKind"]
    const setTODOList = appState["TODOListUpdate"]
    
        const handleFilterTODOS = () => {
    
            switch(filterKind) {
                case "choosen":
                    return ( Object.values(TODOList).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted)))
                case "delete":
                    return ( Object.values(TODOList).filter( TODO  => TODO.isDeleted))
                case "normal":
                    return ( Object.values(TODOList).filter( TODO  => !TODO.isDeleted))
            }

    }

    const  filteredTODOS = handleFilterTODOS() 
    


    const TODOUpdateFunc = ( isChoosen ,isDeleted, description , id  ) => (
        setTODOList({...TODOList, [id] : {...TODOList[id], isChoosen, isDeleted, description}})
    )

    return (

        <>

            <ul className="flex-container">
            {
                filteredTODOS.map((TODO) => (
                    <Card
                    key={TODO.id}
                    id={TODO.id}
                    description={TODO.description}
                    title={TODO.kind}
                    isCheckedProp={TODO.isChoosen}
                    isDeletedProp = {TODO.isDeleted}
                    TODOUpdateFunc={TODOUpdateFunc}
                    />
                ))
            }
            
            </ul>
        </>


    )
    
}