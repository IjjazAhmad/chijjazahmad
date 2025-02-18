import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import NotFound from "../NotFound/PageNotFound";
import Services from "./Services";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hirebtn from "../../components/Hirebtn/Hirebtn";
export default function index() {
  return (
    <>
      <Header />
      <main>
        <Hirebtn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
