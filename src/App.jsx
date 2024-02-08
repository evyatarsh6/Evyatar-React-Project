import { useEffect } from 'react'
import './App.css'
import { HeaderBar } from './components/HeaderBar/HeaderBar'
import { MapContainer } from './components/containers/MapContainer'
import { CardList } from './components/containers/cardsList'
import { useGetAllTODOSQuery } from './hooks/useGetAllTODOS'
import { useDeltas } from './hooks/useDeltas'

function App() {
  const { getAllTODDOSData } = useGetAllTODOSQuery()
  const { getDeltas } = useDeltas()

  useEffect(() => {
    getAllTODDOSData()
  }, [getAllTODDOSData])

  useEffect(() => {
    getDeltas()
  }, [getDeltas])

  return (

    <div className='App'>
      <body>
        <HeaderBar />
        <MapContainer />
        <CardList />
      </body>
    </div>

  )
}
export default App
