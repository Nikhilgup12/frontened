import {Component} from "react" 
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

    onSubmitForm = async (event)=>{
        event.preventDefault()  
        const {username,password,email}= this.state 
        const userdetails = {username,password,email}
        const url="https://react-login-app.onrender.com/register" 
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
        if (response.ok == true){
            this.setState({message:data.message})
        }
        else{
            this.setState({message:data.message})
        }

    }

    render(){
        const {username,password,email,message}= this.state 

        return (
            <>
             <div className="register-page-main-container">
                <div>
                    <form onSubmit={this.onSubmitForm}>
                        <div>
                            <label htmlFor="username" > Username </label> <br/> 
                            <input type="text" onChange={this.onUsername} placeholder="Enter Username" id="username" value={username} /> 
                        </div> 
                        <div>
                            <label htmlFor="email" > Email </label> <br/> 
                            <input type="email" onChange={this.onEmail} placeholder="Enter Email"  id="email" value={email} /> 
                        </div> 
                        <div>
                            <label htmlFor="password" > Password </label> <br/> 
                            <input type="password" onChange={this.onPassword} placeholder="Enter Password"  id="password" value={password} /> 
                        </div> 
                        <button type="submit"> Submit </button>
                        <p> {message} </p>
                    </form>
                </div>
             </div>
            </>
        )
    }
} 

export default RegisterForm 