import { useCallback } from "react";
import { useQueryTemplate } from "./useQueryTemplate";
import { useFetchData } from "./useFetchData";
import { useDispatch } from "react-redux";
import { TODOListActions,MapActions } from "../actions/actions";


export const useDeltas = () => {

  const dispatch = useDispatch()

  const {fetchCurrDeltas} = useFetchData()
  const queryKey =  ['updateDeltas']
  const queryFn = async () => await fetchCurrDeltas()

  const { data: changeLogValues, error, isLoading, isSuccess, refetch} =

  useQueryTemplate( queryKey, queryFn, {
    refetchInterval : 10000,
    refetchIntervalInBackground:true
  })

  
  const deltasLogic = useCallback ((info) => {

    if (info.changeType === 'PATCH') {
      dispatch(TODOListActions.editTODO({
        _id: info.TODOID,
        fieldKey: info.changedField,
        fieldUpdateValue: info.values.newValue
      }))

      if (info.changedField ==='location') {
        dispatch(MapActions.updatePoint(info.TODOID,info.values.newValue))
      }
    }
    else if (info.changeType === 'POST') {
     dispatch(TODOListActions.addTODO(info))
    }
  },[dispatch])
  
  const getDeltas = useCallback( () => {
    
    if (isLoading) {
        console.log('leading deltas')
    }

    if (error) {
        console.error(`Error leading deltas: ${error}`)
        return error;
    }

    if (isSuccess){
      const wantedArr = changeLogValues || []
      wantedArr.forEach(singleChange => {
        deltasLogic(singleChange)
      });

      return wantedArr
    }

  },[error, isLoading,  isSuccess, deltasLogic, changeLogValues])


  return {
    getDeltas:getDeltas,
    refetch:refetch,
    deltasLogic:deltasLogic,
  };
};
