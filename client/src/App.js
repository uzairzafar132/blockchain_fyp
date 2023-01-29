import "./App.css";
import AssignRoles from "./AssignRoles";
import Footer from "./Footer";
import Home from "./Home";
import AddMed from "./AddMed";
import Supply from "./Supply";
import Track from "./Track";
import Report from "./Report";

import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

import Signup from "./components/Singup";
import Login from "./components/Login/index";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";


function App() {
  const user = localStorage.getItem("token");
  console.log(user);
  return (
    <Router>
      <Routes>
        {user && <Route path="/addmed" exact element={<AddMed />} />}
        {user && <Route path="/supply" exact element={<Supply />} />}
        {user && <Route path="/track" exact element={<Track />} />}
        {user && <Route path="/contact" exact element={<Report />} />}
        {user && <Route path="/" exact element={<Home />} />}
        {user && <Route path="/roles" exact element={<AssignRoles />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
       
      </Routes>
      {user && <Footer />}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
