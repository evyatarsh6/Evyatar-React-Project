import { HeaderBar } from "../components/HeaderMainInput."
import { CardList } from "./cardsList"
import { useState } from "react"
export const AppWrapper = () => {

  const [action, setAction] = useState(null)

    
   return (
        <div className='App-wrapper'>
           <header className="Main-input-field">
           <HeaderBar setAppState = {setAction}/>     
           </header>
           <body>
           <form>
           <CardList appStatus = {action}/>
            </form>
           </body>
         </div>

    )
}