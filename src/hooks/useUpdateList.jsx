import { useQuery } from "react-query";
import { useFetchTODOS } from "./useFetchTODOS";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { GetFilterKind } from "../selectors";

export const useUpdateList = () => {

    const filterKind = useSelector(GetFilterKind);
    const {fetchShownTodos} = useFetchTODOS()

    const { data: TODOS, error, isLoading, isSuccess } =
    useQuery("shownTODOS", async() => fetchShownTodos(filterKind)); 
      
    const test = useCallback( async () => {

        if (isLoading) {
            console.log('leading')
        }

        if (error) {
            console.error(`Error leading TODOs: ${error}`)
            return error;
        }

        if (isSuccess){
            console.log(TODOS)
            return TODOS;
        }
        return []

    },[TODOS, isLoading, error, isSuccess])

    return {
        test:test,
    }
}