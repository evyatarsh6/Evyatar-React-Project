import { useContext, useState } from "react"
import { HeaderInput } from "../components/HeaderMainInput."
import { ItemList } from "./ItemList."
import { ThemeContext } from "../shared/context"
import { Card } from "../components/Card"


export const AppWrapper = () => {
    const appTheme = useContext(ThemeContext)
   const [status, setStatus] = useState(appTheme)
    return (
        <form>
        <div className='App-wrapper'>
           <header className="Main-input-field">
           <HeaderInput
           >
     
           </HeaderInput>
           </header>
           <body>
            <Card>
            </Card>   
             {/* <ItemList
             status={status}>
               
             </ItemList> */}
           </body>
         </div>
         </form>
    )
}