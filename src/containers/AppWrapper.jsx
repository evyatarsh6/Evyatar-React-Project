import { HeaderBar } from './components/HeaderBar';
import { CardList } from "./cardsList"


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