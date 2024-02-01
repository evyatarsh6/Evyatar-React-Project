import { CardDeleteBtn } from "./CardDeleteBtn"
import { CardChooseBtn } from "./CardChooseBtn"

export const CardChooseDelete = ({info}) => {
    return (
        <div className='chooseDeleteContainer'>
            <CardDeleteBtn _id={info._id} isDeleted={info.isDeleted}/>
            <CardChooseBtn _id={info._id} isChoosen={info.isChoosen}/>
        </div>
    )
}