import { useQuery } from "react-query";

export const useQueryTemplate = ( quaryKey, qauryFunc) => {
      
    const { data: dataTarget, error, isLoading, isSuccess, refetch} =
    useQuery({
        queryKey: quaryKey,
        queryFn: qauryFunc
    })

    return { data: dataTarget, error, isLoading, isSuccess, refetch}

    }