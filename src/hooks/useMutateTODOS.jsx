import { useMutation } from "react-query";
import { useUpdateDB } from "./useUpdateDB";
// import { useShownTODOSQuery } from "./useShownTODOSQuery";

const onErrorMessage =  () => console.error(`Error updating TODOS`)

const onSuccessMessage = () => console.log('done updating')

export const useMutateTemplate = (wantedFunc, onError, onSuccess) => {

    return useMutation({
        mutationFn : wantedFunc,
        onError: onError,
        onSuccess: onSuccess
    })
};

export const useMutateFieldSingle = () => {

    const {patchFieldWantedTODO} = useUpdateDB()

    const wantedFunc = async ({wantedID, wantedField, wantedFieldUpdateVal}) => await patchFieldWantedTODO(wantedID, wantedField, wantedFieldUpdateVal);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        onSuccessMessage()
        
    } 
    
    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 


export const useMutateFieldAllDocu = () => {

    const {patchFieldAllTODOS} = useUpdateDB()

    const wantedFunc = async ({wantedField, wantedFieldUpdateVal}) => await patchFieldAllTODOS(wantedField, wantedFieldUpdateVal);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 

export const useAddSingleTODO = () => {

    const {postTODO} = useUpdateDB()

    const wantedFunc = async ({TODOKind, wantedID}) =>  await postTODO(wantedID, TODOKind);  
    
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 



