import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
