// import { useDispatch, useSelector } from 'react-redux';
// import { GetTODOListNeedsChange } from './selectors';
// import { useCallback, useEffect } from 'react';
// import { makeSetFromArr } from './utils/generalUtils';
// import { deleteChanges } from './actions/actions';
import { useCallback, useEffect } from 'react';
import './App.css';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { MapContainer } from './containers/MapContainer';
import { CardList } from './containers/cardsList';
import { useAllTODOSQuery } from './hooks/useAllTODOS';
import { useQueryTemplate } from './hooks/useQueryTemplate';
import { useFetchData } from './hooks/useFetchData';
import { useDeltas } from './hooks/useDeltas';

function App() {
  const {getAllTODDOSData} = useAllTODOSQuery()
  const {refetch} = useDeltas()

  useEffect(()=> {
    getAllTODDOSData()
  },[getAllTODDOSData])

  useEffect(() => {
    const timer = setTimeout(() => {
      refetch()
    }, 10000);
    return () => {
      clearTimeout(timer);
    } 
  }, [refetch]);


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
