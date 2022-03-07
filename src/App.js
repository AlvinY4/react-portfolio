import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
 
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
 
class App extends Component {
 render() {
   return (
     <HashRouter basename="/">
       <div className="app">
         <Header />
         <main>
         <Routes>
           <Route path="/" element= { <Home/> } />
           <Route path="/about" element={ <About/> } />
           <Route path="/contact" element= { <Contact/> } />
           <Route path="/portfolio" element={ <Portfolio/> } />
         </ Routes>
         </main>
         <Footer />
       </div>
     </HashRouter>
   );
 }
}
 
export default App;


