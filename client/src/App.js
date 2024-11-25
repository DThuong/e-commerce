import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Login, Home, Public} from './pages/public'
import path from './utils/path'
function App() {
  return (
    <div className="min-h-screen font-main">
     <Routes>
      {/* Main public route */}
      <Route path={path.PUBLIC} element={<Public/>}>
          {/* Nested route */}
        <Route path={path.HOME} element={<Home/>} />
        <Route path={path.LOGIN} element={<Login/>} />
      </Route>
     </Routes>
    </div>
  );
}

export default App;
