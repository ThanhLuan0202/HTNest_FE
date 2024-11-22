import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import UserRouter from './User/UserRouter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
