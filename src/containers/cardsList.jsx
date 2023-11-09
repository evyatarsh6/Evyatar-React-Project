import { Card } from "../components/Card"
import { useEffect, useReducer, useState } from "react"
import { TODOReducer, filterTODOSByReg } from "../reducers/handleTODOSReducer"



//  const TODOStruct = {${action.ID}: ${action.isChoosen} : ${action.isDeleted}}
//  const TODOExample = {
    //{'12': 'false' : 'false'} : 
    // //{
    //     kind: action.newTODO.TODOKind,
    //     isChoosen: false,
    //     isDeleted: false  
    // }

// export const TODOS = 
//     {
//         const TODOExample = {
//             {'12': 'false' : 'false'} : 
//             {
//                 // kind: action.newTODO.TODOKind,
//                 kind = "calling his mother" 
//                 isChoosen: false,
//                 isDeleted: false  
//             }
//         }
//     }


export const CardList = ({appStatus}) => { 

    const TODOS = appStatus["TODOList"]
    const setTODODS = appStatus["TODOListUpdate"]
    const filterKind = appStatus["filterKind"]
    const actionDetails = appStatus["actionDetails"]

    //{TODOS,setTODODS, actionDetails}
    const handleAddTODO = () => {
        setTODODS({
            ...TODOS,
        //    ({actionDetails.details})
        })
    }

    // const handleDeleteTODO = () => {
    //     setTODODS({
    //         ...TODOS,
    //     //    ({actionDetails.details})
    //     })


    const handleFilterTODOS = () => {

        const filterTODOSObj = Object.keys(TODOS).filter( TODO  => {
        
            if (filterKind === "choose" ) {
                const choosenRegExpre = / * : true : */
                filterTODOSByReg(TODO, choosenRegExpre ) 
            }
            else if (filterKind === "delete") {
                const deleteRegExpre = / * : * : true/
                filterTODOSByReg(TODO, deleteRegExpre)
            }
        })
        return filterTODOSObj
    }

    return (

        <>

            {/* <ul>
                {
                TODOSList.map((TODOSList, index) => (
                    <Card key={index} title= {TODOSList.kind} isCheckedProp = {false}>
                    </Card> 
                ))
                }
            </ul> */}

        <Card title="calling his mother" isCheckedProp = {false}>
        </Card>
        </>
    )
    
}