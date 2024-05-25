import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Train from "./Pages/Train";
import Flight from "./Pages/Flight";
import Holiday from "./Pages/Holiday";
import Forex from "./Pages/Forex";
import Bus from "./Pages/Bus";
import Login from "./Pages/Login";
import Hotel from "./Pages/Hotel";
import Cabs from "./Pages/Cabs";
import Footer from "./Component/Footer/Footer";
import FooterContent from "./Component/FooterContent/FooterContent";
import FooterContact from "./Component/Footer-contact/FooterContact";
import FooterLogos from "./Component/FooterLogos/FooterLogos";

function App() {
  useEffect(() => {
    sessionStorage.setItem(
      "user",
      JSON.stringify({ email: "test@test.com", password: "1234" })
    );
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Flight />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/train" element={<Train />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <FooterContent />
      <FooterContact />
      <FooterLogos />
    </>
  );
}

export default App;
