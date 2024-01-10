import { useCallback, useEffect, useRef } from "react";
import { Card } from "../components/Cards/Card";
import { useFetchTODOS } from "../api/hooks/useFetchTODOS";
import { useDispatch } from "react-redux";
import { updateTODOListStatus } from "../actions/actions";

export const CardList = () => { 

    const updateList = useRef([])
    const dispatch = useDispatch()

    const shownListFunc = useFetchTODOS().shownTODOS
    
const updateShownListFunc= useCallback(() => {
        shownListFunc()
        dispatch(updateTODOListStatus(false))
    },[dispatch,shownListFunc])

    
    useEffect(() => {
      updateShownListFunc()
    }, [updateShownListFunc]);
      

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