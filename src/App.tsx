import React from 'react';
import './App.css';

import { useQuery } from '@tanstack/react-query';
import { getAll } from './services/astronauts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const queryResult = useQuery(['astronauts'], getAll);
  console.log('queryResult:', queryResult);

  const astronauts = queryResult.data || [];
  console.log('astronauts: ', astronauts);

  return (
    <Router>
      {/* <Menu /> */}
      <Routes>
        <Route path="/" element={<div>home</div>} />
        {/* <Route path="/astronaut/:id" element={<div></div>} /> */}
        <Route path="/about" element={<div>about</div>} />
        <Route path="/contact" element={<div>contact</div>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
