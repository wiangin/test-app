import './App.css'
import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from './pages/Home';
function App() {


  return (
    <>
      <Routes>
        <Route path="*" element={<h1>NoFounded</h1>} />
        <Route path="/chat" element={
          <>
            <></>
          </>
        } />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
