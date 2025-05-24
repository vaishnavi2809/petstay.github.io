import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/about';
import Contact from './Pages/contact';
import Services from './Pages/services';
import BookNow from './Pages/booknow';
import Navigation from './Component/Navigation';
import Footer from './Component/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book-now" element={<BookNow />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
