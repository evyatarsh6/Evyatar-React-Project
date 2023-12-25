const initialState = []

export const tooltipCurrLocat = (state = initialState, action) => {
    switch(action.type){
      case 'updateTooltipLocation':
        return action.tooltipLocat

      default:
        return state;  
    }
  };
  