import { CardDescriptionField } from './CardDescriptionField';
import { CardMapBtns } from './CardMapBtns';
import { CardTitle } from './CardTitle';
import { CardLocationField } from './CardLocationField';
import { CardImage } from './CardImage';
import { CardChooseDelete } from './CardChooseDeleteContainer';



export const Card = ({ info }) => {


    return (
        
        <div className ="card" id={info._id}>
            <CardMapBtns info={info} />
            <CardTitle kind={info.kind}/>
            <CardLocationField location={info.location} />
            <CardImage kind={info.kind}/>
            <CardDescriptionField _id = {info._id} description={info.description}/>
            <CardChooseDelete info={info}/>
        </div>
    )
}; 