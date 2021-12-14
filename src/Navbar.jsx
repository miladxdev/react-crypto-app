import { IoSearch } from "react-icons/io5";


const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <div className="page-wrapper">
        <nav>
          <div className="nav-logo">
            <span>coingecko</span>
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
              <a href="#">Price</a>
            </li>
            <li>
              <a href="#">Market</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
