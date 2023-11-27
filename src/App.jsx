import './App.css';
import { AppWrapper } from './containers/AppWrapper';
import { HeaderBar } from './components/HeaderMainInput.';
import { CardList } from './containers/cardsList';

function App() {

  return (

    <div className='App'>
    <body>
    <h1>Avi Akiva Berger Presents - My Dear Son</h1>
    <HeaderBar/>
    <form>
    <CardList/>
    </form>
    </body>
  </div>

  );
}
export default App;
