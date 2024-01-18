// import { useQuery } from "react-query";
// import { useFetchTODOS } from "./useFetchTODOS";
// import { useCallback } from "react";
// import { useSelector } from "react-redux";
// import { GetFilterKind } from "../selectors";

// export const useShownTODOSQuery = () => {

//     const filterKind = useSelector(GetFilterKind);
//     const {fetchShownTodos} = useFetchTODOS()
      
//     const { data: TODOS, error, isLoading, isSuccess, refetch} =
//     useQuery({
//         queryKey: ['show TODOS of filter', filterKind],
//         queryFn: async () => await fetchShownTodos(filterKind),
//         // manual: true,
   
//       })
// }
      




import { useQuery } from "react-query";

export const useQueryTemplate = ( quaryKey, qauryFunc) => {
      
    const { data: dataTarget, error, isLoading, isSuccess, refetch} =
    useQuery({
        queryKey: quaryKey,
        queryFn: qauryFunc
    })

    return { data: dataTarget, error, isLoading, isSuccess, refetch}

    }