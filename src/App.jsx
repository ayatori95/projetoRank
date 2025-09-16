import {Routes, Route} from 'react-router-dom';
import Ranking from './pages/Ranking';
import './App.css';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Ranking />} />
      </Routes>
  )
}

export default App