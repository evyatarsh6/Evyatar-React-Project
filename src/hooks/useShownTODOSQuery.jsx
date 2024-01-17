import { useQuery } from "react-query";
import { useFetchTODOS } from "./useFetchTODOS";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { GetFilterKind } from "../selectors";

export const useShownTODOSQuery = () => {

    const filterKind = useSelector(GetFilterKind);
    const {fetchShownTodos} = useFetchTODOS()
      
    const { data: TODOS, error, isLoading, isSuccess, refetch} =
    useQuery({
        queryKey: ['show TODOS of filter', filterKind],
        queryFn: async () => await fetchShownTodos(filterKind),
        manual: true,
   
      })
      
    const getShownTODDOSData = useCallback( async () => {

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
        getShownTODDOSData:getShownTODDOSData,
        refetch: refetch
    }
}