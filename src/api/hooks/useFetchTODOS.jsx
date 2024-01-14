import axios from "axios";
import { useSelector } from "react-redux";
import { GetFilterKind} from "../../selectors";
import { useCallback } from "react";


export const useFetchTODOS = () => {

  const filterKind = useSelector(GetFilterKind)

  const shownTODOS = useCallback(() => {
     let data = []
     axios.get(`http://localhost:3000/shownTODOS/` + filterKind,
   {
     headers: {}
   }
   )
   .then((response) => {
     console.log(response.data)
     data = response.data
   })
   .catch((error) => {
     alert(`shownTODOS has a problam with error message of : ${error.message}`);
    });
    return data 
  }
  ,[filterKind ])

 return (
  {
    shownTODOS: shownTODOS
  }
 )
}
