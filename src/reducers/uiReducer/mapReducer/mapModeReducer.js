const initialState = {
    PinMode: false,
}


export const mapModeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'changeMapPinMode':
        return {...state, PinMode: action.pinMode}
      default:
        return state;
    }
  };
  