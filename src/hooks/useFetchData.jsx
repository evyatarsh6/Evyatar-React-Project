import axios from "axios";
import { useCallback } from "react";

export const useFetchData = () => {

    const fetchCurrDeltas = useCallback( async() => {
    const currTime =  new Date()
    try {
      const response = await axios.get(`http://localhost:3000/getCurrDeltas/` + currTime)
      return response.data
      
    } catch (error) {
      alert(`avi's server had a problam with error message of : ${error.message}`);
    }
  },[])

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
    fetchAllTodos:fetchAllTodos,
    fetchCurrDeltas:fetchCurrDeltas
  };
};
