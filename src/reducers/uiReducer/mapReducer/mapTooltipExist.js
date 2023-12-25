const initialState = false

export const tooltipCurrLocat = (state = initialState, action) => {
    // switch (action.type) {
    //   case 'showTooltip':
    //   return true

    //   case 'hideTooltip':
    //     return false
    
    switch(action.type){
      case 'updateTooltipLocation':
        return action.tooltipLocat

      default:
        return state;  
    }
  };
  