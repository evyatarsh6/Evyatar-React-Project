import { Card } from "../components/Card"
import { useDispatch,useSelector } from "react-redux"


export const CardList = () => { 

    const dispatch = useDispatch();
    const TODOList = useSelector((state) => state.UI.TODOList);

    const TODOUpdateFunc = ( isChoosen ,isDeleted, description , id  ) => (
        dispatch({type: "editTODO", isChoosen ,isDeleted, description , id})
    )

    return (

        <>
            <ul className="flex-container">
            {
                Object.values(TODOList).map( TODO => (
                    (TODO.id !== 0)?      
                    <Card
                        key={TODO.id}
                        id={TODO.id}
                        description={TODO.description}
                        title={TODO.kind}
                        isCheckedProp={TODO.isChoosen}
                        isDeletedProp = {TODO.isDeleted}
                        TODOUpdateFunc={TODOUpdateFunc}
                    />
                    :
                    null
                ))
            }
            
            </ul>
        </>


    )
    
}