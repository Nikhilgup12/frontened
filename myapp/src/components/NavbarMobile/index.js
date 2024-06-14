// import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom' 
import "./index.css" 

const NavbarMobile = props => {
    const {closeNavbar} = props

    const onLogoutBtn = () => {
      Cookies.remove('jwt_token')
      const {history} = props
      history.replace('/login')
    }
  
    return (
      <>
        <nav className='navbar-mobile'> 
            <div className='navbar-mobile-cross-container'>
              <button onClick={closeNavbar} className='navbar-mobile-cross-button'>&times;</button>
            </div>
            
            <div className='navbar-container'>
                <div className='nav-mobile-item'>
                    <p className='nav-menu-items'> About us  </p>
                </div>
                <div className='nav-mobile-item'>
              
                    <p className='nav-menu-items'>  Dental Treatments </p>
               
                </div>
                <div className='nav-mobile-item'>
              
                    <p className='nav-menu-items'>  Facial Aesthetics    </p>
              
                </div>
                <div className='nav-mobile-item'>
             
                    <p className='nav-menu-items'> Contact   </p>
             
                </div>
                <div className='nav-mobile-item'>
             
               <button className='navbar-mobile-logout'  onClick={onLogoutBtn}> Logout </button>
      
         </div>
                </div> 
              
           
           </nav> 
                
                {/* <Popup
                  modal 
                  trigger={
                    <div>
                      <button>Logout</button>
                    </div>
                  }
                >
                  {close => (
                    <div>
                      <h1>
                        Are you sure, you want to logout?
                      </h1>
                      <div>
                        <button onClick={() => close()}>
                          Cancel
                        </button>
                        <button onClick={onLogoutBtn}>
                          Confirm
                        </button>
                      </div>
                    </div>
                  )}
                </Popup> */}
              
              
              </> 
 )
 } 

export default withRouter(NavbarMobile) 