import { HeaderBar } from "../components/HeaderMainInput."
import { CardList } from "./cardsList"
import { useState } from "react"
export const AppWrapper = () => {

  const [TODOSList, setTODOSList] = useState({})
  const [action, setAction] = useState(null)
  const [filterKind,setFilterKind ] = useState('normal')

  const appState = {
    "filterKind": filterKind,
    "actionDetails": action,
    "TODOList": TODOSList,
    "setFilterKind": setFilterKind,
    "setAction": setAction,
    "TODOListUpdate": setTODOSList
  }

    
   return (
        <div className='App-wrapper'>
           <header className="Main-input-field">
           <HeaderBar appState = {appState}/>     
           </header>
           <body>
           <p>
            {action}
           </p>
           <form>
           <CardList appState = {appState}/>
            </form>
           </body>
         </div>

    )
}