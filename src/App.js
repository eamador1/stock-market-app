import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Euronext from './pages/Euronext';
import LondonExchange from './pages/LondonExchange';
import Nasdaq from './pages/Nasdaq';
import Hke from './pages/Hke';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/euronext" element={<Euronext />} />
        <Route path="/london-exchange" element={<LondonExchange />} />
        <Route path="/nasdaq" element={<Nasdaq />} />
        <Route path="/hke" element={<Hke />} />
      </Routes>
    </Router>
  );
}

export default App;
