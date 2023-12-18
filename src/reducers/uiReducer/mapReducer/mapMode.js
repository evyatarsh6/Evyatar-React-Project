const initialState = {
    PinMode: false,
    ShowPointsMode: false,
    activeTODOID: null
}

export const mapMode = (state = initialState, action) => {
    switch (action.type) {
      case 'activeMapPinTODOMode':
        return (
          {...state,
            PinMode: action.pinMode,
            ShowPointsMode: false,
            activeTODOID: action.activeTODOID
          })
      case 'activeMapShowPointsMode':
        return (
          {...state,
            PinMode: state.ShowPointsMode,
            ShowPointsMode: !state.ShowPointsMode,
            activeTODOID: null

          }) 
        case 'activeMapClearMapMode':
          return (
            {...state,
              PinMode: false,
              ShowPointsMode: false,
              activeTODOID: null
  
            }) 
        default:
        return state;
    }
  };
  