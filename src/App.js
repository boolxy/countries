import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routes/main';
import Country from './routes/country';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/:id" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
