export const isLocationExist = (location = {}) => {
  const LocationValues = Object.values(location)
  if (LocationValues.length) {
    return true
  }
  return false
}

export const isShownTODO = (TODO = {}, filterKind) => {
  if (filterKind === "delete") {
    return TODO.isDeleted
  }
  else if (filterKind === "choosen") {
    return (TODO.isChoosen && !TODO.isDeleted)
  }
  else {
    return !TODO.isDeleted
  }
}

export const genID = () => Date.now()

export const makeSetFromArr = arr => {
  const IDS = new Set()
  arr.forEach(element => {
    IDS.add(element)
  })

  return IDS
}
