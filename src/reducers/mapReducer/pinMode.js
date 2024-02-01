const initialState = {
    PinMode: false,
    activeTODOID: null
}

export const pinMode = (state = initialState, action) => {
    switch (action.type) {
      case 'activeMapPinMode':
      return (
      {...state,
        PinMode: true,
        activeTODOID: action.activeTODOID
      })

      case 'cancelMapPinMode':
      return (
      {...state,
      PinMode: false,
      activeTODOID: null
      })

      default:
      return state;
    }
  };
  