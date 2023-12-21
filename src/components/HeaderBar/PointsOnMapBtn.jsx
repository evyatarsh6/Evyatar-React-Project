import { useDispatch, useSelector } from "react-redux"
import { GetMapShowPointsMode  } from "../../selectors";
import {Button} from '@mui/material';
import { activeClearMapPointsMode, activeShowMapPointsMode} from "../../actions/actions";


export const PointsOnMapBtn = ({style}) => {

    const dispatch = useDispatch();

    const showPointsMode = useSelector(GetMapShowPointsMode);

    const clickPointsBtn = () => {
      if (showPointsMode) {
        dispatch(activeClearMapPointsMode())
      }
      else{
        dispatch(activeShowMapPointsMode())
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