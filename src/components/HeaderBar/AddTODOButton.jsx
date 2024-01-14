import { useDispatch, useSelector } from "react-redux"
import { GetMainInput } from "../../selectors"
import {Button} from '@mui/material';
import { addTODO } from "../../actions/actions";


export const AddTODOBtn = ({style}) => {

    const dispatch = useDispatch();
    const inputVal = useSelector(GetMainInput).inputValue
    const isEmpty = useSelector(GetMainInput).isEmpty
    
    const handleAddTODO = () => {
        const cardID = Date.now()
        dispatch(addTODO(inputVal,cardID))
      }

    
    return (
      //avi before CR
        <Button variant="contained"
        className='save-btn'
        onClick={handleAddTODO}
        disabled = {isEmpty}
        style={style}>
        save Avi Berger
        </Button>
    )
}