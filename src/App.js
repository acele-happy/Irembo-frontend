import LandingPage from "./Pages/LandingPage";
import Navbar from "./Pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import Landing from "./Pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        {/* <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
