import { useEffect, useRef } from "react";
import { Card } from "../components/Cards/Card";
import { useSelector } from "react-redux"
import { GetFilterKind , GetTodoListStatus} from "../selectors";
import axios from "axios";



export const CardList = () => { 

    const filterKind = useSelector(GetFilterKind)
    const TODOListStatus = useSelector(GetTodoListStatus)
    const isAdded = TODOListStatus.addTODO
    const updateList = useRef([])

    useEffect(() => {
        axios.get(`http://localhost:3000/shownTODOS/` + filterKind,
          {
            headers: {}
          }
        )
        .then((response) => {
          console.log(response.data)
          updateList.current = response.data
        })
        .catch((error) => {
          alert(`shownTODOS has a problam with error message of : ${error.message}`);
        });
    }, [filterKind, isAdded]);
      

    return (

            <ul className="flex-container">
            {
                updateList.current.map( TODO => (
                // FilterdArr.map( TODO => (
                    
                    <Card
                    info = {TODO}
                    // id = {TODO._id}
                    key={TODO._id}
                    />
                    ))
                }
            
            </ul>


    )
    
}