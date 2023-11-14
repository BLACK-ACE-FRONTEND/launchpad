"use client"

import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavAbout from './NavAbout';
import NavFeed from './NavFeed';
import NavEvents from './NavEvents';

function AboutRoute() {
  return (
    <Router>
    <div>
      <ul className='flex justify-between mx-5'>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>

      <Routes>
        {/* <Route path="/feed" element={<NavFeed/>} />
        <Route path="/events" element={<NavEvents/>} />
        <Route path="/" element={<NavAbout/>} /> */}
          <Route path="/">
            <Route  index element={<NavAbout/>}></Route> 
            <Route path='/feed' element={<NavFeed/>}></Route>
            <Route path='/events' element={<NavEvents/>}></Route>
          </Route>
          
      </Routes>
    </div>
  </Router>
  )
}

export default AboutRoute
