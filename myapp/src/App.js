import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
