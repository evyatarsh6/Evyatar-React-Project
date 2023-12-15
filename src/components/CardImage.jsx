import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetTodoList } from "../selectors";
import {bergerPhotos} from '../shared/photos';

export const CardImage = ({id}) => {

    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const currCardInfo = TODOList[id]
    
    const imgStyle = {
        width : "50%" ,
        height :"50%",
        borderColor : 'black',
        borderStyle : 'solid',
        backgroundColor: 'black'
    }
    

    return (
        <img
        src={bergerPhotos[currCardInfo.kind]}
        className="card-image"
        style= { imgStyle }
    />
    )
}