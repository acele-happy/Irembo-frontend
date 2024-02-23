import LandingPage from "./Pages/LandingPage";
import Navbar from "./Pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;