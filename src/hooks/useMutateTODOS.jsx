import { useMutation } from "react-query";
import { useUpdateDB } from "./useUpdateDB";
import { useShownTODOSQuery } from "./useShownTODOSQuery";

const onErrorMessage =  () => console.error(`Error updating TODOS`)

const onSuccessMessage = () => console.log('done updating')

export const useMutateTemplate = (wantedFunc, onError, onSuccess) => {

    return useMutation({
        mutationFn : wantedFunc,
        onError: onError,
        onSuccess: onSuccess
    })
};

export const useMutateFieldSingle = (id, wantedField, wantedFieldUpdateVal) => {

    const {refetch} = useShownTODOSQuery() 
    const {updateFieldWantedTODO} = useUpdateDB()

    const wantedFunc = async () => await updateFieldWantedTODO(id, wantedField, wantedFieldUpdateVal);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        refetch()
        onSuccessMessage()
        
    } 
    
    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 


export const useMutateFieldAllDocu = (wantedField, wantedFieldUpdateVal) => {

    const {refetch} = useShownTODOSQuery() 
    const {updateFieldAllTODOS} = useUpdateDB()

    const wantedFunc = async () => await updateFieldAllTODOS(wantedField, wantedFieldUpdateVal);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        refetch()
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 

export const useAddSingle = (TODOKind) => {

    const {refetch} = useShownTODOSQuery() 
    const {addNewTODO} = useUpdateDB()

    const wantedFunc = async () => await addNewTODO(TODOKind);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        refetch()
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 



