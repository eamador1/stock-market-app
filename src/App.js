import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Detail from './components/CompanyDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:content" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
