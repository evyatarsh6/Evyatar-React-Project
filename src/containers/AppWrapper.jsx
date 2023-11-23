import { HeaderBar } from "../components/HeaderMainInput."
import { MapContainer } from "./OpenLayersMap/MapContainer"
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
            <MapContainer/>
           </body>
         </div>

    )
}