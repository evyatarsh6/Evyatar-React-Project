import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetTodoList } from "../selectors";
import { isLocationExist } from '../utils/generalUtils';


export const CardLocationField = ({id}) => {
   
    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const currCardInfo = TODOList[id]

    const showLocationAsString = () => {
        let locationString
        const LocationValues = Object.values(currCardInfo.location)
        if (LocationValues.length) {
            locationString = ` ${currCardInfo.location.Long}  : ${currCardInfo.location.Lat}  `
            return locationString 
        } 
        return null
    }

    if (!isLocationExist(currCardInfo)) {
            return (
                <p className='location-description'>
                    {showLocationAsString()}
                </p>
            )
        }
}