import { useFetchTODOS } from "./useFetchTODOS";
import { useCallback } from "react";
import { useQueryTemplate } from "./useQueryTemplate";
import { useDispatch } from "react-redux";
import { addTODOFromDB } from "../actions/actions";

export const useAllTODOSQuery = () => {

    const {fetchAllTodos} = useFetchTODOS()
    const dispatch = useDispatch()

    const queryKey =  ['show All TODOS']
    const queryFn = async () => await fetchAllTodos()

    const { data: TODOS, error, isLoading, isSuccess, refetch} =
    useQueryTemplate(queryKey, queryFn )

    const getAllTODDOSData = useCallback( async () => {

        if (isLoading) {
            console.log('leading')
        }

        if (error) {
            console.error(`Error leading TODOs: ${error}`)
            return error;
        }

        if (isSuccess){
            TODOS.forEach(TODO => {
                dispatch(addTODOFromDB(TODO))
            });
            // return TODOS;
        }

        return []
    

    },[dispatch, TODOS, isLoading, error, isSuccess])

    return {
        getAllTODDOSData:getAllTODDOSData,
        refetch: refetch
    }
}