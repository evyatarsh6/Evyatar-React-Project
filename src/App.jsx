import { useEffect } from 'react';
import './App.css';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { MapContainer } from './containers/MapContainer';
import { CardList } from './containers/cardsList';
import { useAllTODOSQuery } from './hooks/useAllTODOS';
import { useDeltas } from './hooks/useDeltas';

function App() {
  const {getAllTODDOSData} = useAllTODOSQuery()
  const {getDeltas} = useDeltas()

  useEffect(()=> {
    getAllTODDOSData()
  },[getAllTODDOSData])

  useEffect(() => {
      getDeltas()
    },[getDeltas]);

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
