import {BrowserRouter,Routes,Route} from "react-router-dom"
import RegisterForm  from "./components/RegisterForm"
import LoginForm  from "./components/LoginForm"
import Home from "./components/Home" 
import ProtectedRoute  from "./components/ProtectedRoute"
import './App.css';

const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<RegisterForm />} /> 
      <ProtectedRoute  exact path="/login" element={<LoginForm />} /> 
      <ProtectedRoute  exact path="/" element={<Home />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App;
