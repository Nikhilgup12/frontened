import {Component} from "react" 
import {Link,useNavigate} from "react-router-dom" 
import "./index.css" 

class RegisterForm extends Component{
    state={username:"",email:"",password:"",message:""} 

    onUsername =(event)=>{
        this.setState({username:event.target.value})
    } 

    onPassword =(event)=>{
        this.setState({password:event.target.value})
    } 

    onEmail =(event)=>{
        this.setState({email:event.target.value})
    } 
    
    onSuccess=()=>{
        const {history} = this.props 
        history.replace("/login")
    } 

    onFailure=(error)=>{
        this.setState({message:error})
    } 

    onSubmitForm = async (event)=>{
        event.preventDefault()  
        const {username,password,email}= this.state 
        const userdetails = {username,password,email}
        const url="https://react-login-deploy-app.onrender.com/register" 
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                 "Accept":"application/json"
            },
            body:JSON.stringify(userdetails)
        }

        const response = await fetch(url,options) 
        const data = await response.json()
        if (response.ok === true){
            this.onSuccess()
        }
        else{
            this.onFailure(data.message)
        }
        
    }

    renderInputUsername =()=>{
        const {username} = this.state 
        return (
        <>
          <label htmlFor="username" className="username-label"> Username </label> <br/> 
          <input type="text" onChange={this.onUsername} placeholder="Enter Username" id="username" value={username} className="username-input"/> 
        </>
        )
        
    }

    renderInputPassword =()=>{
        const {password}= this.state
        return (
        <>
          <label htmlFor="password" className="username-label"> Password </label> <br/> 
          <input type="password" onChange={this.onPassword} placeholder="Enter Password"  id="password" value={password}  className="username-input"/> 
        </>
       )
    }

    renderInputEmail=()=>{
        const {email} = this.state
        return (
         <>
         <label htmlFor="email" className="username-label"> Email </label> <br/> 
         <input type="email" onChange={this.onEmail} placeholder="Enter Email"  id="email" value={email}  className="username-input"/> 
        </>
        )
        
    }

    render(){
        const {message}= this.state 
        return (
            <>
             <div className="register-page-main-container">
                    <form onSubmit={this.onSubmitForm} className="form-container">
                        <div className="register-container">
                            <h1 className="register-heading"> Register </h1> 
                            <p className="register-para"> Please fill in the fields below: </p>
                        </div>
                        <div className="username-container">
                           {this.renderInputUsername()}
                        </div> 
                        <div className="username-container">
                            {this.renderInputPassword()}
                        </div> 
                        <div className="username-container">
                            {this.renderInputEmail()} 
                        </div> 
                        <button type="submit" className="register-button"> Create Account  </button>
                        <p className="register-error-para"> {message} </p>
                        <p className="already-account-para"> Already have an account? <Link to="/login">Login  </Link></p>
                    </form>
             </div>
            </>
        )
    }
} 


export default RegisterForm


