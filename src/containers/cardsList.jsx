import { useCallback, useEffect, useState } from "react";
import { Card } from "../components/Cards/Card";
import { useFetchTODOS } from "../api/hooks/useFetchTODOS";
import { useQuery } from "react-query";
import {useSelector } from "react-redux";
import { GetFilterKind } from "../selectors";

export const CardList = () => { 

    const [updatedTodos, setUpdateTodos] = useState([])
    const filterKind = useSelector(GetFilterKind)
    const {fetchShownTodos} = useFetchTODOS()
    const { data: TODOS, error, isLoading } = useQuery("shownTODOS", showTODOS);
    

    const showTODOS = async () => {
        const shownTODOS = await fetchShownTodos();
        return shownTODOS
      };

      
      useEffect(() => {
        if (isLoading) {
            console.log('leading')
        }
        
        if (error) {
            console.error(`Error leading TODOs: ${error}`)
        }

        if (TODOS) {
            setUpdateTodos(TODOS);
        }
    }, [TODOS, error, isLoading]);
    
    
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