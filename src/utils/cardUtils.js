export const isLocationExist = (currCardInfo) => {
    const LocationValues = Object.values(currCardInfo.location)
    if (LocationValues.length) {
        return true
    }
    return false
}