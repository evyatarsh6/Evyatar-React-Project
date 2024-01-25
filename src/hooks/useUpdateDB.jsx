import axios from "axios";
import { genID } from "../utils/generalUtils";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { GetTODOList } from "../selectors";

export const useUpdateDB = () => {

  const TODOList = useSelector(GetTODOList)

  const postTODO = useCallback(async (wantedID, TODOKind) => {
    try {
       const response = await axios.post(`http://localhost:3000/postTODO`,
        {
            '_id': wantedID,
            description : "Avi Berger is a god", 
            kind: TODOKind,
            isChoosen: false,
            isDeleted:false, 
            location: {},
            isPinBtnDisable : false
        },
        {
          headers: {}
        }
      )

      if (response) {
        console.log(response)
      }
           
    } catch (error) {
      alert(`avi's server had a problam with error message of : ${error.message}`);
    }
  },[])
  
  const patchFieldWantedTODO = useCallback(async (wantedTODOID, field, fieldUpdateVal) => {
    try{
       const response = await axios.patch(
         'http://localhost:3000/patchFieldWantedTODO' 
        ,
      {
        _id: wantedTODOID,
        wantedField: field,
        wantedFieldUpdateVal: fieldUpdateVal,
      }
      )
      if (response) {
        console.log(response)
      }
    }
    catch (error){
      console.error(`Error fetching TODOs: ${error.message}`);
      throw error;
    }
  },[])
  
  const patchFieldAllTODOS = useCallback(async (field, fieldUpdateVal) => {
    try{
      const response = await axios.patch(
        'http://localhost:3000/patchFieldAllTODOS' 
        ,
        {
          wantedField: field,
          wantedFieldUpdateVal: fieldUpdateVal,
        }
        )

        if (response) {
          console.log(response)
        }
      }
      catch (error){
        console.error(`Error fetching TODOs: ${error.message}`);
        throw error;
      }
    },[])
    
  const putWantedTODO = useCallback(async (wantedTODOID) => {
    try{
      const response = await axios.put(
        'http://localhost:3000/putWantedTODO' 
        , TODOList[wantedTODOID]
      )

      if (response) {
        console.log(response)
      }
    }
    catch (error){
      console.error(`Error fetching TODOs: ${error.message}`);
      throw error;
    }
  },[TODOList])

  const deleteAllWantedDocuments = useCallback(async (wantedCollection) => {
    try{
      const response = await axios.delete(
        'http://localhost:3000/deleteAllDocuWantedCollection/' + wantedCollection
      )

      if (response) {
        console.log(response)
      }
    }
    catch (error){
      console.error(`Error fetching TODOs: ${error.message}`);
      throw error;
    }
  },[])

  return {
    postTODO:postTODO,
    patchFieldWantedTODO: patchFieldWantedTODO,
    patchFieldAllTODOS: patchFieldAllTODOS,
    putWantedTODO :putWantedTODO,
    deleteAllWantedDocuments:deleteAllWantedDocuments, 

  };
};
