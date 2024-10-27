import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomingPage from './pages/WelcomingPage';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<WelcomingPage/>} />
          <Route path ="/Sign-In" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
