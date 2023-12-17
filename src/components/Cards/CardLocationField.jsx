import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetMapPoints, GetTodoList } from "../../selectors";
import { isLocationExist } from '../../utils/generalUtils';
import { useMemo } from 'react';


export const CardLocationField = ({id}) => {
   
    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)

    
    const currCardInfo = TODOList[id]
    
    const showLocationAsString = useMemo(() => {
        let locationString
        const LocationValues = Object.values(currCardInfo.location)
        if (LocationValues.length) {
            locationString = ` ${currCardInfo.location.Long}  : ${currCardInfo.location.Lat}  `
            return locationString 
        } 
        return null
    },[currCardInfo.location])

    if (isLocationExist(currCardInfo.location)) {
            return (
                <p className='location-description'>
                    {showLocationAsString}
                </p>
            )
        }
}