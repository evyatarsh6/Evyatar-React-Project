import axios from "axios";
import { useSelector } from "react-redux";
import { GetFilterKind} from "../../selectors";
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

  return {
    fetchShownTodos: fetchShownTodos,
  };
};
