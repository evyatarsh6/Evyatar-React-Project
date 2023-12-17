import { useDispatch, useSelector } from "react-redux"
import { GetFilterKind, GetMapMode } from "../../selectors"
import {Button} from '@mui/material';
import { activeMapShowPointsMode, changeFilterKind } from "../../actions/actions";
import { choosenFilterKind, normalFilterKind } from "../../constans/cardConstans";


export const PointsOnMapBtn = ({style}) => {

    const dispatch = useDispatch();

    const mapModeSelector = useSelector(GetMapMode);
    const showPointsMode = mapModeSelector.ShowPointsMode

    const clickPointsBtn = () => {
        dispatch(activeMapShowPointsMode())
      }
    
      const pointsOnMapStatus = () => {

        (!showPointsMode)? 'Show' : 'Hide'
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