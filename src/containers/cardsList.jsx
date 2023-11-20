import { useCallback, useEffect, useMemo } from "react"
import { Card } from "../components/Card"
import { useDispatch,useSelector } from "react-redux"
import store from "../store"


export const CardList = ({ appState }) => { 

    const filterKind = appState["filterKind"]
    const TODOList = appState["TODOList"]
    const setFilterKind = appState["setFilterKind"]
    const setTODOList = appState["TODOListUpdate"]

    // const shownTODOS = useSelector((state) => state);
    const dispatch = useDispatch();

    dispatch({type: "normalTODOS"})
    const shownTODOS = useSelector((state) => state.shownTODOS);

    // const handleFilterTODOS = () => {

    //     switch(filterKind) {
    //         case "choosen":
    //             return ( Object.values(TODOList).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted)))
    //         case "delete":
    //             return ( Object.values(TODOList).filter( TODO  => TODO.isDeleted))
    //         case "normal":
    //             return ( Object.values(TODOList).filter( TODO  => !TODO.isDeleted))
    //     }

    // }
    
    // const  filteredTODOS = handleFilterTODOS() 
    
    const TODOUpdateFunc = ( isChoosen ,isDeleted, description , id  ) => (
        setTODOList({...TODOList, [id] : {...TODOList[id], isChoosen, isDeleted, description}})
    )

    return (

        <>

            <ul className="flex-container">
            {
                // filteredTODOS.map((TODO) => (
                shownTODOS.map((TODO) => (
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