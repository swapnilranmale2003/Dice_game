import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage/Homepage';
import Game from './component/Game/Game';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/game' element={<Game />} />
     </Routes>
    </div>
  );
}

export default App;
