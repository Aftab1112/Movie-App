import React from "react";
import Home from "./Home";
import SingleMoivie from "./SingleMoivie";
import Error from "./Error";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMoivie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
