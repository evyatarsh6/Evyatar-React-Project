import './App.css';
import { HeaderBar } from './components/HeaderBar';
import { CardList } from './containers/cardsList';

function App() {

  return (

    <div className='App'>
    <body style={{
      width:"100%"
    }}>
    <HeaderBar/>
    <CardList/> 
    </body>
  </div>

  );
}
export default App;
