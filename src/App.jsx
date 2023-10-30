import { useState } from 'react';
import './App.css';
import { HeaderInput } from './components/HeaderMainInput.';
import { ItemList} from './containers/ItemList.'
import { AppWrapper } from './containers/AppWrapper';

function App() {

  const [status,setStatus] = useState('active')

  return (
    <div className="App">
      <h1>Avi Berger Pressents - My Dear Son</h1>
      <AppWrapper>

      </AppWrapper>
    </div>
  );
}
export default App;
