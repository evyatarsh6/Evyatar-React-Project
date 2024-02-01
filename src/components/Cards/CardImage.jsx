import {bergerPhotos} from '../../shared/photos';

export const CardImage = ({kind}) => {
    
    return (
        <img
        src={bergerPhotos[kind]}
        className="card-image"
    />
    )
}