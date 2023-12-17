export const isLocationExist = (currCardInfo) => {
    const LocationValues = Object.values(currCardInfo.location)
    if (LocationValues.length) {
        return true
    }
    return false
}

export const getLongLat = coordinate => {
    return {Long: coordinate[0], Lat: coordinate[1]}
  }