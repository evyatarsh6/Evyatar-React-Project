const initialState = true

export const tooltipExist = (state = initialState, action) => {
    switch (action.type) {
      case 'showTooltip':
      return true

      case 'hideTooltip':
        return false
        
      default:
      return state;
    }
  };
  