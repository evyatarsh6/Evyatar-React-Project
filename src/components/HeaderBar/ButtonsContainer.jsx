import React from 'react';
import { OpenFormBtn } from './OpenFormBtn';
import { ChoosenTODOSBtn } from './ChoosenTODOSBtn';
import { DeleteTODOSBtn } from './DeleteTODOSBtn';
import { PointsOnMapBtn } from './PointsOnMapBtn';

export const ButtonsContainer = () => {
  
  //for some reason didnt work as a class style  in the App.css file

  const muiButtonStyle = {
    margin: 10,
    height: 75,
    width:200
  }

    return (
        <div className='buttonContainer'>
          <OpenFormBtn style = {muiButtonStyle} ></OpenFormBtn>
          <ChoosenTODOSBtn style = {muiButtonStyle}></ChoosenTODOSBtn>
          <DeleteTODOSBtn style = {muiButtonStyle}></DeleteTODOSBtn>
          <PointsOnMapBtn style = {muiButtonStyle}></PointsOnMapBtn>
      </div>
    )
}