import { useContext, useState } from "react"
import { HeaderInput } from "../components/HeaderMainInput."
import { ThemeContext } from "../shared/context"
import { CardList } from "./cardsList"


export const AppWrapper = () => {
    const appTheme = useContext(ThemeContext)
   const [status, setStatus] = useState(appTheme)
    
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