import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Newsletter from "./components/Newsletter";
import Form from "./components/Form";
import Testimonials from "./components/Testimonials";

function App() {
  // const navigate = useNavigate();

  const handleCloseForm = () => {
    console.log("CLOSE CLICKED!");
    // navigate("/");
  };
  const handleShowForm = () => {
    // navigate("/form");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar onBookSession={handleShowForm} />
              {/* <Navbar2 /> */}
              <Hero onGetStartedClick={handleShowForm} />
              <Testimonials />
              <Analytics />
              <Cards />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route
          path="/services"
          element={<Cards onGetStartedClick={handleShowForm} />}
        />
        <Route
          path="/about"
          element={<Analytics onGetStartedClick={handleShowForm} />}
        />
        <Route path="/form" element={<Form onCloseClick={handleCloseForm} />} />
      </Routes>
    </Router>
  );
}

export default App;
