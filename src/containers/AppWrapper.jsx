import { useContext, useState } from "react"
import { HeaderInput } from "../components/HeaderMainInput."
// import { ItemList } from "./ItemList."
import { ThemeContext } from "../shared/context"
import { Card } from "../components/Card"


export const AppWrapper = () => {
    const appTheme = useContext(ThemeContext)
   const [status, setStatus] = useState(appTheme)
    return (
        // <div className='App-wrapper'>
        // <form>
        //    <header className="Main-input-field">
        //    <HeaderInput>
     
        //    </HeaderInput>
        //    </header>
        //    <body>
        //     <Card>
        //     </Card>   

        //    </body>
        //    </form>
        //  </div>



        <div className='App-wrapper'>
           <header className="Main-input-field">
           <HeaderInput>
     
           </HeaderInput>
           </header>
           <body>
           <form>
            <Card>
            </Card>   

            </form>
           </body>
         </div>

    )
}