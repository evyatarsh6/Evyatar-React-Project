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

    // const {refetch} = useShownTODOSQuery() 
    const {patchFieldWantedTODO} = useUpdateDB()

    const wantedFunc = async (_id, wantedField, wantedFieldUpdateVal) => await patchFieldWantedTODO(_id, wantedField, wantedFieldUpdateVal);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        // refetch()
        onSuccessMessage()
        
    } 
    
    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 


export const useMutateFieldAllDocu = () => {

    // const {refetch} = useShownTODOSQuery() 
    const {patchFieldAllTODOS} = useUpdateDB()

    const wantedFunc = async (wantedField, wantedFieldUpdateVal) => await patchFieldAllTODOS(wantedField, wantedFieldUpdateVal);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        // refetch()
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 

export const useAddSingleTODO = () => {

    // const {refetch} = useShownTODOSQuery() 
    const {postTODO} = useUpdateDB()

    const wantedFunc = async (TODOKind,wantedID) => {
        
        return await postTODO(TODOKind, wantedID);  
    } 
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        // refetch()
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 



