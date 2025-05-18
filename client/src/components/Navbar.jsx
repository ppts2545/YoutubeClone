import './Navbar.css';
import youtubeLogo from '../assets/youtube32.png';
import searchIcon from '../assets/search24.png';
import accountIcon from '../assets/accountIcon32.png';
import hamburgerIcon from '../assets/hamburger32.png';

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar">
            <div className='navbar-left'>
                <div className='hamburger-menu' onClick={toggleSidebar}>
                    <img src={hamburgerIcon} alt="Menu" />
                </div>
                <div className="logo">
                    <img src={youtubeLogo} alt="YouTube Logo" className="logo"/>
                </div>
            </div>
           
            <div className="navbar-center">
                <input type="text" placeholder="Search" className="search-input" />
                <button className="search-btn">
                    <img src={searchIcon} alt="Search" className="pdf-icon" />
                </button>
            </div>
             <div className="navbar-right">
                <button className="icon-btn">📹</button>
                <button className="icon-btn">🔔</button>
                <img src={accountIcon} alt="User" className="profile-pic" />
            </div>
        </nav>
    );
};

export default Navbar;