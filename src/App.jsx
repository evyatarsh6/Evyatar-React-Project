// import { useDispatch, useSelector } from 'react-redux';
// import { GetTODOListNeedsChange } from './selectors';
// import { useCallback, useEffect } from 'react';
// import { makeSetFromArr } from './utils/generalUtils';
// import { deleteChanges } from './actions/actions';
import { useEffect } from 'react';
import './App.css';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { MapContainer } from './containers/MapContainer';
import { CardList } from './containers/cardsList';
import { useAllTODOSQuery } from './hooks/useAllTODOS';
import { usePostCurrTime } from './hooks/useMutateTODOS';

function App() {
  const {getAllTODDOSData} = useAllTODOSQuery()
  const sendCurrTime = usePostCurrTime()
  
  // const dispatch = useDispatch()
  // const updateTODOSID = useSelector(GetTODOListNeedsChange)

  // const IDSChanges = useCallback(() => {
  //   const IDSSetObj = makeSetFromArr(updateTODOSID)
  //   const updateIDSArr = Array.from(IDSSetObj)
  //   return updateIDSArr
  
  // },[updateTODOSID])

  // useEffect(()=> {

       
    // const firstWantedIDSInfo = IDSChanges()
    // console.log(firstWantedIDSInfo)
    // dispatch(deleteChanges())
    // const secondWantedIDSInfo = IDSChanges()
    // console.log(secondWantedIDSInfo)

  // },[IDSChanges, dispatch])

  useEffect(()=> {
    getAllTODDOSData()
  },[getAllTODDOSData])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     sendCurrTime.mutate()
  //   }, 10000);
  //   return () => {
  //     clearTimeout(timer);
  //   } 
  // }, [sendCurrTime]);


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
