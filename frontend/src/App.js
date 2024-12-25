/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage';

function App() {
  return (

    <Routes>
      <Route path="/Home" element={<LandingPage/>} />
    </Routes>
  );
}

export default App;
