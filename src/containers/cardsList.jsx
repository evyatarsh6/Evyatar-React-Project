import { Card } from "../components/Card"
import { useEffect, useReducer, useState } from "react"
import { TODOReducer } from "../reducers/handleTODOSReducer"



//  const TODOStruct = {${action.ID}: ${action.isChoosen} : ${action.isDeleted}}
//  const TODOExample = {
    //{'12': 'false' : 'false'} : 
    // //{
    //     kind: action.newTODO.TODOKind,
    //     isChoosen: false,
    //     isDeleted: false  
    // }

export const TODOS = {}

export const CardList = ({actionTook}) => {

    const [initTODOS,setInitTODOS] = useState(TODOS)

    const [TODOSStsteObj, dispatch] = useReducer(TODOReducer, initTODOS)
    
    useEffect(() => {

        dispatch(TODOSStsteObj,{actionTook})
        console.log(TODOSStsteObj)
    })

    return (

        <>
        <Card title="calling his mother" isCheckedProp = {false}>
        </Card>
        </>
    )

}