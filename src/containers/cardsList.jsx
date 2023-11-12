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

    // const handleAddTODO = () => {
    //     setTODOList(
    //         {...TODOList}, actionDetails["details"]
    //     )
    // }

    // useEffect(() => {

    // })

    // const handleDeleteTODO = () => {
    //     setTODODS({
    //         ...TODOS,
    //     //    ({actionDetails.details})
    //     })


    const handleFilterTODOS = () => {

        if (filterKind!=="normal") {
            const filterTODOSObj = Object.keys(TODOList).filter( TODO  => {
                if (filterKind === "choose" ) {
                    const choosenRegExpre = / * : true : */
                    filterTODOSByReg(TODO, choosenRegExpre ) 
                }
                else if (filterKind === "delete") {
                    const deleteRegExpre = / * : * : true/
                    filterTODOSByReg(TODO, deleteRegExpre)
                }
                else if(filterKind ==="normal"){
                    return TODOList
                }
            })
            return filterTODOSObj   
        }
        return TODOList
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