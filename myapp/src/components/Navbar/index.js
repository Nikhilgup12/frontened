import { Component } from "react"; 
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


    render(){
        const {isNavbar}= this.state 
        return (
            <>
            <nav className="nav-container">
                <div className="nav-content">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1694075003/organic-store-logo5_lraye4.svg" class="nav-logo-mobile" alt="organic-store" />
                    <ul className="nav-item-list">
                <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1694075003/organic-store-logo5_lraye4.svg" class="nav-logo" alt="organic-store" /> </li>
                <li> Everything </li>
                <li> Groceries  </li>
                <li> Juices  </li>
            </ul>
            <ul className="nav-secton-list">
                <li> About </li>
                <li> Contact  </li> 
                <li> Cart </li> 
                <li> Logout </li>
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
    


export default Navbar 