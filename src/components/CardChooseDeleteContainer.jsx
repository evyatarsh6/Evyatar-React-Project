import { CardDeleteBtn } from "./CardDeleteBtn"
import { CardChooseBtn } from "./CardChooseBtn"

export const CardChooseDelete = ({id}) => {
    return (
        <div className='chooseDeleteContainer'>
            <CardDeleteBtn id={id}/>
            <CardChooseBtn id={id}/>
        </div>
    )
}