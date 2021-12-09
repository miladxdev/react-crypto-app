const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <div className="page-wrapper">
        <nav>
          <div className="nav-logo">
            <span>coingecko</span>
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
