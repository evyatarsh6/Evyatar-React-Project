import { isLocationExist } from '../../utils/generalUtils';
import { useMemo } from 'react';


export const CardLocationField = ({location}) => {

    const showLocationAsString = useMemo(() => {
        const locationValues = Object.values(location) || []
        if (locationValues.length) {
            const locationLong = locationValues[0]
            const locationLat =  locationValues[1]
            return ` ${locationLong}: ${locationLat} `
            
        }
        return null
        
    },[location])

    if (isLocationExist(location)) {
            return (
                <p className='location-description'>
                    {showLocationAsString}
                </p>
            )
        }
}