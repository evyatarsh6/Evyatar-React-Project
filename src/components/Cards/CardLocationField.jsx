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
        console.log(currCardInfo)
        const locationValues = Object.values(currCardInfo.location)
        const locationLong = locationValues[0]
        const locationLat =  locationValues[1]

        if (locationValues.length) {
            return  ` ${locationLong}: ${locationLat} `
        } 
        return null
    },[currCardInfo])

    if (isLocationExist(currCardInfo.location)) {
            return (
                <p className='location-description'>
                    {showLocationAsString}
                </p>
            )
        }
}