import { Card } from "../components/Card"
import { useReducer } from "react"
import { TODOReducer } from "../reducers/handleTODOSReducer"


export let TODOS = {}

export const CardList = ({ status = false}) => {
    
    const [TODOS, dispatch] = useReducer(TODOReducer, {})

    
    return (
        <Card>

        </Card>
    )

}