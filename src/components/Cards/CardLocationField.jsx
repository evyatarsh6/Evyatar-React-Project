import { isLocationExist } from '../../utils/generalUtils';
import { useMemo } from 'react';


export const CardLocationField = ({info}) => {

    const showLocationAsString = useMemo(() => {
        const locationValues = Object.values(info.location)
        const locationLong = locationValues[0]
        const locationLat =  locationValues[1]

        if (locationValues.length) {
            return ` ${locationLong}: ${locationLat} `
        } 
        return null
    },[info.location])

    if (isLocationExist(info.location)) {
            return (
                <p className='location-description'>
                    {showLocationAsString}
                </p>
            )
        }
}