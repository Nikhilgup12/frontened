import {BrowserRouter,Routes,Route} from "react-router-dom"
import RegisterForm  from "./components/RegisterForm"
import LoginForm  from "./components/LoginForm"
import './App.css';

const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<RegisterForm />} /> 
      <Route exact path="/login" element={<LoginForm />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App;
