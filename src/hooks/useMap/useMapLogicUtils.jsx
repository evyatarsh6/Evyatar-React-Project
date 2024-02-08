
import React, { useCallback} from "react";
import { GetCurrViewInfo} from "../../selectors";
import { useSelector } from "react-redux/es/hooks/useSelector";


export const useMapLogicUtils = () => {

    const currMapViewInfo = useSelector(GetCurrViewInfo)



    const getHoverID = useCallback((coordinate) => {

        const getDistance = (pointA, pointB ) => {
  
          const [x1, y1]= pointA
          const [x2,y2] = pointB
  
          const a = x1 - x2
          const b = y1 - y2
          const c = Math.sqrt( a*a + b*b )
  
          return c
        }

        
      const findTODOConditinal = (ID) => {

        const currDistance = getDistance(getShownTODOSPoints[ID], coordinate)
        const distanceView = currDistance * Math.pow( currMapViewInfo.zoom,  currMapViewInfo.zoom)
        if (distanceView<= 500000 ) {
          return true
        }
        return false
      }

      const wantedPointID = shownTODOSPointsIDS.find(findTODOConditinal)
      
      return wantedPointID
      
  }
  ,[getShownTODOSPoints, shownTODOSPointsIDS, currMapViewInfo.zoom])


    return (
    {
        getHoverID: getHoverID,
    }
    )
}