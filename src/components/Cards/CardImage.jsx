import {bergerPhotos} from '../../shared/photos';

export const CardImage = ({TODOKind}) => {
    
    return (
        <img
        src={bergerPhotos[TODOKind]}
        className="card-image"
    />
    )
}