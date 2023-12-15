import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetTodoList } from "../selectors";


export const CardTitle = ({id}) => {

    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const currCardInfo = TODOList[id]

    return (
        <h3 className="card-title">{currCardInfo.kind}</h3>
    )
}