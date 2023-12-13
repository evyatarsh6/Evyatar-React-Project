const initialState = {
    PinMode: false,
    activeTODOID: null
}


export const mapModeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'changeMapPinMode':
        return {...state, PinMode: action.pinMode, activeTODOID: action.activeTODOID}
      default:
        return state;
    }
  };
  