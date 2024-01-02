const initialState = {
    tooltip: null,
  };
  

export const currTooltip = (state = initialState, action) => {
    switch (action.type) {
        case 'updateTooltip':
            return action.tooltip
            case 'resetTooltip':
                return initialState

        default:
        return state;
    }
  };
  

