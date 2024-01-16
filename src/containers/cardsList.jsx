import { useEffect, useState } from "react";
import { Card } from "../components/Cards/Card";
import { useAvi } from "../hooks/useAvi";

export const CardList = () => { 

    const [updatedTodos, setUpdateTodos] = useState([])
    const {aviTest} = useAvi()
    
    useEffect(() => {
        setUpdateTodos(aviTest())
        }, [aviTest]);
    
    
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