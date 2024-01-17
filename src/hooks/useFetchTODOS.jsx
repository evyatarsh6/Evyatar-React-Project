import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetFilterKind } from "../selectors";
import { genID } from "../utils/generalUtils";
import { useCallback } from "react";
import { updateTODOListStatus } from "../actions/actions";

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

  const updateTODOList = (status = true) => dispatch(updateTODOListStatus(status))



  return {
    fetchShownTodos: fetchShownTodos,
    fetchHoverTodoInfo:fetchHoverTodoInfo,
    updateTODOList: updateTODOList,
  };
};
