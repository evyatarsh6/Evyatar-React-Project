import { useCallback, useEffect, useState } from "react";
import { Card } from "../components/Cards/Card";
import { useFetchTODOS } from "../api/hooks/useFetchTODOS";
import { useQuery } from "react-query";

export const CardList = () => { 

    const [updatedTodos, setUpdateTodos] = useState([])
    const {fetchShownTodos} = useFetchTODOS()

    const showTODOS = async () => {
        const shownTODOS = await fetchShownTodos();
        return shownTODOS
      };

    const { data: TODOS, error, isLoading } = useQuery("shownTODOS", showTODOS);

    useEffect(() => {
        if (TODOS) {
          setUpdateTodos(TODOS);
        }
      }, [TODOS]);

    if (isLoading) {
        console.log('leading')
    }
    
    if (error) {
    console.error(`Error leading TODOs: ${error}`)
    }

    
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