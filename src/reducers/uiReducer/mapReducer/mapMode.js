const initialState = {
    PinMode: false,
    ShowPointsMode: false,
    ClearPointsMode: true,
    activeTODOID: null
}

export const mapMode = (state = initialState, action) => {
    switch (action.type) {
      case 'activeMapPinTODOMode':
        return (
          {...state,
            PinMode: true,
            activeTODOID: action.activeTODOID
          })
      case 'activeMapShowPointsMode':
        return (
          {...state,
            PinMode: false,
            ShowPointsMode: true,
            ClearPointsMode: false,
            activeTODOID: null

          }) 
        case 'activeClearMapMode':
          return (
            {...state,
              ShowPointsMode: false,
              ClearPointsMode: true,
              activeTODOID: null
  
            }) 
        default:
        return state;
    }
  };
  