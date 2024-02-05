import { CardDeleteBtn } from "./CardDeleteBtn"
import { CardChooseBtn } from "./CardChooseBtn"

export const CardChooseDelete = ({TODO}) => {

    const {_id,isDeleted, isChoosen} = TODO
    
    return (
        <div className='chooseDeleteContainer'>
            <CardDeleteBtn _id={_id} isDeleted={isDeleted}/>
            <CardChooseBtn _id={_id} isChoosen={isChoosen}/>
        </div>
    )
}