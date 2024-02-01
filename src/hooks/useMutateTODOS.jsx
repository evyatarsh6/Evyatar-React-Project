
import { useMutateTemplate } from "./useMutateTemplate";
import { useUpdateDBActions } from "./useUpdateDBActions";

const onErrorMessage =  () => console.error(`Error updating`)

const onSuccessMessage = () => console.log('done updating')


export const useMutateFieldSingle = () => {

    const {patchFieldWantedTODO} = useUpdateDBActions()

    const wantedFunc = async ({wantedID, wantedField, wantedFieldUpdateVal}) => await patchFieldWantedTODO(wantedID, wantedField, wantedFieldUpdateVal);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        onSuccessMessage()
        
    } 
    
    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 


export const useMutateFieldAllDocu = () => {

    const {patchFieldAllTODOS} = useUpdateDBActions()

    const wantedFunc = async ({wantedField, wantedFieldUpdateVal}) => await patchFieldAllTODOS(wantedField, wantedFieldUpdateVal);  
        
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 

export const useAddSingleTODO = () => {

    const {postTODO} = useUpdateDBActions()

    const wantedFunc = async (TODO) =>  await postTODO(TODO);  
    
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
} 

//just so i could delete TODOS data through my work
export const useDeleteAllWantedCollection = () => {

    const {deleteAllWantedDocuments} = useUpdateDBActions()

    const wantedFunc = async (wantedCollection) =>  await deleteAllWantedDocuments(wantedCollection);  
    
    const onErrorFunc =  () => onErrorMessage()
    
    const onSuccessFunc = () => {
        onSuccessMessage()
    } 

    return useMutateTemplate(wantedFunc,onErrorFunc,onSuccessFunc) 
}


