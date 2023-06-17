import './App.css';
import Header from './components/Header';
import Reservation from './components/Reservation/Reservation';
import TrendingDes from './components/TrendingDes/TrendingDes';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Offers from './components/Offerts/Offerts';
import PostTicket from './components/Ticket/PostTicket';
import PostContact from './components/ContactForm/PostContact';

function Home(){
  return(
    <div>
      <Header/>
      <Reservation/>
      <TrendingDes/>
    </div>
  )
}



function App() {
  return (
      <div>
        <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/' element={<TrendingDes/>}/>
          <Route path='/ticket' element={<PostTicket/>}/>
          <Route path='/contactus' element={<PostContact/>}/>
        </Routes>

        </Router>
       {/* <Header/>
       <Reservation/>
       <TrendingDes/> */}
      </div>
  );     
}

export default App;
