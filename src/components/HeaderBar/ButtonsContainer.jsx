/* eslint-disable no-unexpected-multiline */
import React, {useEffect, useMemo, useState } from 'react';
import { bergerPhotos } from '../../shared/photos';
import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { activeMapShowPointsMode, addTODO, changeFilterKind } from '../../actions/actions';
import { choosenFilterKind, deleteFilterKind, mainInputPlaceHolder, normalFilterKind } from '../../constans/cardConstans';
import { generateChangeValueLogs } from '../../constans/generalLogs';
import { GetFilterKind, GetMainInputIsEmpty, GetMainInputValue, GetMapMode } from '../../selectors';
import {Button} from '@mui/material';


export const ButtonsContainer = () => {

  const inputValue = useSelector(GetMainInputValue)
  const isEmpty = useSelector(GetMainInputIsEmpty)
    
  const muiButtonStyle = {
    margin: 10,
    height: 75,
    width:200
  }

  const dispatch = useDispatch();
  const filterKind = useSelector(GetFilterKind);
  const mapModeSelector = useSelector(GetMapMode);
  const showPointsMode = mapModeSelector.ShowPointsMode

    const handleAddTODO = () => {
        const cardID = Date.now()
        dispatch(addTODO(inputValue,cardID))
      }

      const SwitchFilterKind = filterKind => dispatch(changeFilterKind(filterKind))

      const clickWantedFilterKindBtn = wantedFilterKind => () =>  {
  
        (filterKind!== wantedFilterKind) ? SwitchFilterKind(wantedFilterKind) : SwitchFilterKind(normalFilterKind)
      }
  
      const clickPointsBtn = () => {
        dispatch(activeMapShowPointsMode())
      }
      
      const filterKindBtnStatus = wantedFilterKind  => (filterKind !== wantedFilterKind)? 'turn on': 'turn off'
  
      const pointsOnMapStatus = () => {
        if (!showPointsMode) {
          return 'Show'
        }
        return 'Hide'
      }
      

    return (
        <div className='buttonContainer'>
        <Button variant="contained"
                className='save-btn'
                onClick={handleAddTODO}
                disabled = {isEmpty}
                style={muiButtonStyle}>
                save Avi Berger
        </Button>
        <Button variant="contained"
                id = {`show-choosen-items-btn`}
                className= 'show-choosen-items-btn'
                onClick={clickWantedFilterKindBtn(choosenFilterKind)}
                style={muiButtonStyle}>
                {`${filterKindBtnStatus(choosenFilterKind)} show choosen items`}
        </Button>

        <Button variant="contained"
                id = {`show-delete-items-btn`}
                className= 'show-delete-items-btn'
                onClick={clickWantedFilterKindBtn(deleteFilterKind)}
                style={muiButtonStyle}
                >
                {`${filterKindBtnStatus(deleteFilterKind)} show delete items`}
        </Button>

        <Button variant="contained"
                id = {`all-points-on-map-btn`}
                className= 'all-points-on-map-btn'
                onClick={clickPointsBtn}
                style={muiButtonStyle}
                >
                {` ${pointsOnMapStatus()} points on map`}
        </Button>
      </div>
    )
}