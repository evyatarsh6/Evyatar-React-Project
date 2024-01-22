import axios from "axios";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

export const useFetchTODOS = () => {

  const fetchShownTodos = useCallback( async (filterKind) => {
    try {
      const response = await axios.get(`http://localhost:3000/getShownTODOS/` + filterKind, {
        headers: {},
      });

      return response.data;
      
    } catch (error) {
      console.error(`Error fetching shown TODOs: ${error.message}`);
      throw error;
    }
  }, []);

  
    const fetchAllTodos = useCallback( async () => {
      try {
        const response = await axios.get(`http://localhost:3000/getAllTODOS`, {
          headers: {},
        });
  
        return response.data;
        
      } catch (error) {
        console.error(`Error fetching all TODOs: ${error.message}`);
        throw error;
      }
    }, []);
  


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



  return {
    fetchShownTodos: fetchShownTodos,
    fetchHoverTodoInfo:fetchHoverTodoInfo,
    fetchAllTodos:fetchAllTodos
  };
};
