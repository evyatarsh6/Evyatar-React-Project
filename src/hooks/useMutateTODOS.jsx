import { useMutation } from "react-query";
import { useUpdateDB } from "./useUpdateDB";

const onErrorMessage =  () => console.error(`Error updating`)

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

export const useDeleteAllWantedCollection = () => {

    const {deleteAllWantedDocuments} = useUpdateDB()

    const wantedFunc = async (wantedCollection) =>  await deleteAllWantedDocuments(wantedCollection);  
    
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 


export const usePostCurrTime = () => {

    const {postCurrTime} = useUpdateDB()

    const wantedFunc = async () =>  await postCurrTime();  
    
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 






