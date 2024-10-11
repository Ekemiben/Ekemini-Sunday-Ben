import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Landing from './components/landing/landing'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route path='/' element={<Landing />}/>
          <Route path='/men' element={<Navbar />}/>
          {/* <Route path='/men' element={<Na />}/> */}
     
          <Route path='*' element={< > Page Not Found</>}/>


        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
