import { IoSearch } from "react-icons/io5";
import logo from './img/logo.png'

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="page-wrapper">
        <nav>
          <div className="nav-logo">
            <a href="/"><img src={logo} alt="logo" /></a>
            <span>Tetra</span>
          </div>

          <div className="search-container">
            <input
              className="search-input"
              type="seach"
              placeholder="search..."
            />

            <div className="search-icon">
              <IoSearch />
            </div>
          </div>
          
          <ul className="nav-list">
            <li>
              <a className="nav-link" href="#">Price</a>
            </li>
            <li>
              <a className="nav-link" href="#">Market</a>
            </li>
            <li>
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
