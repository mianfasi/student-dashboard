import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudentDetails from "./pages/StudentDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
