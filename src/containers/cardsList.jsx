import { Card } from "../components/Card"
import { useEffect, useReducer, useState } from "react"
import { TODOReducer, filterTODOSByReg } from "../reducers/handleTODOSReducer"


export const CardList = ({appState}) => { 

    const filterKind = appState["filterKind"]
    const actionDetails = appState['actionDetails']
    const TODOList = appState["TODOList"]
    const setFilterKind = appState["setFilterKind"]
    const setAction = appState["setAction"]
    const setTODOList = appState["TODOListUpdate"]


    const handleFilterTODOS = () => {

        switch(filterKind) {

            case "choosen":
                console
                 return Object.values(TODOList).filter( TODO  => TODO.isChoosen === true)
            case "delete":
                return Object.values(TODOList).filter( TODO  => TODO.isDeleted === true)
            case "normal":
                return Object.values(TODOList).filter( TODO  => TODO.isDeleted === false)
        }

    }

    const TODOSListener = () => {

    }

    return (

        <>

            <ul className="flex-container">
            {
            handleFilterTODOS().map((TODO, index) => (
                <Card
                key={Object.keys(TODOList)[index]}
                title={TODO.kind}
                isCheckedProp={TODO.isChoosen}
                isDeletedProp = {TODO.isDeleted}
                // isCheckedProp={true}
                // isDeletedProp = {true}
                />
            ))
            }
            
            </ul>
        </>


    )
    
}