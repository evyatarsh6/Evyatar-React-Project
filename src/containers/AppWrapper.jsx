import { HeaderBar } from "../components/HeaderMainInput."
import { CardList } from "./cardsList"
import { useState } from "react"
export const AppWrapper = () => {

  const [filterKind,setFilterKind ] = useState('normal')

  const appState = {
    "filterKind": filterKind,
    "setFilterKind": setFilterKind,
  }

    
   return (
        <div className='App-wrapper'>
           <header className="Main-input-field">
           <HeaderBar appState = {appState}/>     
           </header>
           <body>
           <form>
           <CardList/>
            </form>
           </body>
         </div>

    )
}