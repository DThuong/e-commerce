import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import {Login, Home, Public} from './pages/public'
import path from './utils/path'
import { getCategory } from './store/asyncActions';
import {useDispatch} from 'react-redux'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory())
  }, [])
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
