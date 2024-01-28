import { useEffect } from 'react';
import './App.css';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { MapContainer } from './containers/MapContainer';
import { CardList } from './containers/cardsList';
import { useAllTODOSQuery } from './hooks/useAllTODOS';
import { useDeltas } from './hooks/useDeltas';
// import { useSelector } from 'react-redux';
// import { GetFormDetails } from './selectors';
// import { TODOForm } from './components/TODOForm';

function App() {
  const {getAllTODDOSData} = useAllTODOSQuery()
  const {getDeltas} = useDeltas()
  // const FormDetails = useSelector(GetFormDetails)
  // const formDisplay = FormDetails.formDisplay

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
          {/* <TODOForm style={{display:formDisplay}}/> */}
          <MapContainer/>
          <CardList/> 
      </body>
    </div>

  );
}
export default App;
