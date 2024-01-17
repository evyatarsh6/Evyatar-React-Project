import { useSelector } from "react-redux"
import { GetMainInput, GetTodoListNeedsUpdate} from "../../selectors"
import {Button} from '@mui/material';
import { useCallback, useEffect, useRef } from "react";
import { useFetchTODOS } from "../../hooks/useFetchTODOS";
import { useUpdateDB } from "../../hooks/useUpdateDB";


export const AddTODOBtn = ({style}) => {

    const inputVal = useSelector(GetMainInput).inputValue
    const needsUpdate = useSelector(GetTodoListNeedsUpdate)
    const isEmpty = useSelector(GetMainInput).isEmpty
    const {updateTODOList} = useFetchTODOS()
    const {addNewTODO} = useUpdateDB()

    const inputRef = useRef(inputVal)
    
    useEffect(() => {
      inputRef.current = inputVal
    },[inputVal])

    const handleAddTODO=  useCallback( async () => {
      if (!needsUpdate) {
        //updateTODOList
      }      
      await addNewTODO(inputRef.current)
      },
      [
        addNewTODO,
        updateTODOList,
        needsUpdate
      ])
    
    return (
        <Button variant="contained"
        className='save-btn'
        onClick={handleAddTODO}
        disabled = {isEmpty}
        style={style}>
        save Avi Berger
        </Button>
    )
}