const initialState = {
    location: [],
  }

export const currLocation = (state = initialState, action) => {
    switch (action.type) {
        case 'currMapLocation':
            return (
                {
                    ...state,
                    location: action.location,
                }
            ) 

        default:
        return state;
    }
  };
  





