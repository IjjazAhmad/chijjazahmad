import React from "react";
import { Route, Routes } from "react-router-dom";
import Frontend from "./Frontend";
import BackToTopButton from "../components/BackToTopBtn";

export default function Index() {
  return (
    <>
      <BackToTopButton />
      <Routes>
        <Route path="/*" element={<Frontend />} />
      </Routes>
    </>
  );
}
