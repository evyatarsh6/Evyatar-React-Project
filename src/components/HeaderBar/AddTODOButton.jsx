import { useDispatch, useSelector } from "react-redux"
import { GetMainInput, GetTodoList} from "../../selectors"
import {Button} from '@mui/material';
import { addTODO } from "../../actions/actions";
import axios from "axios";
import { useEffect, useState } from "react";


export const AddTODOBtn = ({style}) => {

    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const inputVal = useSelector(GetMainInput).inputValue
    const isEmpty = useSelector(GetMainInput).isEmpty

    const [lastTODOID, setLastTODOID] = useState(null)
    
    const handleAddTODO = () => {
        const cardID = Date.now()
        setLastTODOID(cardID)
        dispatch(addTODO(inputVal,cardID))
      }
      
      useEffect(() => {
        if (lastTODOID) {
          axios.post(`http://localhost:3000/addTODO`, {
            [lastTODOID]: TODOList[lastTODOID]
          })
          .then((response) => {
            if (response.status === 200) {
              alert(response.data);
            }
          })
          .catch((error) => {
            alert(`Error: ${error.message}`);
          });
        }
        setLastTODOID(null);
      }, [lastTODOID, TODOList]);
      

    
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