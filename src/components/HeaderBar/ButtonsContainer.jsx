import React, {useEffect, useMemo, useState } from 'react';
import { AddTODOBtn } from './AddTODOButton';
import { ChoosenTODOSBtn } from './ChoosenTODOSBtn';
import { DeleteTODOSBtn } from './DeleteTODOSBtn';
import { PointsOnMapBtn } from './PointsOnMapBtn';

export const ButtonsContainer = () => {

  const muiButtonStyle = {
    margin: 10,
    height: 75,
    width:200
  }

    return (
        <div className='buttonContainer'>
          <AddTODOBtn style = {muiButtonStyle}></AddTODOBtn>
          <ChoosenTODOSBtn style = {muiButtonStyle}></ChoosenTODOSBtn>
          <DeleteTODOSBtn style = {muiButtonStyle}></DeleteTODOSBtn>
          <PointsOnMapBtn style = {muiButtonStyle}></PointsOnMapBtn>
      </div>
    )
}