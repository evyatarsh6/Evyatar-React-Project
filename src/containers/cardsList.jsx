import { useCallback, useEffect, useMemo } from "react"
import { Card } from "../components/Card"
import { useDispatch,useSelector } from "react-redux"
import store from "../store"
import { object } from "prop-types"


export const CardList = ({ appState }) => { 

    const filterKind = appState["filterKind"]
    const TODOList = appState["TODOList"]
    const setFilterKind = appState["setFilterKind"]
    const setTODOList = appState["TODOListUpdate"]

    const dispatch = useDispatch();
    // const shownTODOS = dispatch({type:"normalTODOS"})
    const shownTODOS = useSelector((state) => state.addNewTODO);

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
        dispatch({type: "editTODO", isChoosen ,isDeleted, description , id})
        // setTODOList({...TODOList, [id] : {...TODOList[id], isChoosen, isDeleted, description}})
    )

    return (

        <>

            <ul className="flex-container">
            {
                // filteredTODOS.map((TODO) => (
                // shownTODOS.map((TODO) => (
                Object.values(shownTODOS).map((TODO) => (
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