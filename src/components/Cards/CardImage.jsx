import React from 'react'
import { bergerPhotos } from '../../shared/photos'

export const CardImage = ({ TODOKind }) => (
    <img
        src={bergerPhotos[TODOKind]}
        className="card-image"
    />
)
