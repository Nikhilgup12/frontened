import Popup from 'reactjs-popup'
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
          <div>
            <div>
              <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="user" />
              <button onClick={closeNavbar}>&times;</button>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <p> Everything  </p>
                  </div>
                </Link>
                <Link to="/trending">
                  <div>
                    <p> Groceries  </p>
                  </div>
                </Link>
                <Link to="/gaming">
                  <div>
                    <p> Juices  </p>
                  </div>
                </Link>
                <Link to="/gaming">
                  <div>
                    <p> About  </p>
                  </div>
                </Link>
                <Link to="/gaming">
                  <div>
                    <p> Contact </p>
                  </div>
                </Link>
                
                <Popup
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
                </Popup>
              </div> 
              </div>
              </div>
              </nav>  
              </> 
 )
 } 

export default withRouter(NavbarMobile) 