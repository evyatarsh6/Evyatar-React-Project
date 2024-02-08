
import { useCallback } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { GetMapPoints, GetTODOList, GetFilterKind, GetCurrViewInfo } from "../../selectors"
import { isShownTODO } from "../../utils/generalUtils"

export const useMapLogicUtils = () => {

  const mapPoints = useSelector(GetMapPoints)
  const TODOS = useSelector(GetTODOList)
  const filterKind = useSelector(GetFilterKind)
  const currMapViewInfo = useSelector(GetCurrViewInfo)

  
  const allMapPointsIDSFunc = useCallback(() => Object.keys(mapPoints), [mapPoints])
  
  const filterShownTODOSPoints = useCallback(() => {
    const shownPoints = {}
    // const allMapPointsIDS = Object.keys(mapPoints)
    const allMapPointsIDS = allMapPointsIDSFunc()
    allMapPointsIDS.forEach(pointID => {
      if (isShownTODO(TODOS[pointID], filterKind)) {
        shownPoints[pointID] = TODOS[pointID].location
      }
    })
    return shownPoints
  }, [TODOS, filterKind, allMapPointsIDSFunc])
  // }, [TODOS, filterKind, mapPoints])
  
  
  const getDistance = (pointA, pointB) => {

    const [x1, y1] = pointA
    const [x2, y2] = pointB

    const a = x1 - x2
    const b = y1 - y2
    const c = Math.sqrt(a * a + b * b)

    return c
  }

  
  // const getShownTODOSPoints = useCallback(() => {
  //   filterShownTODOSPoints()
  // },[filterShownTODOSPoints])


  const getHoverID = useCallback(coordinate => {

    const shownTODOSPointsIDS = Object.keys(filterShownTODOSPoints())

    const findTODOConditinal = ID => {
      const currDistance = getDistance(shownTODOSPointsIDS[ID], coordinate)
      const distanceView = currDistance * Math.pow(currMapViewInfo.zoom, currMapViewInfo.zoom)
      if (distanceView <= 500000) {
        return true
      }
      return false
    }


    const wantedPointID = shownTODOSPointsIDS.find(findTODOConditinal)

    return wantedPointID
  }
    , [currMapViewInfo.zoom])



  //   const getHoverID = useCallback((coordinate) => {
  //     const TODOSIDS =  Object.keys(mapPoints)

  //     const findTODOConditinal = (ID) => {

  //         const xvalue = Math.abs(mapPoints[ID].location[0] ) - Math.abs(coordinate[0])
  //         const yvalue = Math.abs(mapPoints[ID].location[1] )- Math.abs(coordinate[1])
  //         const xvalueContidinal = Math.abs(xvalue)<500000
  //         const yvalueContidinal = Math.abs(yvalue)<500000

  //           return (
  //             xvalueContidinal && yvalueContidinal
  //         )
  //     }

  //     const wantedPointID = TODOSIDS.find(findTODOConditinal)

  //     return wantedPointID

  // }
  // ,[mapPoints])






  return (
    {
      getHoverID: getHoverID,
      filterShownTODOSPoints: filterShownTODOSPoints
    }
  )
}
