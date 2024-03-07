import { useFetchData } from './useFetchData'
import { useCallback } from 'react'
import { useQueryTemplate } from './useQueryTemplate'
import { useDispatch } from 'react-redux'
import { TODOListActions, MapActions } from '../actions/actions'

export const useGetAllTODOSQuery = () => {
    const { fetchAllTodos } = useFetchData()
    const dispatch = useDispatch()
    const { addTODO } = TODOListActions

    const queryKey = ['show All TODOS']
    const queryFn = async () => await fetchAllTodos()

    const { data: TODOS, error, isLoading, isSuccess, refetch } =
        useQueryTemplate(queryKey, queryFn)

    const { updatePoint } = MapActions

    const getAllTODDOSData = useCallback(async () => {
        if (isLoading) {
            console.log('leading')
        }

        if (error) {
            console.error(`Error leading TODOs: ${error}`)
            return error
        }

        if (isSuccess) {
            TODOS.forEach(TODO => {
                dispatch(addTODO(TODO))
                dispatch(updatePoint(TODO._id, TODO.location))
            })
        }
    }, [dispatch, TODOS, isLoading, error, isSuccess])

    return {
        getAllTODDOSData,
        refetch
    }
}
