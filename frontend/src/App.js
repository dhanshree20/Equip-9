import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
