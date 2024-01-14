import { useCallback, useEffect, useRef } from "react";
import { Card } from "../components/Cards/Card";
import { useFetchTODOS } from "../api/hooks/useFetchTODOS";
import { useDispatch, useSelector } from "react-redux";
import { updateTODOListStatus } from "../actions/actions";
import { GetTodoListNeedsUpdate } from "../selectors";

export const CardList = () => { 

    const updateList = useRef([])
    const dispatch = useDispatch()
    const needsUpdate = useSelector(GetTodoListNeedsUpdate)
    const {shownTODOS} = useFetchTODOS()
    
const updateShownListFunc= useCallback(() => {
    if (needsUpdate) {
        updateList.current = shownTODOS()
    }
    },
    [shownTODOS, needsUpdate])

    
    useEffect(() => {
        updateShownListFunc()
    }, [updateShownListFunc, dispatch]);
      

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