const initialState = {
    center: [0, 0],
    zoom: 1,
    rotation: 0,
    minZoom: 2,
    maxZoom: 10,
  }

export const currViewInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'focusWantedTODO':
            return (
                {
                    ...state,
                    center: action.location,
                    zoom: 6,
                }
            )

        default:
        return state;
    }
  };
  





