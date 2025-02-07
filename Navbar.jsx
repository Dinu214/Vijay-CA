import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Vijay CA</Link>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Link>
        <Link to="/videos" className={location.pathname === '/videos' ? 'active' : ''}>VIDEOS</Link>
        <Link to="/invite" className={location.pathname === '/invite' ? 'active' : ''}>INVITE</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Link>
      </div>
      <div className="menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;