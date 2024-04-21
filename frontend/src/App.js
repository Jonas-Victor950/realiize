import "./App.css";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
