import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

class LoginForm extends Component {
  state = { username: "", password: "", message: "", onSubmitError: false };

  onUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  onPassword = (event) => {
    this.setState({ password: event.target.value });
  }

  onSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    const { history } = this.props;
    history.replace('/');
  }

  onFailure = (error) => {
    this.setState({ message: error, onSubmitError: true });
  }

  onSubmitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userdetails = { username, password };
    const url = "https://react-login-deploy-app.onrender.com/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userdetails)
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(response) 
    console.log(data) 
    if (response.ok === true) {
      this.onSuccess(data.jwtToken);
    } else {
      this.onFailure(data.message);
    }
  }

  renderInputUsername = () => {
    const { username } = this.state;
    return (
      <>
        <label htmlFor="username" className="username-label"> Username </label> <br />
        <input type="text" onChange={this.onUsername} placeholder="Enter Username" id="username" value={username} className="username-input" />
      </>
    );
  }

  renderInputPassword = () => {
    const { password } = this.state;
    return (
      <>
        <label htmlFor="password" className="username-label"> Password </label> <br />
        <input type="password" onChange={this.onPassword} placeholder="Enter Password" id="password" value={password} className="username-input" />
      </>
    );
  }

  render() {
    const { message, onSubmitError } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }

    return (
      <div className="register-page-main-container">
        <form onSubmit={this.onSubmitForm} className="form-container">
          <div className="register-container">
            <h1 className="register-heading"> Login </h1>
            <p className="register-para"> Please enter your username and password: </p>
          </div>
          <div className="username-container">
            {this.renderInputUsername()}
          </div>
          <div className="username-container">
            {this.renderInputPassword()}
          </div>
          <button type="submit" className="register-button"> Login </button>
          {onSubmitError && <p className="register-error-para"> *{message} </p>}
          <p className="already-account-para"> New customer? <Link to="/register"> Create an account </Link></p>
        </form>
      </div>
    );
  }
}

export default LoginForm
