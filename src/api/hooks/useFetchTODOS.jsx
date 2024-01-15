import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetFilterKind} from "../../selectors";
import { genID } from "../../utils/generalUtils";
import { useCallback } from "react";
import { updateTODOListStatus } from "../../actions/actions";

export const useFetchTODOS = () => {

  const filterKind = useSelector(GetFilterKind);
  const dispatch = useDispatch()

  const fetchShownTodos = useCallback( async () => {
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


  const fetchHoverTodoInfo = useCallback(async (hoverID) => {
    try {
      const response = await axios.get(`http://localhost:3000/getTODOByHoverID/` + hoverID, {
        headers: {},
      });

      return response.data;
      
    } catch (error) {
      console.error(`Error fetching TODOs: ${error.message}`);
      throw error;
    }
  }, []);

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
          // console.log(response.data)
      
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

      // console.log(response.data)

    }
    catch (error){
      console.error(`Error fetching TODOs: ${error.message}`);
      throw error;
    }
  },[])

  const fetchUpdateAllTODOS = useCallback(async (field, fieldUpdateVal) => {
    try{
      const response = await axios.patch(
        'http://localhost:3000/updateAllTODOS' 
        ,
      {
        wantedField: field,
        wantedFieldUpdateVal: fieldUpdateVal,
      }
      )

      // console.log(response.data)

    }
    catch (error){
      console.error(`Error fetching TODOs: ${error.message}`);
      throw error;
    }
  },[])


  const updateTODOList = (status = true) => dispatch(updateTODOListStatus(status))



  return {
    fetchShownTodos: fetchShownTodos,
    fetchHoverTodoInfo:fetchHoverTodoInfo,
    fetchAddTODO:fetchAddTODO,
    fetchUpdateWantedTODO: fetchUpdateWantedTODO,
    fetchUpdateAllTODOS: fetchUpdateAllTODOS,
    updateTODOList: updateTODOList,
  };
};
