import axios from "axios";
import { useSelector } from "react-redux";
import { GetFilterKind} from "../../selectors";
import { useCallback } from "react";


export const useFetchTODOS = () => {

  const filterKind = useSelector(GetFilterKind)

  const fetchShownTodos = useCallback(async () => {
     await axios.get(`http://localhost:3000/shownTODOS/` + filterKind,
   {
     headers: {}
   }
   )
   .then((response) => {
     return response.data
   })
   .catch((error) => {
     alert(`shownTODOS has a problam with error message of : ${error.message}`);
    }); 
  }
  ,[filterKind ])

 return (
  {
    fetchShownTodos: fetchShownTodos 
  }
 )
}
