import headerStyles from "./header.module.css"

function Header() {
    return (
        <div className={headerStyles.header}>
        <div className={headerStyles.innerHeader}>
          <div className={headerStyles.logoContainer}>
            <h1>Innovation Auto Hail Repair</h1>
          </div>
          <ul className={headerStyles.navigation}>
            <a><li>About</li></a>
            <a><li>Contact</li></a>
            <a><li>Book With Us</li></a>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Header;
  