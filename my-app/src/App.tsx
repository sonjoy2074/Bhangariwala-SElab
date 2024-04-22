import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Login from './components/login/login';
import Registration from './components/registration/reg'
//import About from './components/About/About';
import Blog from './components/blog/blog';
import Business from './components/business/business';
import Profile from './components/profile/profile';
import Pickup from './components/pickup/pickup';
export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/pickup" element={<Pickup/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/business" element={<Business />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
