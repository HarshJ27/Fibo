import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {

  return (
    <Router>
    <Routes>
      <Route exact path="/" Component={Login} />
      <Route path="/dashboard" Component={Dashboard}  />
      </Routes>
    </Router>
  );
}

export default App;

