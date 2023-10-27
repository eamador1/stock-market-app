import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Euronext from './pages/EuronextPage';
import LondonExchange from './pages/LondonExchangePage';
import Nasdaq from './pages/NasdaqPage';
import Hke from './pages/HkePage';
import Nse from './pages/NsePage';
import Nyse from './pages/NysePage';
import Detail from './components/CompanyDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/euronext" element={<Euronext />} />
        <Route path="/euronext/:content" element={<Detail />} />
        <Route path="/london-exchange" element={<LondonExchange />} />
        <Route path="/nasdaq" element={<Nasdaq />} />
        <Route path="/hke" element={<Hke />} />
        <Route path="/nse" element={<Nse />} />
        <Route path="/nyse" element={<Nyse />} />
      </Routes>
    </Router>
  );
}

export default App;
