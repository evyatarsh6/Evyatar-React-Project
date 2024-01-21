export const isLocationExist = (location = {}) => {
        const LocationValues = Object.values(location)
        if (LocationValues.length) {
            return true
        }
    return false
}

export const getLongLat = coordinate => {
    return {Long: coordinate[0], Lat: coordinate[1]}
  }

export const genID = () => {
    return Date.now()
  }

  export const makeSetFromArr = arr => {
    const IDS = new Set()
    arr.forEach(element => {
      IDS.add(element)
    });

    return IDS
  }