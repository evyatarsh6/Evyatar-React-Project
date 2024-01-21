import { CardDeleteBtn } from "./CardDeleteBtn"
import { CardChooseBtn } from "./CardChooseBtn"

export const CardChooseDelete = ({info}) => {
    return (
        <div className='chooseDeleteContainer'>
            <CardDeleteBtn info={info}/>
            <CardChooseBtn info={info}/>
        </div>
    )
}