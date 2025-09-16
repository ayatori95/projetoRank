import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Ranking from './pages/Ranking';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container flex-grow-1">
        <Routes>
          <Route path='/' element={<Ranking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
