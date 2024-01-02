const initialState = null

export const currTooltip = (state = initialState, action) => {
    switch (action.type) {
        case 'updateTooltip':
            return action.tooltip

        default:
        return state;
    }
  };
  

