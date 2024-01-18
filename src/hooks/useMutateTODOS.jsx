import { useMutation, useQueryClient } from "react-query";
import { useUpdateDB } from "./useUpdateDB";

const onErrorMessage =  () => console.error(`Error updating TODOS`)

const onSuccessMessage = () => console.log('done updating')

export const useMutateTemplate = (wantedFunc, onError, onSuccess) => {
    // const queryClient = useQueryClient()

    return useMutation({
        mutationFn : wantedFunc,
        onError: onError,
        onSuccess: onSuccess
    })
};

export const useMutateSingle = (id, wantedField, wantedFieldUpdateVal) => {

    const {updateWantedTODO} = useUpdateDB()

    const wantedFunc = async () => await updateWantedTODO(id, wantedField, wantedFieldUpdateVal);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => onSuccessMessage()
    
    return {
        mutateSingleInstance: useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) }
} 


export const useMutateAll = (wantedField, wantedFieldUpdateVal) => {

    const {updateAllTODOS} = useUpdateDB()

    const wantedFunc = async () => await updateAllTODOS(wantedField, wantedFieldUpdateVal);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => onSuccessMessage()

    return {
        mutateAllInstance: useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
    }
    
} 
