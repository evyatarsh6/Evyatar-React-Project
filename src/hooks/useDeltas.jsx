import axios from "axios";
import { useCallback } from "react";
import { useQueryTemplate } from "./useQueryTemplate";
import { useFetchData } from "./useFetchData";

export const useDeltas = () => {
    
  const {fetchCurrDeltas} = useFetchData()
  const queryKey =  ['updateDeltas']
  const queryFn = async () => await fetchCurrDeltas()

  const { data: info, error, isLoading, isSuccess, refetch} =
  useQueryTemplate(queryKey, queryFn )

  
  const getDeltas = useCallback( async () => {

    if (isLoading) {
        console.log('leading deltas')
    }

    if (error) {
        console.error(`Error leading deltas: ${error}`)
        return error;
    }

    if (isSuccess){
      return info
    }

  },[error, info, isLoading,  isSuccess])


  return {
    getDeltas:getDeltas,
    refetch:refetch
  };
};
