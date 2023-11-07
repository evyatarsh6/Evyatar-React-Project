import { HeaderInput } from "../components/HeaderMainInput."
import { CardList } from "./cardsList"
import { useState } from "react"
import { useReducer } from "react"

import { TODOReducer } from "../reducers/handleTODOSReducer"

export const AppWrapper = () => {

  const [TODOS, dispatch] = useReducer(TODOReducer, {})

    
   return (
        <div className='App-wrapper'>
           <header className="Main-input-field">
           <HeaderInput>
     
           </HeaderInput>
           </header>
           <body>
           <form>
           <CardList>

           </CardList>

            </form>
           </body>
         </div>

    )
}