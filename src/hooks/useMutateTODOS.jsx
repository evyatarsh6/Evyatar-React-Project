import axios from "axios";
import { genID } from "../utils/generalUtils";
import { useCallback } from "react";

export const useMutateTODOS = () => {

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


  const mutateWantedTODO = useCallback(async (wantedTODOID, field, fieldUpdateVal) => {
    try{
       await axios.patch(
        'http://localhost:3000/updateWantedTODO' 
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

  const mutateAllTODOS = useCallback(async (field, fieldUpdateVal) => {
    try{
       await axios.patch(
        'http://localhost:3000/updateAllTODOS' 
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


//   const updateTODOList = (status = true) => dispatch(updateTODOListStatus(status))



  return {
    addNewTODO:addNewTODO,
    mutateWantedTODO: mutateWantedTODO,
    mutateAllTODOS: mutateAllTODOS,
    // updateTODOList: updateTODOList,
  };
};
