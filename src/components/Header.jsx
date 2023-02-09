import { Link } from "react-router-dom";

const Header = () => {
  return <header>
    <Link to="/" style={{textDecoration: 'none'}}>
      <h1>NCNEWS</h1>
      <p>Bringing the latest to you</p>
    </Link>
    
  </header>;
};

export default Header;