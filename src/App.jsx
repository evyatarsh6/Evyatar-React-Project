import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { MapContainer } from './containers/MapContainer';
import { CardList } from './containers/cardsList';
import { GetTODOListNeedsChange } from './selectors';
import { useCallback, useEffect } from 'react';
import { makeSetFromArr } from './utils/generalUtils';
import { deleteChanges } from './actions/actions';
import { useAllTODOSQuery } from './hooks/useAllTODOS';

function App() {
  const dispatch = useDispatch()
  const updateTODOSID = useSelector(GetTODOListNeedsChange)
  const {getAllTODDOSData} = useAllTODOSQuery()

  const IDSChanges = useCallback(() => {
    const avi = makeSetFromArr(updateTODOSID)
    dispatch(deleteChanges())
    console.log(avi)
  },[updateTODOSID, dispatch])

  useEffect(()=> {
    getAllTODDOSData()
  },[getAllTODDOSData])

  
  // useEffect(()=> {
  //   IDSChanges()
  // },[IDSChanges])

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
