import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/routes';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
