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
            
            case "noramal":
                return TODOList
            case "choose":
                 return Object.values(TODOList).filter( TODO  => TODO.isChoosen)
            case "delete":
                return Object.values(TODOList).filter( TODO  => TODO.isDeleted)

        }
    }

    return (

        <>

            <ul>
                {
                Object.values(() => handleFilterTODOS()).map((TODO, index) => (
                    <Card key={index} title= {TODO.kind} isCheckedProp = {TODO.isChoosen}>
                    </Card> 
                ))
                }
            </ul>
{

        // <Card title="calling his mother" isCheckedProp = {false}>
        // </Card>
}
        </>
    )
    
}