import './App.css';
import Header from './components/Header';
import Reservation from './components/Reservation/Reservation';
import TrendingDes from './components/TrendingDes/TrendingDes';
import React from 'react';


function App() {
  return (
      <div>
       <Header/>
       <Reservation/>
       <TrendingDes/>
      </div>
  );     
}

export default App;
