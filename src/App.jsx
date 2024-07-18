import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Main } from "./Components/Main/Main";
import { Search } from "./Components/Search/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <div className="main-layout">
              <Sidebar />
              <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
