import { useCallback, useEffect, useState } from "react";
import { Card } from "../components/Cards/Card";
import { useFetchTODOS } from "../api/hooks/useFetchTODOS";
import { useDispatch, useSelector } from "react-redux";
import { GetTodoListNeedsUpdate } from "../selectors";
import { updateTODOListStatus } from "../actions/actions";

export const CardList = () => { 

    const [updatedTodos, setUpdateTodos] = useState([])
    const needsUpdate = useSelector(GetTodoListNeedsUpdate)
    const {fetchShownTodos} = useFetchTODOS()
    const dispatch = useDispatch()
    
const updateShownListFunc= useCallback( async () => {
    if (needsUpdate) {
        try {
            const updateList = await fetchShownTodos();
            setUpdateTodos(updateList ?? []);
            dispatch(updateTODOListStatus(false));
          } catch (error) {
            console.error(`Error updating TODOs: ${error.message}`);
          }
    }
    
    },
    [fetchShownTodos, needsUpdate, dispatch])
    
    useEffect(() => {
        const a = async () => {
            await updateShownListFunc()
            dispatch(updateTODOListStatus(false))
        }
        a()
    }, [updateShownListFunc, dispatch]);

    return (
        <ul className="flex-container">
          {updatedTodos.length &&
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