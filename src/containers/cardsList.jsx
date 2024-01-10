import { useEffect, useRef } from "react";
import { Card } from "../components/Cards/Card";
import { useFetchTODOS } from "../api/hooks/useFetchTODOS";

export const CardList = () => { 

    const updateList = useRef([])
    
    const shownListFunc = useFetchTODOS().shownTODOS
    
    useEffect(() => {
      shownListFunc()
    }, [shownListFunc]);
      

    return (

            <ul className="flex-container">
            {
                updateList.current.map( TODO => (  
                    <Card
                    info = {TODO}
                    key={TODO._id}
                    />
                    ))
                }
            
            </ul>


    )
    
}