import { Person } from "@material-ui/icons";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
        <Routes>      
            <Route path="/" element={ user ? <Home/> : <Register/> }/> 
            <Route path="/login" element={ user ? <Link to="/"/> : <Login/>}/> 
            <Route path="/register" element={ user ? <Link to="/"/> : <Register/>}/> 
            <Route path="/profile/:username" element={<Profile/>}/>    
        </Routes>
    </BrowserRouter>
  );
}

export default App;
