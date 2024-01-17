import { useCallback, useEffect, useState } from "react";
import { Card } from "../components/Cards/Card";
import { useUpdateList } from "../hooks/useUpdateList";
import { GetFilterKind } from "../selectors";
import { useSelector } from "react-redux";

export const CardList = () => {

    const filterKind = useSelector(GetFilterKind)
    
    const [updatedTodos, setUpdateTodos] = useState([])
    const {test} = useUpdateList()

    const fetchData = useCallback( async() => {
        const todos = await test();
        setUpdateTodos(todos);

    },[test]) 


    useEffect(() =>{
        console.log("useEffect triggered with filterKind:", filterKind);
        const check = async () => {
            await fetchData()
        }
        
        check()
    }, [fetchData, filterKind]);
    
    
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