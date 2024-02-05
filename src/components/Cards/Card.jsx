import { CardDescriptionField } from './CardDescriptionField';
import { CardMapBtns } from './CardMapBtns';
import { CardTitle } from './CardTitle';
import { CardLocationField } from './CardLocationField';
import { CardImage } from './CardImage';
import { CardChooseDelete } from './CardChooseDeleteContainer';



export const Card = ({ TODO }) => {

    const {_id, kind, location, description} = TODO

    return (
        
        <div className ="card" id={_id}>
            <CardMapBtns TODO={TODO} />
            <CardTitle TODOKind={kind}/>
            <CardLocationField location={location} />
            <CardImage TODOKind={kind}/>
            <CardDescriptionField _id = {_id} description={description}/>
            <CardChooseDelete TODO={TODO}/>
        </div>
    )
}; 