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
import Admin from './components/admin/admin_home'
import Shop from './components/shop/shop_home';
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
          <Route path="/admin" element={<Admin/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/business" element={<Business />}/>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
