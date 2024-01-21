import axios from "axios";
import { genID } from "../utils/generalUtils";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { GetTODOList } from "../selectors";

export const useUpdateDB = () => {

  const TODOList = useSelector(GetTODOList)

  const addNewTODO = async(TODOKind) => {
    try {
       await axios.post(`http://localhost:3000/addTODO`,
        {
            _id: genID(),
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

  const replaceWantedTODO = useCallback(async (wantedTODOID) => {
  try{
    await axios.put(
     'http://localhost:3000/updateFieldWantedTODO' 
     , TODOList[wantedTODOID]
   )
 }
 catch (error){
   console.error(`Error fetching TODOs: ${error.message}`);
   throw error;
 }
},[TODOList])


  const updateFieldWantedTODO = useCallback(async (wantedTODOID, field, fieldUpdateVal) => {
    try{
       await axios.patch(
        'http://localhost:3000/updateFieldWantedTODO' 
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

  const updateFieldAllTODOS = useCallback(async (field, fieldUpdateVal) => {
    try{
       await axios.patch(
        'http://localhost:3000/updateFieldAllTODOS' 
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

  return {
    addNewTODO:addNewTODO,
    updateFieldWantedTODO: updateFieldWantedTODO,
    updateFieldAllTODOS: updateFieldAllTODOS,
    replaceWantedTODO :replaceWantedTODO 

  };
};
