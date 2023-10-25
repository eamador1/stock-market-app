import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Euronext from './pages/EuronextPage';
import LondonExchange from './pages/LondonExchangePage';
import Nasdaq from './pages/NasdaqPage';
import Hke from './pages/HkePage';

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
