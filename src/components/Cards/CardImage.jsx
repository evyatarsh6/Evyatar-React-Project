import {bergerPhotos} from '../../shared/photos';

export const CardImage = ({kind}) => {

    
    const imgStyle = {
        width : "50%" ,
        height :"50%",
        borderColor : 'black',
        borderStyle : 'solid',
        backgroundColor: 'black'
    }
    

    return (
        <img
        src={bergerPhotos[kind]}
        className="card-image"
        style= { imgStyle }
    />
    )
}