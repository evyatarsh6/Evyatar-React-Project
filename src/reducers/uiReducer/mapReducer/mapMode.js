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
            PinMode: true,
            ShowPointsMode: false,
            activeTODOID: action.activeTODOID
          })
      case 'activeMapShowPointsMode':
        return (
          {...state,
            PinMode: false,
            ShowPointsMode: true,
            activeTODOID: null

          }) 
        case 'activeClearMapMode':
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
  