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

  const results = changeLogValues

  const deltasLogic = useCallback (() => {

    if (results.changeType === 'PATCH') {
      dispatch(editTODO({
        _id: results.TODOID,
        fieldKey: results.changedField,
        fieldUpdateValue: results.values.newValue
      }))

      if (results.changedField ==='location') {
        dispatch(updatePoint(results.TODOID,results.values.newValue))
      }
    }
    else if (results.changeType === 'POST') {
      
      dispatch(addTODO({

        value: results.TODOKind,
        _id: results.TODOID
      }))
    }
  },[dispatch, results])
  
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
    refetch:refetch,
    deltasLogic:deltasLogic,
  };
};
