import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Catagories from './components/Catagories';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="catagories" element={<Catagories />} />
      </Routes>
    </div>
  );
}

export default App;
