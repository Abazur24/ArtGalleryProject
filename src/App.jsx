import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import ShoppingCart from './pages/ShoppingCart';
import SearchResults from './pages/SearchResults'; // Ensure to import SearchResults
import Payment from './pages/Payment';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/search" element={<SearchResults />} /> {/* Use :searchTerm as a parameter */}
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


