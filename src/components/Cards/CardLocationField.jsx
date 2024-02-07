import { isLocationExist } from '../../utils/generalUtils';
import { useMemo } from 'react';


export const CardLocationField = ({location}) => {

    const showLocationAsString = useMemo(() => {
        if (!location.length) {
            return null
        }
        const locationValues = Object.values(location)
        if (locationValues.length) {
            const locationLong = locationValues[0]
            const locationLat =  locationValues[1]
            return ` ${locationLong}: ${locationLat} `
            
        }
        
    },[location])

    if (!isLocationExist(location)) {
        return null
    }
    else{
        return (
            <p className='location-description'>
                {showLocationAsString}
            </p>
        )
    }
}