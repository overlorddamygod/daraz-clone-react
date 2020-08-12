import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; 
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Categories from './components/Categories';
import CategoriesSection from './components/CategoriesSection';
import JustForYou from './components/JustForYou';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <div className="body container">
        <Categories/>
        <CategoriesSection/>
        <JustForYou/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
