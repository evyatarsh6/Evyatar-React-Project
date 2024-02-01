const initialState = false

export const tooltipStatus = (state = initialState, action) => {
    switch(action.type){
      case 'updateTooltipStatus':
        return action.isShownStatus

      default:
        return state;  
    }
  };
  