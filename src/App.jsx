import './App.css';
import { HeaderBar } from './components/HeaderBar';
import { MapContainer } from './containers/MapContainer';
import { CardList } from './containers/cardsList';

function App() {

  return (

    <div className='App'>
      <body style={{
        width:"100%",
        flexDirection: 'column',
      }}> 
          <HeaderBar/>
          <MapContainer/>
          <CardList/> 
      </body>
    </div>

  );
}
export default App;
