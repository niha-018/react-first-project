// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} exact></Route>

          <Route path="/add-meetup" element={<NewMeetup />}></Route>

          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </Layout>
    
  );
}

export default App;
