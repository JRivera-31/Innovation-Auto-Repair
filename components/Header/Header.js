import "./module.css"
function Header() {
    return (
        <div className="header">
        <div className="innerHeader">
          <div className="logoContainer">
            <h1>Innovation Auto Hail Repair</h1>
          </div>
          <ul className="navigation">
            <a><li>About</li></a>
            <a><li>Contact</li></a>
            <a><li>Book With Us</li></a>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Header;
  