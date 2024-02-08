
import { useCallback } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { GetMapPoints, GetTODOList, GetFilterKind, GetCurrViewInfo } from "../../selectors"
import { isShownTODO } from "../../utils/generalUtils"

export const useMapLogicUtils = () => {

  const mapPoints = useSelector(GetMapPoints)
  const TODOS = useSelector(GetTODOList)
  const filterKind = useSelector(GetFilterKind)
  const currMapViewInfo = useSelector(GetCurrViewInfo)

  const filterShownTODOSPoints = useCallback(() => {
    const shownPoints = {}
    const allMapPointsIDS = Object.keys(mapPoints)
    allMapPointsIDS.forEach(pointID => {
      if (isShownTODO(TODOS[pointID], filterKind)) {
        shownPoints[pointID] = TODOS[pointID].location
      }
    })
    return shownPoints
  }, [TODOS, filterKind, mapPoints])



  const getDistance = (pointA, pointB) => {

    const [x1, y1] = pointA
    const [x2, y2] = pointB

    const a = x1 - x2
    const b = y1 - y2
    const c = Math.sqrt(a * a + b * b)

    return c
  }


  const getHoverID = useCallback(coordinate => {

    const shownTODOSPoints = filterShownTODOSPoints()
    const shownTODOSPointsIDS = Object.keys(shownTODOSPoints)
    
    const findTODOConditinal = ID => {
      const currDistance = getDistance(shownTODOSPoints[ID], coordinate)
      const distanceView = currDistance * Math.pow(currMapViewInfo.zoom, currMapViewInfo.zoom)
      if (distanceView <= 500000) {
        return true
      }
      return false
    }


    const wantedPointID = shownTODOSPointsIDS.find(findTODOConditinal)

    return wantedPointID
  }
    , [currMapViewInfo.zoom, mapPoints])

  return (
    {
      getHoverID: getHoverID,
      filterShownTODOSPoints: filterShownTODOSPoints
    }
  )
}
