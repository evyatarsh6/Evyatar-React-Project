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
            alert('leading')
            // return [];
        }

        if (status ==='error') {
            console.error(`Error leading TODOs: ${error}`)
            return error;
        }
        if (status === "success"){

            console.log(TODOS)
            return TODOS;
        }
        return [];

    },[TODOS,status, error])

    return {
        aviTest:aviTest,
    }
}