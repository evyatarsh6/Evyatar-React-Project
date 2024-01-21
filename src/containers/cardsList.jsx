import { useCallback, useEffect, useState } from "react";
import { Card } from "../components/Cards/Card";
import { useShownTODOSQuery } from "../hooks/useShownTODOSQuery";
import { GetFilterKind } from "../selectors";
import { useSelector } from "react-redux";

export const CardList = () => {

    const filterKind = useSelector(GetFilterKind)
    
    const [updatedTodos, setUpdateTodos] = useState([])
    const {getShownTODDOSData} = useShownTODOSQuery()

    const UpdateShownTODOSState = useCallback( async() => {
        const todos = await getShownTODDOSData();
        setUpdateTodos(todos);

    },[getShownTODDOSData]) 



    useEffect(() =>{

        const wrapperFunc = async () => {
            await UpdateShownTODOSState()
        }
        
        wrapperFunc()

    }, [UpdateShownTODOSState, filterKind]);
    
    
    return (
        <ul className="flex-container">
            {
                updatedTodos.length
                && 
                (
                    updatedTodos.map((TODO) => (
                    <Card
                    info={TODO}
                    key={TODO._id}
                    />
                    ))
                )
            }
        </ul>
      );
      
    
}