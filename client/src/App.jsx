import "./App.css";
import Layout from "./clients/Layout.jsx";
import FormDetails from "./components/FormDetails.jsx";
import Login from "./components/Login.jsx";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/client" element={<Layout />}>
          <Route index element={<FormDetails />} />
        </Route>

        <Route path="/admin" element={<FormDetails />} />
      </Routes>
    </>
  );
}

export default App;
