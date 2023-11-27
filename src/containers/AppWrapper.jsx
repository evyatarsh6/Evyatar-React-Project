import { HeaderBar } from "../components/HeaderMainInput."
import { CardList } from "./cardsList"
import { useState } from "react"
export const AppWrapper = () => {

    
   return (
        <div className='App-wrapper'>
           <header className="Main-input-field">
           <HeaderBar/>     
           </header>
           <body>
           <form>
           <CardList/>
            </form>
           </body>
         </div>

    )
}