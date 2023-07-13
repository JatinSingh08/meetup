import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Event } from "./components";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App mx-12 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
