import './Header.css';
import logo from '../../assets/img/log.png'

const Header = () => {

  return (
    <div className='header_block'>
      <nav className="navbar">
        <div className="container-header">
          <img src={ logo } alt="log"  className="log"/>
          <p className="navbar-text">
             Your Pet!
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Header;