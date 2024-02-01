import { useQuery } from "react-query";

export const useQueryTemplate = ( quaryKey, qauryFunc, ...attr) => {
      
    const { data: dataTarget, error, isLoading, isSuccess, refetch} =
    useQuery({
        queryKey: quaryKey,
        queryFn: qauryFunc,
        ...attr
    })

    return { data: dataTarget, error, isLoading, isSuccess, refetch}
    }