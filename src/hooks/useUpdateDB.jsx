import axios from "axios";
import { genID } from "../utils/generalUtils";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { GetTODOList } from "../selectors";

export const useUpdateDB = () => {

  const TODOList = useSelector(GetTODOList)

  const postTODO = async (TODOKind, wantedID) => {
    try {
       await axios.post(`http://localhost:3000/postTODO`,
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
          
      
    } catch (error) {
      alert(`avi's server had a problam with error message of : ${error.message}`);
    }
  }
  
  
  const patchFieldWantedTODO = useCallback(async (wantedTODOID, field, fieldUpdateVal) => {
    try{
       await axios.patch(
         'http://localhost:3000/patchFieldWantedTODO' 
        ,
      {
        _id: wantedTODOID,
        wantedField: field,
        wantedFieldUpdateVal: fieldUpdateVal,
      }
      )

      

    }
    catch (error){
      console.error(`Error fetching TODOs: ${error.message}`);
      throw error;
    }
  },[])
  
  const patchFieldAllTODOS = useCallback(async (field, fieldUpdateVal) => {
    try{
      await axios.patch(
        'http://localhost:3000/patchFieldAllTODOS' 
        ,
        {
          wantedField: field,
          wantedFieldUpdateVal: fieldUpdateVal,
        }
        )
        
      }
      catch (error){
        console.error(`Error fetching TODOs: ${error.message}`);
        throw error;
      }
    },[])
    
  const putWantedTODO = useCallback(async (wantedTODOID) => {
    try{
      await axios.put(
        'http://localhost:3000/putWantedTODO' 
        , TODOList[wantedTODOID]
      )
    }
    catch (error){
      console.error(`Error fetching TODOs: ${error.message}`);
      throw error;
    }
  },[TODOList])

  return {
    postTODO:postTODO,
    patchFieldWantedTODO: patchFieldWantedTODO,
    patchFieldAllTODOS: patchFieldAllTODOS,
    putWantedTODO :putWantedTODO 

  };
};
