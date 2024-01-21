import { useSelector } from 'react-redux';
import './App.css';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { MapContainer } from './containers/MapContainer';
import { CardList } from './containers/cardsList';
import { GetTODOListNeedsChange } from './selectors';
import { useCallback, useEffect } from 'react';
import { makeSetFromArr } from './utils/generalUtils';

function App() {
  
  const updateTODOSID = useSelector(GetTODOListNeedsChange)

  const IDSChanges = useCallback(() => {
    makeSetFromArr(updateTODOSID)
  },[updateTODOSID])

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
