import { useCallback } from "react";
import { useQueryTemplate } from "./useQueryTemplate";
import { useFetchData } from "./useFetchData";
import { useDispatch } from "react-redux";
import { addTODO, editTODO, updatePoint } from "../actions/actions";

export const useDeltas = () => {
    
  const dispatch = useDispatch()

  const {fetchCurrDeltas} = useFetchData()
  const queryKey =  ['updateDeltas']
  const queryFn = async () => await fetchCurrDeltas()

  const { data: changeLogValues, error, isLoading, isSuccess, refetch} =
  useQueryTemplate(queryKey, queryFn )

  const deltasLogic = useCallback ((changeLogInfo) => {

    if (changeLogInfo.changeType === 'PATCH') {
      dispatch(editTODO({
        _id: changeLogInfo.TODOID,
        fieldKey: changeLogInfo.changedField,
        fieldUpdateValue: changeLogInfo.values.newValue
      }))

      if (changeLogInfo.changedField ==='location') {
        dispatch(updatePoint(changeLogInfo.TODOID,changeLogInfo.values.newValue))
      }
    }
    else if (changeLogInfo.changeType === 'POST') {
      
      dispatch(addTODO({

        value: changeLogInfo.TODOKind,
        _id: changeLogInfo.TODOID
      }))
    }
  },[dispatch])
  
  const getDeltas = useCallback( async () => {

    if (isLoading) {
        console.log('leading deltas')
    }

    if (error) {
        console.error(`Error leading deltas: ${error}`)
        return error;
    }

    if (isSuccess){
      changeLogValues.forEach(singleChange => {
        deltasLogic(singleChange)
      });

      return changeLogValues
    }

  },[error, changeLogValues, isLoading,  isSuccess, deltasLogic])


  return {
    getDeltas:getDeltas,
    refetch:refetch
  };
};
