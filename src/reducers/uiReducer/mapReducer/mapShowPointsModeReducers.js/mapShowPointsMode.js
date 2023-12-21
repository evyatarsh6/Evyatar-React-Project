const initialState = {
    ShowPointsMode: false,
}

export const mapShowPointsMode = (state = initialState, action) => {
    switch (action.type) {
        case 'activeMapShowPointsMode':
        return (
            {...state,
            ShowPointsMode: true,
            }
        )

        case 'activeClearMapMode':
        return (
        {...state,
            ShowPointsMode: false,
        })

        default:
        return state;
    }
  };
  