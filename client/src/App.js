
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Announcements from "./pages/Announcements/Announcements.js";
import Listings from "./pages/Listings/Listings.js";
import NavBar from "./components/NavBar/NavBar.js";
import ListingForm from "./components/ListingForm/ListingForm.js"


export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Announcements />} />
        <Route path="/Listings" element={<Listings />} />
        <Route path="/test" element={<ListingForm />} />
      </Routes>
    </Router>
  );
}


