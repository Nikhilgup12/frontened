import { Component } from "react"; 
import Cookies from 'js-cookie'
import { withRouter } from "react-router-dom";
import { FaShoppingCart} from "react-icons/fa"; 
import {GiHamburgerMenu} from 'react-icons/gi'
import NavbarMobile from "../NavbarMobile"
import "./index.css"

class Navbar extends Component{ 
    state = {isNavbar:false} 

    onToggleNavbar=()=>{
        this.setState((prevState)=>({
            isNavbar : !prevState.isNavbar
        }))
    } 
    
    onLogoutBtn = () => {
        Cookies.remove('jwt_token')
        const {history} = this.props
        history.replace('/login')
      }

    render(){
        const {isNavbar}= this.state 
        return (
            <>
            <nav className="nav-container">
                <div className="nav-content">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1694075003/organic-store-logo5_lraye4.svg" class="nav-logo-mobile" alt="organic-store" />
                <ul className="nav-item-list">
                <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1694075003/organic-store-logo5_lraye4.svg" class="nav-logo" alt="organic-store" /> </li>
                <li className="nav-item"> Everything </li>
                <li className="nav-item"> Groceries  </li>
                <li className="nav-item"> Juices  </li>
            </ul>
            <ul className="nav-secton-list">
                <li className="nav-item"> About </li>
                <li className="nav-item"> Contact  </li> 
                <li className="nav-item"> Cart </li>
                <button className="nav-logout-button" onClick={this.onLogoutBtn} type="button">
                    <li> Logout </li>
                </button>
                
            </ul>
            <ul className="nav-section-mobile-list"> 
                <li> <FaShoppingCart size={20} /> </li>
                <li onClick={this.onToggleNavbar}> <GiHamburgerMenu size={20}/> </li>
            </ul>
        </div>
     </nav>
     {isNavbar && <NavbarMobile closeNavbar={this.onToggleNavbar} />}
    </>
        )
    }
}
    


export default withRouter(Navbar) 