import { useQuery } from "react-query";
import { useFetchTODOS } from "./useFetchTODOS";
import { useCallback } from "react";


export const useAvi = () => {

    const {fetchShownTodos} = useFetchTODOS()

    const showTODOS = async () => {
        const shownTODOS = await fetchShownTodos();
        return shownTODOS
      };

    const { data: TODOS, error, isLoading } = useQuery("shownTODOS", showTODOS);

    const aviTest = useCallback((setUpdateTodos) => {
        if (isLoading) {
            console.log('leading')
        }
        
        if (error) {
            console.error(`Error leading TODOs: ${error}`)
        }

        if (TODOS) {
            setUpdateTodos(TODOS);
        }
    },[TODOS,error,isLoading])

    return {
        aviTest:aviTest,
    }
}