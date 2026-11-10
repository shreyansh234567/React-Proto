import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Course from "./components/course.jsx";
import Signup from "./components/Signup.jsx";
// import Bonus from "./components/Bonus";
// import Now from "./components/Now";
// import Event from "./components/Event";
// import Form from "./components/Form";
import List from "./components/List.jsx";
import { useAuth } from "./context-api/AuthContext.jsx";

function App() {

  const { token } = useAuth()
  console.log(token);

  return (
    <Routes>
      {token ? (
        <>

          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/list" element={<List />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      )}
    </Routes>
  )

}

export default App;