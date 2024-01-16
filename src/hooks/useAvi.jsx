import { useQuery } from "react-query";
import { useFetchTODOS } from "./useFetchTODOS";
import { useCallback } from "react";

//   const { data: TODOS, error, isLoading } = useQuery("shownTODOS",  async () => await showTODOS);

export const useAvi = () => {

    const {fetchShownTodos} = useFetchTODOS()

    const { data: TODOS, status, error } = useQuery("shownTODOS", fetchShownTodos);
      
    const aviTest = useCallback( async () => {
        if (status ==='loading') {
            console.log('leading')
        }

        if (status ==='error') {
            console.error(`Error leading TODOs: ${error}`)
            return error;
        }
        if (status === "success"){

            return TODOS;
        }
        else{
            return []
        }
    },[TODOS,status, error])

    return {
        aviTest:aviTest,
    }
}