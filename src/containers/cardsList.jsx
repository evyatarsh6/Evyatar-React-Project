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

    const TODOS = TODOList
    
    // const TODOS = localStorage.getItem('TODOLIST')
    // const setTODOS = localStorage.getItem('TODOLIST')

    const handleFilterTODOS = () => {

        switch(filterKind) {
            case "choosen":
                 return Object.values(TODOS).filter( TODO  => TODO.isChoosen === true)
            case "delete":
                return Object.values(TODOS).filter( TODO  => TODO.isDeleted === true)
            case "normal":
                return Object.values(TODOS).filter( TODO  => TODO.isDeleted === false)
        }

    }

    const TODOUpdateFunc = (isChoosen,isDeleted,id) => {
        TODOS[id].isChoosen = isChoosen
        TODOS[id].isDeleted = isDeleted
        handleFilterTODOS()

    }

    return (

        <>

            <ul className="flex-container">
            {
            handleFilterTODOS().map((TODO, index) => (
                <Card
                key={Object.keys(TODOS)[index]}
                id={Object.keys(TODOS)[index]}
                title={TODO.kind}
                isCheckedProp={TODO.isChoosen}
                isDeletedProp = {TODO.isDeleted}
                TODOUpdateFunc={(isChoosen,isDeleted,id) => TODOUpdateFunc(isChoosen,isDeleted,id)}
                />
            ))
            }
            
            </ul>
        </>


    )
    
}