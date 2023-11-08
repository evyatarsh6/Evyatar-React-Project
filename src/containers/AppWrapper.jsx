import { HeaderBar } from "../components/HeaderMainInput."
import { CardList } from "./cardsList"
import { useState } from "react"
export const AppWrapper = () => {

  // const [AddTODO, setAddTODO ] = useState(false)
  // const [appState, setAppState] = useState()

  //action should be add/delete + TODO details
  //filterKind should be null/choose/delete

  const [TODOSList, setTODOSList] = useState({})
  const [action, setAction] = useState(null)
  const [filterKind,setFilterKind ] = useState(null)

    
   return (
        <div className='App-wrapper'>
           <header className="Main-input-field">
           <HeaderBar setAppState = {{setFilterKind,setAction, setTODOSList}}/>     
           </header>
           <body>
           <p>
            {action}
           </p>
           <form>
           <CardList appStatus = {{filterKind, action, }}/>
            </form>
           </body>
         </div>

    )
}