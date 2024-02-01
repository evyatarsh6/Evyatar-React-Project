// import { useFetchData } from "./useFetchData";
// import { useCallback } from "react";
// import { useSelector } from "react-redux";
// import { GetFilterKind } from "../selectors";
// import { useQueryTemplate } from "./useQueryTemplate";

// export const useShownTODOSQuery = () => {

//     const filterKind = useSelector(GetFilterKind);
//     const {fetchShownTodos} = useFetchData()

//     const queryKey =  ['show TODOS of filter', filterKind]
//     const queryFn = async () => await fetchShownTodos(filterKind)

//     const { data: TODOS, error, isLoading, isSuccess, refetch} =
//     useQueryTemplate(queryKey, queryFn )

//     const getShownTODDOSData = useCallback( async () => {

//         if (isLoading) {
//             console.log('leading')
//         }

//         if (error) {
//             console.error(`Error leading TODOs: ${error}`)
//             return error;
//         }

//         if (isSuccess){
//             return TODOS;
//         }

//         return []
    

//     },[TODOS, isLoading, error, isSuccess])

//     return {
//         getShownTODDOSData:getShownTODDOSData,
//         refetch: refetch
//     }
// }