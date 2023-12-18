import { useDispatch, useSelector } from "react-redux"
import {GetMapMode } from "../../selectors"
import {Button} from '@mui/material';
import { activeMapClearMapMode, activeMapShowPointsMode} from "../../actions/actions";


export const PointsOnMapBtn = ({style}) => {

    const dispatch = useDispatch();

    const mapModeSelector = useSelector(GetMapMode);
    const showPointsMode = mapModeSelector.ShowPointsMode

    const clickPointsBtn = () => {
      if (!showPointsMode) {
        dispatch(activeMapShowPointsMode())
      }
      else{
        dispatch(activeMapClearMapMode())
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