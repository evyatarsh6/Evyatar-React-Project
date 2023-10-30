
export const createOptions = wantedArr => {
    let options = []
    for (let index = 0; index < Object.keys(wantedArr).length; index++) {

      options.push({ value: `${Object.keys(wantedArr)[index]}`, label: `${Object.keys(wantedArr)[index]}`})
    }
    return options
  }