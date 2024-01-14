import axios from "axios";
import { useSelector } from "react-redux";
import { GetFilterKind} from "../../selectors";
import { genID } from "../../utils/generalUtils";
import { useCallback } from "react";

export const useFetchTODOS = () => {
  const filterKind = useSelector(GetFilterKind);

  const fetchShownTodos = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/shownTODOS/` + filterKind, {
        headers: {},
      });

      return response.data;
      
    } catch (error) {
      console.error(`Error fetching TODOs: ${error.message}`);
      throw error;
    }
  }, [filterKind]);


  const fetchAddTODO = async(TODOKind) => {
    try {
      const response = await axios.post(`http://localhost:3000/addTODO`,
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
          console.log(response.data)
      
    } catch (error) {
      alert(`avi's server had a problam with error message of : ${error.message}`);
    }
  }


  const fetchUpdateWantedTODO = useCallback(async (wantedTODOID, field, fieldUpdateVal) => {
    try{
      const response = await axios.patch(
        'http://localhost:3000/updateWantedTODO' 
        ,
      {
        _id: wantedTODOID,
        wantedField: field,
        wantedFieldUpdateVal: fieldUpdateVal,
      }
      )

      console.log(response.data)

    }
    catch (error){
      console.error(`Error fetching TODOs: ${error.message}`);
      throw error;
    }
  },[])



  return {
    fetchShownTodos: fetchShownTodos,
    fetchAddTODO:fetchAddTODO,
    fetchUpdateWantedTODO: fetchUpdateWantedTODO
  };
};
