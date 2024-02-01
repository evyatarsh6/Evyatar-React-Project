import { useDispatch, useSelector } from "react-redux"
import { GetMapShowPointsMode  } from "../../selectors";
import {Button} from '@mui/material';
import { MapActions} from "../../actions/actions";


export const PointsOnMapBtn = ({style}) => {

    const dispatch = useDispatch();

    const showPointsMode = useSelector(GetMapShowPointsMode);

    const clickPointsBtn = () => {
      if (showPointsMode) {
        dispatch(MapActions.mapShowPointsMode.cancelMode())
      }
      else{
        dispatch(MapActions.mapShowPointsMode.activeMode())
      }
      }
    
      const pointsOnMapStatus = () => {
        if (!showPointsMode) {
            return 'Show'
        }
        return 'Hide'
      }
    
      
    return (

        <Button variant="contained"
                id = {`all-points-on-map-btn`}
                className= 'all-points-on-map-btn'
                onClick={clickPointsBtn}
                style={style}
                >
                {` ${pointsOnMapStatus()} points on map`}
        </Button>
    )
}