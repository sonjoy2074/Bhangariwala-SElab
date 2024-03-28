import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Business from './components/business/business';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Business/>
      
      <Footer/>
    </div>
  );
}

export default App;
