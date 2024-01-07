import { useEffect, useMemo, useRef } from "react";
import { Card } from "../components/Cards/Card";
import { useSelector } from "react-redux"
import { GetTodoList, GetFilterKind } from "../selectors";
import axios from "axios";



export const CardList = () => { 

    // const TODOList = useSelector(GetTodoList)
    const filterKind = useSelector(GetFilterKind)

    const updateList = useRef([])

    useEffect(() => {
        axios.get(`http://localhost:3000/shownTODOS/` + filterKind,
          {
            headers: {}
          }
        )
        .then((response) => {
            updateList.current = response.data 
            console.log(response.data)
        })
        .catch((error) => {
          alert(`avi's server had a problam with error message of : ${error.message}`);
        });
    }, [filterKind]);
      

    return (

            <ul className="flex-container">
            {
                updateList.current.map( TODO => (
                // FilterdArr.map( TODO => (
                    
                    <Card
                    id = {TODO.id}
                    key={TODO.id}
                    />
                    ))
                }
            
            </ul>


    )
    
}