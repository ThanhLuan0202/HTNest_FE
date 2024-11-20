import User from './User/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<User/>}  />


      </Routes>


    </Router>
  );
}

export default App;
