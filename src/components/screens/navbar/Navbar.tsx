import './Navbar.scss'

const Navbar = () => {  

    return (      
        <div className="navbar">
          <a href="" className="navbar__logo">Perfect</a>

          <button className="navbar__hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>

          <div className="navbar__linkwrap">
            <span className="navbar__link selectedlink">Home</span>
            <span className="navbar__link">My Profile</span>
            <span className="navbar__link">Activity</span>
            <span className="navbar__link">How It Works</span>
          </div>  

          <div className="navbar__buttonwrap">
            <button className="navbar__createbtn selectedbtn">CREATE</button>
            <button className="navbar__createbtn">SIGN IN</button>
          </div>
        </div>    
    )
}
  
export default Navbar