const initialState = {
    PinMode: false,
    ShowPointsMode: false,
    activeTODOID: null
}


export const mapMode = (state = initialState, action) => {
    switch (action.type) {
      case 'changeMapPinMode':
        return {...state, PinMode: action.pinMode, activeTODOID: action.activeTODOID}
      default:
        return state;
    }
  };
  