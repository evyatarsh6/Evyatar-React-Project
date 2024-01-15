import { useCallback, useEffect, useState } from "react";
import { Card } from "../components/Cards/Card";
import { useFetchTODOS } from "../api/hooks/useFetchTODOS";
import { useSelector } from "react-redux";
import { GetTodoListNeedsUpdate } from "../selectors";

export const CardList = () => { 

    const [updatedTodos, setUpdateTodos] = useState([])
    const needsUpdate = useSelector(GetTodoListNeedsUpdate)
    const {fetchShownTodos, updateTODOList} = useFetchTODOS()
    
    const updateShownListFunc= useCallback( async () => {
        if (needsUpdate) {
            try {
                const updateList = await fetchShownTodos();
                setUpdateTodos(updateList ?? []);
                updateTODOList(false);
            } catch (error) {
                console.error(`Error updating TODOs: ${error.message}`);
            }
        }
    },
    [fetchShownTodos, needsUpdate, updateTODOList, setUpdateTodos])
    
    useEffect(() => {
        const fetchData = async () => {
          await updateShownListFunc();
          updateTODOList(false);
        };
      
        fetchData();
      }, [updateShownListFunc, updateTODOList]);
      

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