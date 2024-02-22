import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMapShowPointsMode } from '../../selectors'
import { Button } from '@mui/material'
import { MapActions } from '../../actions/actions'

export const PointsOnMapBtn = ({ style }) => {
  const dispatch = useDispatch()

  const showPointsMode = useSelector(GetMapShowPointsMode)
  const { activeMode, cancelMode } = MapActions.mapPinTODOMode

  const clickPointsBtn = () => showPointsMode ? dispatch(cancelMode()) : dispatch(activeMode())

  const pointsOnMapStatus = () => (!showPointsMode) ? 'Show' : 'Hide'

  return (

    <Button variant="contained"
      id={'all-points-on-map-btn'}
      className='all-points-on-map-btn'
      onClick={clickPointsBtn}
      style={style}
    >
      {` ${pointsOnMapStatus()} points on map`}
    </Button>
  )
}
