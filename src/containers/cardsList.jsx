import { useCallback, useEffect, useState } from "react";
import { Card } from "../components/Cards/Card";
import { useUpdateList } from "../hooks/useUpdateList";

export const CardList = () => { 

    const [updatedTodos, setUpdateTodos] = useState([])
    const {test} = useUpdateList()

    const fetchData = useCallback( async() => {
        const todos = await test();
        setUpdateTodos(todos);

    },[test]) 


    useEffect(() =>{
        fetchData()
        const check = async () => {
            await fetchData()
        }
        
        check()
    }, [fetchData]);
    
    
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