import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
    </div>
  );
}

export default App;
